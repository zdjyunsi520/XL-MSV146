import re
from pathlib import Path

original_file = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img.xml")
translated_dir = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/translated")

original_content = original_file.read_text(encoding='utf-8')
orig_pattern = re.compile(r'<imgdir name="(\d+)">')
orig_ids = set(orig_pattern.findall(original_content))

trans_ids = set()
for file_path in sorted(translated_dir.glob("Npc.img_*_c.xml"), key=lambda x: int(re.search(r'Npc\.img_(\d+)_c\.xml', x.name).group(1))):
    content = file_path.read_text(encoding='utf-8')
    matches = orig_pattern.findall(content)
    for match in matches:
        trans_ids.add(match)

missing_ids = orig_ids - trans_ids
print(f"原始文件NPC数量: {len(orig_ids)}")
print(f"翻译文件NPC数量: {len(trans_ids)}")
print(f"缺失的NPC数量: {len(missing_ids)}")
if missing_ids:
    print("缺失的NPC ID:")
    for id in sorted(missing_ids, key=int):
        print(f"  {id}")