import xml.etree.ElementTree as ET
from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
try:
    ET.parse(path)
    print('XML格式正确')
except ET.ParseError as e:
    print(f'错误: {e}')
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        print(f'总行数: {len(lines)}')
        print(f'最后5行:')
        for i, line in enumerate(lines[-5:], len(lines)-4):
            print(f'  {i}: {repr(line)}')