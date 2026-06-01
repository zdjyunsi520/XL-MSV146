import re
from pathlib import Path

original_file = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img.xml")
original_content = original_file.read_text(encoding='utf-8')

pattern = re.compile(r'<imgdir name="(\d+)">(.*?)</imgdir>', re.DOTALL)
matches = pattern.findall(original_content)

special_entries = []
for npc_id, content in matches:
    if '&' in content and ('&amp;' in content or '&lt;' in content or '&gt;' in content or '&quot;' in content):
        special_entries.append((npc_id, content))

print(f"包含特殊实体的NPC数量: {len(special_entries)}")
print()
for npc_id, content in special_entries[:5]:
    print(f"NPC ID: {npc_id}")
    print(f"内容片段: {content[:200]}...")
    print()