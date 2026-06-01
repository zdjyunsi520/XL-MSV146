import re
from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

stack = []
lines = content.splitlines()

for i, line in enumerate(lines):
    opens = len(re.findall(r'<imgdir name="([^"]+)">', line))
    closes = len(re.findall(r'</imgdir>', line))

    if opens > 0:
        for match in re.finditer(r'<imgdir name="([^"]+)">', line):
            stack.append((i+1, match.group(1)))
    if closes > 0:
        for _ in range(closes):
            if stack:
                opened = stack.pop()
                print(f'行 {i+1}: 关闭 {opened[1]} (打开于行 {opened[0]})')

print(f'\n剩余未关闭的标签: {len(stack)}')
for item in stack:
    print(f'  行 {item[0]}: {item[1]}')