import re
from pathlib import Path

# 检查翻译条目102是否有title
trans = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/adventurelogbook/translated/AdventureLogbook.img_1_c.xml").read_text(encoding='utf-8')

# 找102条目
m = re.search(r'<imgdir name="102">(.*?)</imgdir>', trans, re.DOTALL)
if m:
    print('翻译102内容:')
    print(m.group(0)[:800])

# 检查原文102
original = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/AdventureLogbook.img.xml").read_text(encoding='utf-8')
m2 = re.search(r'<imgdir name="102">(.*?)</imgdir>', original, re.DOTALL)
if m2:
    print('\n原文102内容:')
    print(m2.group(0)[:800])