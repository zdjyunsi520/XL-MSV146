import re
from pathlib import Path
from collections import Counter

merged = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml').read_text()
ids = re.findall(r'<imgdir name="(\d+)">', merged)

counter = Counter(ids)
duplicates = {k: v for k, v in counter.items() if v > 1}
print(f'总条目: {len(ids)}')
print(f'唯一条目: {len(set(ids))}')
print(f'重复ID: {duplicates}')