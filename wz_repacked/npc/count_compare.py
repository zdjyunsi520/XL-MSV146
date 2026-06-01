import re
from pathlib import Path

def count_entries(file_path):
    content = Path(file_path).read_text(encoding='utf-8')
    pattern = re.compile(r'<imgdir name="(\d+)">')
    matches = pattern.findall(content)
    return len(matches), matches

original = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img.xml")
merged = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img_c.xml")

print("=" * 50)
print("对比原始文件和合并后的文件")
print("=" * 50)

orig_count, orig_matches = count_entries(original)
merged_count, merged_matches = count_entries(merged)

print(f"原始文件 Npc.img.xml: {orig_count} 个NPC条目")
print(f"合并文件 Npc.img_c.xml: {merged_count} 个NPC条目")
print()

if orig_count == merged_count:
    print("✓ 数量一致！")
else:
    print(f"✗ 数量不一致！相差 {abs(orig_count - merged_count)} 个")
    print(f"原始文件ID范围: {min(orig_matches)} - {max(orig_matches)}")
    print(f"合并文件ID范围: {min(merged_matches)} - {max(merged_matches)}")