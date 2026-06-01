from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
with open(path, 'rb') as f:
    first_bytes = f.read(100)
    print(f'前100字节 (hex): {first_bytes.hex()}')
    print(f'前100字节: {first_bytes}')