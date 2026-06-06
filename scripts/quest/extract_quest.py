import os, re, glob

TRAN_DIR = os.path.dirname(os.path.abspath(__file__))
results = []

def is_dialogue(text):
    if not text:
        return False
    if text.startswith('Effect/') or text.startswith('UI/'):
        return False
    if re.match(r'^[a-z]+\d*=o(?:;[a-z]+\d*=o)*$', text):
        return False
    if re.match(r'^[a-z]+\d*=o;', text):
        return False
    if re.search(r'[ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿ]{3,}', text):
        return False
    if re.match(r'^[a-zA-Z_][\w./]*$', text):
        return False
    if not re.search(r'[a-zA-Z]{2,}', text):
        return False
    if not re.search(r'[ .!?,;\']', text):
        return False
    if len(text) < 4:
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
