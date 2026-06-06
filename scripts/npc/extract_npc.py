import os, re, glob

TRAN_DIR = os.path.dirname(os.path.abspath(__file__))
results = []

def is_dialogue(text):
    """Check if a string is actual dialogue text."""
    if not text:
        return False
    # Skip UI/effect paths
    if text.startswith('Effect/') or text.startswith('UI/'):
        return False
    # Skip property assignment strings like mo1=o;mo2=o
    if re.match(r'^[a-z]+\d*=o(?:;[a-z]+\d*=o)*$', text):
        return False
    if re.match(r'^[a-z]+\d*=o;', text):
        return False
    if re.match(r'^normal=o;', text):
        return False
    if re.match(r'^cmd=o;', text):
        return False
    # Skip Korean garbled text
    if re.search(r'[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]{3,}', text):
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
    # Skip very short strings that are likely code
    if len(text) < 4:
        return False
    # Skip strings that look like quest/property data
    if re.match(r'^[a-z]+=o(;[a-z]+=o)*$', text):
        return False
    return True

for fpath in sorted(glob.glob(os.path.join(TRAN_DIR, '*.js'))):
    fn = os.path.basename(fpath)
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
        if is_dialogue(text):
            results.append(f'{fn}|{text}')

seen = set()
unique = []
for r in results:
    if r not in seen:
        seen.add(r)
        unique.append(r)

out_path = os.path.join(TRAN_DIR, 'extract_en.txt')
with open(out_path, 'w', encoding='utf-8') as f:
    for r in unique:
        f.write(r + '\n')
print(f'Extracted {len(unique)} dialogue entries from {len(glob.glob(os.path.join(TRAN_DIR, "*.js")))} files')
