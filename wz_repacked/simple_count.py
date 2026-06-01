from pathlib import Path
import re

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

open_count = len(re.findall(r'<imgdir name="', content))
close_count = len(re.findall(r'</imgdir>', content))
print(f'<imgdir name= 出现次数: {open_count}')
print(f'</imgdir> 出现次数: {close_count}')
print(f'差异: {open_count - close_count}')

if open_count == close_count:
    print('标签数量匹配')