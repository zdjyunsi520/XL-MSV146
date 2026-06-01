import re
from pathlib import Path

file_path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
lines = Path(file_path).read_text(encoding='utf-8').splitlines()

for i in [5846, 5847, 5848]:
    line = lines[i-1]
    print(f'Line {i}: quote count = {line.count(chr(34))}, line = {line.strip()[:80]}')