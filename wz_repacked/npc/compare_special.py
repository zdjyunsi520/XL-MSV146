import re
from pathlib import Path

original_file = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img.xml")
merged_file = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img_c.xml")

original_content = original_file.read_text(encoding='utf-8')
merged_content = merged_file.read_text(encoding='utf-8')

orig_pattern = re.compile(r'<imgdir name="(\d+)">(.*?)</imgdir>', re.DOTALL)
orig_matches = orig_pattern.findall(original_content)
merged_matches = orig_pattern.findall(merged_content)

print("包含特殊实体但翻译后丢失的NPC:")
print("=" * 60)

for (orig_id, orig_content), (merged_id, merged_content) in zip(orig_matches, merged_matches):
    orig_has_special = '&amp;' in orig_content or '&lt;' in orig_content or '&gt;' in orig_content or '&quot;' in orig_content
    merged_has_special = '&amp;' in merged_content or '&lt;' in merged_content or '&gt;' in merged_content or '&quot;' in merged_content
    
    if orig_has_special and not merged_has_special:
        print(f"NPC ID: {orig_id}")
        orig_values = re.findall(r'<string name="([^"]+)" value="([^"]+)"/>', orig_content)
        merged_values = re.findall(r'<string name="([^"]+)" value="([^"]+)"/>', merged_content)
        
        for (orig_name, orig_val), (merged_name, merged_val) in zip(orig_values, merged_values):
            if ('&amp;' in orig_val or '&lt;' in orig_val or '&gt;' in orig_val or '&quot;' in orig_val):
                print(f"  {orig_name}:")
                print(f"    原始: {orig_val[:50]}")
                print(f"    翻译: {merged_val[:50]}")
        print()