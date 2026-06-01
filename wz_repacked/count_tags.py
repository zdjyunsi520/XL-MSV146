import re
from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

open_tags = re.findall(r'<imgdir name="([^"]+)">', content)
close_tags = re.findall(r'</imgdir>', content)

print(f'打开的imgdir标签数: {len(open_tags)}')
print(f'关闭的imgdir标签数: {len(close_tags)}')

if len(open_tags) != len(close_tags):
    print(f'不匹配! 差值: {len(open_tags) - len(close_tags)}')