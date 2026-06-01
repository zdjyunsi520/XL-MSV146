from pathlib import Path
import os
# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
translated_dir = Path("translated")
output_file = Path("Map.img_c.xml")

content_parts = []
for file_path in sorted(translated_dir.glob("Map.img_*_c.xml"), key=lambda x: x.stem.split('_')[1]):
    lines = file_path.read_text(encoding='utf-8').splitlines()
    if len(lines) > 2:
        content_parts.extend(lines[1:-1])

full_content = [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<imgdir name="Map.img">'
] + content_parts + [
    '</imgdir>'
]

output_file.write_text('\n'.join(full_content), encoding='utf-8')

print(f"合并完成！")
print(f"输出文件: {output_file}")