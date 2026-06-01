from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

print(f'前100字符的repr: {repr(content[:100])}')
print(f'总字符数: {len(content)}')
print(f'最后50字符的repr: {repr(content[-50:])}')