from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')
lines = content.splitlines()
print(f'总行数: {len(lines)}')
print(f'最后10行:')
for i, line in enumerate(lines[-10:], len(lines)-9):
    print(f'{i}: {line}')