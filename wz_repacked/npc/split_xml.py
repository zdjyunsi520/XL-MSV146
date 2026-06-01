import re
import os
from pathlib import Path

def xml_escape(value):
    return value.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

def split_xml(input_file, output_dir, items_per_file=20):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    content = re.sub(r'^\s*<\?xml[^>]+\?>\s*', '', content)

    pattern = r'(<imgdir name="\d+">.*?</imgdir>)'
    matches = re.findall(pattern, content, re.DOTALL)

    os.makedirs(output_dir, exist_ok=True)

    total_files = (len(matches) + items_per_file - 1) // items_per_file

    for i in range(total_files):
        start = i * items_per_file
        end = min(start + items_per_file, len(matches))
        chunk = matches[start:end]

        output_filename = f"Npc.img_{i+1}.xml"
        output_path = os.path.join(output_dir, output_filename)

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write('<imgdir name="Npc.img">\n')
            for item in chunk:
                f.write('    ' + item.strip() + '\n')
            f.write('</imgdir>')

        print(f"Created {output_path} with {len(chunk)} items")

    print(f"\nTotal: {len(matches)} items split into {total_files} files")

if __name__ == "__main__":
    input_file = r"wz\String.wz\npc\Npc.img.xml"
    output_dir = r"wz\String.wz\npc\split"

    split_xml(input_file, output_dir, items_per_file=20)