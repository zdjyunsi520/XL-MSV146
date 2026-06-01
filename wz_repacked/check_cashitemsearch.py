from pathlib import Path
import re

orig = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/CashItemSearch.img.xml').read_text()
split_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/cashitemsearch/split')

orig_ids = set(re.findall(r'<imgdir name="(\d+)">', orig))
split_ids = set()
for f in split_dir.glob('CashItemSearch.img_*.xml'):
    content = f.read_text(encoding='utf-8')
    split_ids.update(re.findall(r'<imgdir name="(\d+)">', content))

print(f'原文条目数: {len(orig_ids)}')
print(f'split条目数: {len(split_ids)}')
print(f'缺失: {orig_ids - split_ids}')
print(f'多余: {split_ids - orig_ids}')