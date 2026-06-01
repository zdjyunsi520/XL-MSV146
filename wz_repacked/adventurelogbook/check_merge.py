import re
from pathlib import Path

original_file = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/AdventureLogbook.img.xml")
translated_dir = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/adventurelogbook/translated")
output_file = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/AdventureLogbook.img_c.xml")

original_content = original_file.read_text(encoding='utf-8')
original_entries = re.findall(r'<imgdir name="(\d+)">', original_content)
print(f'原文条目数: {len(original_entries)}')

trans_entries = {}
for file_path in sorted(translated_dir.glob("AdventureLogbook.img_*_c.xml"), key=lambda x: int(re.search(r'AdventureLogbook\.img_(\d+)_c\.xml', x.name).group(1))):
    content = file_path.read_text(encoding='utf-8')
    entry_pattern = re.compile(r'<imgdir name="(\d+)">(.*?)</imgdir>', re.DOTALL)
    entry_matches = entry_pattern.findall(content)
    for entry_id, entry_content in entry_matches:
        trans_entries[entry_id] = entry_content

print(f'翻译条目数: {len(trans_entries)}')

merged_content = output_file.read_text(encoding='utf-8')
merged_entries = re.findall(r'<imgdir name="(\d+)">', merged_content)
print(f'合并后条目数: {len(merged_entries)}')

missing = [e for e in original_entries if e not in trans_entries]
print(f'未翻译条目: {missing}')