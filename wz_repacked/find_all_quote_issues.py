import re
from pathlib import Path

file_path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(file_path).read_text(encoding='utf-8')

lines = content.splitlines()
fixed = 0
problems = []

for i, line in enumerate(lines):
    if '<string ' in line:
        q = line.count('"')
        if q > 4:
            problems.append((i+1, line))

print(f'发现 {len(problems)} 个问题行')
for line_num, line in problems:
    print(f'{line_num}: {line[:80]}')