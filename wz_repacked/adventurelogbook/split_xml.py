import xml.etree.ElementTree as ET
from pathlib import Path

def split_adventurelogbook(input_file, output_dir):
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    tree = ET.parse(input_file)
    root = tree.getroot()

    text_dir = root.find('.//imgdir[@name="text"]')
    if text_dir is None:
        print("未找到 imgdir name='text'")
        return

    entries = text_dir.findall('imgdir')

    for i, entry in enumerate(entries, 1):
        output_path = Path(output_dir) / f"AdventureLogbook.img_{i}.xml"

        new_root = ET.Element('imgdir')
        new_root.set('name', 'AdventureLogbook.img')
        new_root.append(entry)

        tree = ET.ElementTree(new_root)
        tree.write(output_path, encoding='utf-8', xml_declaration=True)

        print(f"创建 {output_path.name}")

    print(f"\n总计: {len(entries)} 个条目")

if __name__ == "__main__":
    input_file = "/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/AdventureLogbook.img.xml"
    output_dir = "/mnt/e/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/adventurelogbook/split_new"

    split_adventurelogbook(input_file, output_dir)