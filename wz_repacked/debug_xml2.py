import xml.etree.ElementTree as ET
from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

try:
    root = ET.fromstring(content)
    print(f'XML格式正确，根标签: {root.tag}')
except ET.ParseError as e:
    print(f'解析错误: {e}')
    lines = content.splitlines()
    print(f'总行数: {len(lines)}')
    for i in range(max(0, e.lineno-3), min(len(lines), e.lineno+2)):
        marker = '>>>' if i == e.lineno-1 else '   '
        print(f'{marker} {i+1}: {lines[i]}')