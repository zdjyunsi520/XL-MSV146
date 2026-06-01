from pathlib import Path

translated_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/cashitemsearch/translated')
output_file = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/CashItemSearch.img_c.xml')

content_parts = []
files = []
for file_path in translated_dir.glob('CashItemSearch.img_*_c.xml'):
    num = int(file_path.stem.split('_')[1])
    files.append((num, file_path))
files.sort()

for num, file_path in files:
    lines = file_path.read_text(encoding='utf-8').splitlines()
    if len(lines) > 2:
        content_parts.extend(lines[1:-1])

full_content = [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<imgdir name="CashItemSearch.img">'
] + content_parts + [
    '</imgdir>'
]

output_file.write_text('\n'.join(full_content), encoding='utf-8')
print(f'合并完成：{output_file}')