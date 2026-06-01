import sys
from pathlib import Path

def merge_folder(img_name, folder_name):
    translated_dir = Path(f'/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/{folder_name}/translated')
    output_file = Path(f'/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/{img_name}')
    
    content_parts = []
    for file_path in sorted(translated_dir.glob(f'{img_name}_*_c.xml'), key=lambda x: int(x.stem.split('_')[1])):
        lines = file_path.read_text(encoding='utf-8').splitlines()
        if len(lines) > 2:
            content_parts.extend(lines[1:-1])
    
    full_content = [
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
        f'<imgdir name="{img_name}">'
    ] + content_parts + [
        '</imgdir>'
    ]
    
    output_file.write_text('\n'.join(full_content), encoding='utf-8')
    print(f'Merged {img_name} successfully!')

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage: python merge_all.py <img_name> <folder_name>')
        sys.exit(1)
    
    merge_folder(sys.argv[1], sys.argv[2])