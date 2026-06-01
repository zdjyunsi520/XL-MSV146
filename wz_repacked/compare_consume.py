from pathlib import Path

split_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/consume/split')
trans_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/consume/translated')

split_files = set(f.name for f in split_dir.glob('Consume.img_*.xml'))
trans_files = set(f.name for f in trans_dir.glob('Consume.img_*_c.xml'))

print(f'split文件数: {len(split_files)}')
print(f'translated文件数: {len(trans_files)}')

missing_files = sorted(split_files - trans_files, key=lambda x: int(x.split('_')[1].split('.')[0]))
print(f'\n缺失翻译的文件:')
for f in missing_files:
    print(f'  {f}')