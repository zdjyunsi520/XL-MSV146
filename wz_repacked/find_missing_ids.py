import re
from pathlib import Path

orig = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img.xml').read_text()
merged = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml').read_text()

orig_ids = set(re.findall(r'<imgdir name="(\d+)">', orig))
merged_ids = set(re.findall(r'<imgdir name="(\d+)">', merged))

missing = sorted(orig_ids - merged_ids, key=int)
print(f'缺失的ID: {missing}')