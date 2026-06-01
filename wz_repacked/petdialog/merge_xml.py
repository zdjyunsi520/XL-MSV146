from pathlib import Path
import os
# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
translated_dir = Path("translated")
output_file = Path("PetDialog.img_c.xml")

content_parts = []
for file_path in sorted(translated_dir.glob("*.xml"), key=lambda x: x.stem):
    lines = file_path.read_text(encoding='utf-8')
    content_parts.append(lines)

full_content = [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<imgdir name="PetDialog.img">'
] + content_parts + [
    '</imgdir>'
]

output_file.write_text('\n'.join(full_content), encoding='utf-8')

print(f"合并完成！")
print(f"输出文件: {output_file}")