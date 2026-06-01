from pathlib import Path

translated_dir = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/cash/translated")
output_file = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Cash.img_c.xml")

content_parts = []
for file_path in sorted(translated_dir.glob("Cash.img_*_c.xml"), key=lambda x: int(x.stem.split('_')[1])):
    lines = file_path.read_text(encoding='utf-8').splitlines()
    if len(lines) > 2:
        content_parts.extend(lines[1:-1])

full_content = [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<imgdir name="Cash.img">'
] + content_parts + [
    '</imgdir>'
]

output_file.write_text('\n'.join(full_content), encoding='utf-8')

print(f"合并完成！")
print(f"输出文件: {output_file}")