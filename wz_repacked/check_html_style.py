import re
from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

stack = []
lines = content.splitlines()
errors = []

i = 0
while i < len(lines):
    line = lines[i]
    line_open = re.findall(r'<imgdir name="([^"]+)">', line)
    line_close = re.findall(r'</imgdir>', line)

    for match in line_open:
        stack.append((i+1, match))

    close_count = len(line_close)
    for _ in range(close_count):
        if stack:
            opened = stack.pop()
            print(f'行 {i+1}: 闭合 </imgdir> -> 匹配打开于行 {opened[0]} 的 <imgdir name="{opened[1]}">')
        else:
            print(f'行 {i+1}: 错误 - 没有对应的打开标签 </imgdir>')
            errors.append((i+1, '多余闭合'))
    i += 1

if stack:
    print(f'\n有 {len(stack)} 个未闭合的标签:')
    for line_num, name in stack:
        print(f'  行 {line_num}: <imgdir name="{name}">')
else:
    print('\n所有标签都正确闭合')