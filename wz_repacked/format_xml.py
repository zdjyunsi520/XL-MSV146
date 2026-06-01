import xml.dom.minidom
from pathlib import Path

path = '/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/Consume.img_c.xml'
content = Path(path).read_text(encoding='utf-8')

dom = xml.dom.minidom.parseString(content)
formatted = dom.toprettyxml(indent='\t')

if isinstance(formatted, bytes):
    formatted = formatted.decode('utf-8')

lines = formatted.splitlines()
cleaned_lines = [line for line in lines if line.strip() and not line.startswith('<?xml')]
cleaned_content = '\n'.join(cleaned_lines)

Path(path).write_text(cleaned_content, encoding='utf-8')
print(f'格式化完成')