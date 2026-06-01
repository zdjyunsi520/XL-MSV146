import os, re, glob

results = []

def is_dialogue(text):
    """Check if a string is actual dialogue text, not a path/code/variable."""
    # Skip UI/effect paths
    if text.startswith('Effect/') or text.startswith('UI/'):
        return False
    # Skip pure "Error: " messages
    if text.strip() in ('Error:', 'Error: '):
        return False
    # Skip stage property references
    if text.startswith('stage6_') or text.startswith('stage') and re.match(r'^stage\d', text):
        return False
    # Skip garbled Korean text (EUC-KR decoded as latin-1)
    if re.search(r'[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]{5,}', text):
        return False
    # Skip pure code identifiers without spaces
    if re.match(r'^[a-zA-Z_][\w./]*$', text):
        return False
    # Must contain at least 2 English letters
    if not re.search(r'[a-zA-Z]{2,}', text):
        return False
    # Must have spaces or punctuation to look like dialogue
    if not re.search(r'[ .!?,;:\']', text):
        return False
    return True

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

    for m in re.finditer(r'"((?:[^"\\]|\\.)*)"', content):
        text = m.group(1)
        if not text:
            continue
        if is_dialogue(text):
            results.append(f'{fpath}|{text}')

seen = set()
unique = []
for r in results:
    if r not in seen:
        seen.add(r)
        unique.append(r)

with open('extract_en.txt', 'w', encoding='utf-8') as f:
    for r in unique:
        f.write(r + '\n')
print(f'Extracted {len(unique)} dialogue entries')
