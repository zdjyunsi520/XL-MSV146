from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
try:
    import xml.etree.ElementTree as ET
    parser = ET.iterparse(path)
    for event, elem in parser:
        pass
    print('XML格式正确')
except Exception as e:
    print(f'错误: {e}')

try:
    with open(path, 'rb') as f:
        header = f.read(20)
        print(f'文件头 (hex): {header.hex()}')
        print(f'文件头 (bytes): {header}')
except Exception as e:
    print(f'读取错误: {e}')