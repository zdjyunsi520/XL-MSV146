import re
from pathlib import Path

content = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img.xml').read_text()
matches = re.findall(r'<imgdir name="(\d+)">', content)
print(f'原文条目数量: {len(matches)}')