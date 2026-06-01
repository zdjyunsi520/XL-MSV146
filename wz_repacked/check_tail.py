from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
with open(path, 'rb') as f:
    f.seek(-100, 2)
    tail = f.read()
    print('文件末尾 (hex):')
    print(tail.hex())
    print('\n文件末尾 (bytes):')
    print(tail)