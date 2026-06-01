import re
from pathlib import Path

file_path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(file_path).read_text(encoding='utf-8')

lines = content.splitlines()
fixed_lines = []
issues = []

for i, line in enumerate(lines, 1):
    if '<string name=' in line and 'value="' in line:
        match = re.search(r'(value=")(.*?)(" />)', line, re.DOTALL)
        if match:
            value_content = match.group(2)
            if '"' in value_content and '&quot;' not in value_content:
                fixed_value = value_content.replace('"', '&quot;')
                line = line[:match.start(2)] + fixed_value + line[match.end(2):]
                issues.append((i, match.group(0)[:50]))
    fixed_lines.append(line)

Path(file_path).write_text('\n'.join(fixed_lines), encoding='utf-8')
print(f'修复了 {len(issues)} 处')
for line_num, snippet in issues:
    print(f'  行 {line_num}: {snippet}...')