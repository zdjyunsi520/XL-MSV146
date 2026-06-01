import xml.etree.ElementTree as ET
from pathlib import Path

base_dir = Path(r'E:\github\MapleStoryV146\Service\SpiritMS\wz\String.wz')
translated_dirs = []
for d in base_dir.iterdir():
    if d.is_dir():
        t_dir = d / 'translated'
        if t_dir.exists():
            translated_dirs.append(d.name)

print('Translated folders:')
print(', '.join(translated_dirs))