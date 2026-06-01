from pathlib import Path
import re

orig = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Cash.img.xml").read_text()
merged = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Cash.img_c.xml").read_text()

orig_ids = re.findall(r'<imgdir name="(\d+)">', orig)
merged_ids = re.findall(r'<imgdir name="(\d+)">', merged)

print(f"原文条目数: {len(orig_ids)}")
print(f"合并后条目数: {len(merged_ids)}")
print()
print("缺失的ID:")
missing = [x for x in orig_ids if x not in merged_ids]
print(missing)