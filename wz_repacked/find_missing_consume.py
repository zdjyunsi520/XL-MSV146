import re
from pathlib import Path

orig = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img.xml').read_text()
trans_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/consume/translated')

orig_ids = set(re.findall(r'<imgdir name="(\d+)">', orig))

trans_ids = set()
for f in trans_dir.glob('Consume.img_*_c.xml'):
    content = f.read_text(encoding='utf-8')
    trans_ids.update(re.findall(r'<imgdir name="(\d+)">', content))

missing = orig_ids - trans_ids
print(f'缺失翻译的条目数: {len(missing)}')
print(f'缺失的ID: {sorted(missing, key=int)[:50]}')