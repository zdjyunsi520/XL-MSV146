import re
from pathlib import Path

content = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml').read_text()
matches = re.findall(r'<imgdir name="(\d+)">', content)
print(f'条目数量: {len(matches)}')