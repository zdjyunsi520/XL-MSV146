"""
Portal script translation replacer.
Reads extract_en.txt and extract_cn.txt, replaces English dialogue with Chinese
in the JS files using binary-safe replacement to preserve original encoding.
"""
import os, glob, sys

# Fix GBK console encoding crash
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

TRAN_DIR = os.path.dirname(os.path.abspath(__file__))

# Load translation pairs
en_lines = open(os.path.join(TRAN_DIR, 'extract_en.txt'), 'r', encoding='utf-8').readlines()
cn_lines = open(os.path.join(TRAN_DIR, 'extract_cn.txt'), 'r', encoding='utf-8').readlines()

# Build per-file translation map: { filename: [(en_bytes, cn_bytes), ...] }
file_translations = {}
for en_line, cn_line in zip(en_lines, cn_lines):
    en_line = en_line.strip()
    cn_line = cn_line.strip()
    if '|' not in en_line or '|' not in cn_line:
        continue
    en_fn, en_text = en_line.split('|', 1)
    cn_fn, cn_text = cn_line.split('|', 1)
    if en_fn != cn_fn:
        print(f"WARNING: filename mismatch {en_fn} vs {cn_fn}")
        continue
    # Encode as latin-1 to match file encoding for replacement
    # The files may be UTF-8 or EUC-KR; we do byte-level replacement
    en_bytes = en_text.encode('utf-8')
    cn_bytes = cn_text.encode('utf-8')
    if en_fn not in file_translations:
        file_translations[en_fn] = []
    file_translations[en_fn].append((en_bytes, cn_bytes, en_text, cn_text))

print(f"Loaded translations for {len(file_translations)} files")

# Process each file
total_replacements = 0
errors = 0

for fn, translations in sorted(file_translations.items()):
    fpath = os.path.join(TRAN_DIR, fn)
    if not os.path.exists(fpath):
        print(f"SKIP: {fn} not found")
        continue

    # Read file as raw bytes
    with open(fpath, 'rb') as f:
        data = f.read()

    original_data = data
    file_replacements = 0

    for en_bytes, cn_bytes, en_text, cn_text in translations:
        count = data.count(en_bytes)
        if count == 0:
            # Try latin-1 encoding for the search text
            try:
                en_bytes_latin = en_text.encode('latin-1')
                count = data.count(en_bytes_latin)
                if count > 0:
                    cn_bytes_latin = cn_text.encode('latin-1')
                    data = data.replace(en_bytes_latin, cn_bytes_latin)
                    file_replacements += count
                    continue
            except:
                pass
            print(f"  WARN: {fn} - text not found: {en_text[:50]}...")
            errors += 1
        elif count == 1:
            data = data.replace(en_bytes, cn_bytes)
            file_replacements += 1
        else:
            # Multiple occurrences - replace all
            data = data.replace(en_bytes, cn_bytes)
            file_replacements += count
            print(f"  INFO: {fn} - replaced {count} occurrences of: {en_text[:50]}...")

    if data != original_data:
        with open(fpath, 'wb') as f:
            f.write(data)
        print(f"OK: {fn} - {file_replacements} replacements")
        total_replacements += file_replacements
    else:
        if file_replacements == 0:
            print(f"NOCHANGE: {fn}")

print(f"\nDone! Total replacements: {total_replacements}, Errors: {errors}")
