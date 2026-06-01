import re
from pathlib import Path

file_path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(file_path).read_text(encoding='utf-8')

lines = content.splitlines()
fixed_lines = []
issues = []

for i, line in enumerate(lines, 1):
    if '<string ' in line and 'value="' in line:
        quote_count = line.count('"')
        if quote_count > 4:
            new_line = line
            new_line = re.sub(r'(value=")(.*?)(</string>)', lambda m: m.group(1) + m.group(2).replace('"', '&quot;') + m.group(3), new_line)
            if new_line != line:
                issues.append((i, line.strip()[:60]))
            line = new_line
    fixed_lines.append(line)

Path(file_path).write_text('\n'.join(fixed_lines), encoding='utf-8')
print(f'修复了 {len(issues)} 处')
for line_num, snippet in issues:
    print(f'  行 {line_num}: {snippet}')