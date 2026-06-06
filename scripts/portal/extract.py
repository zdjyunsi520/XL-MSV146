import os, re, glob

results = []

def extract_quoted_strings(content, fpath):
    """Extract all double-quoted strings that appear to be dialogue text."""
    entries = []
    # Find all double-quoted strings in the content
    for m in re.finditer(r'"((?:[^"\\]|\\.)*)"', content):
        text = m.group(1)
        # Skip if it looks like a variable name, number, or code
        if not text:
            continue
        # Skip pure numbers, single words that are code identifiers
        if re.match(r'^[a-zA-Z_]\w*$', text):
            continue
        if re.match(r'^\d+$', text):
            continue
        # Skip strings that are clearly code (paths, file extensions, etc)
        if re.match(r'^\w+\.\w+$', text):
            continue
        if re.match(r'^stage\d_', text):
            continue
        if text.startswith('stage6_'):
            continue
        # Must contain English letters to be dialogue
        if not re.search(r'[a-zA-Z]{2,}', text):
            continue
        # Must look like a sentence/dialogue (contains spaces or common punctuation)
        if ' ' in text or '.' in text or '!' in text or '?' in text or ',' in text:
            entries.append(f'{fpath}|{text}')
    return entries

for fpath in sorted(glob.glob('*.js')):
    try:
        with open(fpath, 'rb') as f:
            raw = f.read()
        try:
            content = raw.decode('utf-8')
        except:
            content = raw.decode('latin-1')
    except:
        continue

    results.extend(extract_quoted_strings(content, fpath))

seen = set()
unique = []
for r in results:
    if r not in seen:
        seen.add(r)
        unique.append(r)

with open('extract_en.txt', 'w', encoding='utf-8') as f:
    for r in unique:
        f.write(r + '\n')
print(f'Extracted {len(unique)} entries')
