import re
from pathlib import Path

original = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/AdventureLogbook.img.xml").read_text(encoding='utf-8')

# 找101条目
m = re.search(r'<imgdir name="101">(.*?)</imgdir>', original, re.DOTALL)
if m:
    print('原文101内容:')
    print(m.group(0)[:500])
    print('---')

# 检查翻译文件1的结构
trans = Path("/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/adventurelogbook/translated/AdventureLogbook.img_1_c.xml").read_text(encoding='utf-8')
m2 = re.search(r'<imgdir name="1">(.*?)</imgdir>', trans, re.DOTALL)
if m2:
    print('翻译1内容:')
    print(m2.group(0))

# 检查原文有多少个一级条目（数字id的imgdir）
first_level = re.findall(r'<imgdir name="text">.*?<imgdir name="(\d+)">', original, re.DOTALL)
print(f'\n原文text下的一级条目: {first_level[:10]}...')

# 检查翻译文件有哪些id
trans_ids = re.findall(r'<imgdir name="(\d+)">', trans)
print(f'翻译文件1的条目id: {trans_ids}')