from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
with open(path, 'rb') as f:
    content = f.read()

print(f'文件大小: {len(content)} bytes')
print(f'前20字节 (hex): {content[:20].hex()}')
print(f'后50字节 (hex): {content[-50:].hex()}')
print(f'最后50字节 (decode): {content[-50:]}')

import xml.etree.ElementTree as ET
try:
    ET.fromstring(content)
    print('XML解析成功')
except ET.ParseError as e:
    print(f'XML解析错误: {e}')