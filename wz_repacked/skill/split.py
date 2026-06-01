from pathlib import Path
import os
import re
from collections import Counter

# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
translated_dir = Path("split_o")

content_parts = []

with open(Path("Skill.img.xml"), 'r', encoding='utf-8') as f:
    content = f.read()

# 匹配所有 <imgdir ...> 和 </imgdir>
tag_pattern = re.compile(r'<(/?)imgdir\b([^>]*)>')
stack = []       # (起始位置, name)
blocks = []      # (name, 起始, 结束)

for match in tag_pattern.finditer(content):
    is_closing = match.group(1) == '/'
    attrs = match.group(2)

    if is_closing:
        if stack:
            start_pos, name = stack.pop()
            if len(stack) == 1 and name:
                blocks.append((name, start_pos, match.end()))
    else:
        if attrs.rstrip().endswith('/'):
            continue
        name_match = re.search(r'name="(\d+)"', attrs)
        name = name_match.group(1) if name_match else None
        stack.append((match.start(), name))

# 写出每个块，重复ID加后缀
counter = Counter()
for name, start, end in blocks:
    counter[name] += 1
    index = counter[name]
    suffix = f"_{index}" if index > 1 else ""
    block = content[start:end]
    output_file = translated_dir / f"{name}{suffix}.xml"
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(block)
    print(f"已导出: {output_file}")

print(f"\n共导出 {sum(counter.values())} 个文件")
