import xml.etree.ElementTree as ET
import os
from pathlib import Path
# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
path = Path('PetDialog.img_c.xml')
try:
    ET.parse(path)
    print('XML格式正确')
except ET.ParseError as e:
    print(f'错误: {e}')