from pathlib import Path

split_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/consume/split')
trans_dir = Path('/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/consume/translated')

split_nums = set(int(f.stem.split('_')[1]) for f in split_dir.glob('Consume.img_*.xml'))
trans_nums = set(int(f.stem.split('_')[1]) for f in trans_dir.glob('Consume.img_*_c.xml'))

print(f'split文件数: {len(split_nums)}')
print(f'translated文件数: {len(trans_nums)}')

missing = sorted(split_nums - trans_nums)
print(f'\n缺失翻译的文件数: {len(missing)}')
print(f'缺失的序号: {missing}')