import re
import os
from pathlib import Path
import shutil

def extract_imgdir_entries(content):
    entries = []
    depth = 0
    start_idx = -1
    pattern = re.compile(r'<imgdir name="([^"]+)">|</imgdir>')
    for match in pattern.finditer(content):
        if match.group(1):
            if depth == 1:
                start_idx = match.start()
            depth += 1
        else:
            depth -= 1
            if depth == 1 and start_idx != -1:
                entries.append(content[start_idx:match.end()])
                start_idx = -1
    return entries

def split_xml(input_file, output_dir, img_name, items_per_file=20):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    content = re.sub(r'^\s*<\?xml[^>]+\?>\s*', '', content)

    matches = extract_imgdir_entries(content)

    os.makedirs(output_dir, exist_ok=True)

    total_files = (len(matches) + items_per_file - 1) // items_per_file

    for i in range(total_files):
        start = i * items_per_file
        end = min(start + items_per_file, len(matches))
        chunk = matches[start:end]

        output_filename = f"{img_name}_{i+1}.xml"
        output_path = os.path.join(output_dir, output_filename)

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f'<imgdir name="{img_name}">\n')
            for item in chunk:
                f.write('    ' + item.strip() + '\n')
            f.write('</imgdir>')

        print(f"Created {output_path} with {len(chunk)} items")

    print(f"\nTotal: {len(matches)} items split into {total_files} files")
    return len(matches)

def process_file(file_name):
    string_wz_dir = Path(r"e:\github\MapleStoryV146\Service\SpiritMS\wz\String.wz")
    file_path = string_wz_dir / file_name
    
    if not file_path.exists():
        print(f"File not found: {file_path}")
        return
    
    img_name = file_path.stem
    dir_name = img_name.split('.')[0].lower()
    
    target_dir = string_wz_dir / dir_name
    split_dir = target_dir / 'split'
    translated_dir = target_dir / 'translated'
    
    print(f"\nProcessing {file_name}...")
    print(f"  Creating directory: {target_dir}")
    print(f"  Creating split directory: {split_dir}")
    print(f"  Creating translated directory: {translated_dir}")
    
    target_dir.mkdir(exist_ok=True)
    split_dir.mkdir(exist_ok=True)
    translated_dir.mkdir(exist_ok=True)
    
    dest_file = target_dir / file_name
    if not dest_file.exists():
        shutil.copy2(file_path, dest_file)
        print(f"  Copied {file_name} to {target_dir}")
    
    print(f"  Splitting {file_name}...")
    split_xml(str(dest_file), str(split_dir), img_name)

if __name__ == "__main__":
    process_file("Map.img.xml")
