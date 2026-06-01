import re
from pathlib import Path

orig = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img.xml').read_text()
merged = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml').read_text()

orig_count = len(re.findall(r'<imgdir name="(\d+)">', orig))
merged_count = len(re.findall(r'<imgdir name="(\d+)">', merged))

print(f'原文条目: {orig_count}')
print(f'合并后条目: {merged_count}')
print(f'差异: {orig_count - merged_count}')