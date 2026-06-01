from pathlib import Path

string_wz_dir = Path(r"e:\github\MapleStoryV146\Service\SpiritMS\wz\String.wz")

xml_files = list(string_wz_dir.glob('*.img.xml'))

excluded = ['Npc.img.xml']

print("Checking status of img.xml files:\n")
print(f"{'File':<30} {'Directory':<20} {'Split Dir':<20} {'Translated Dir':<20}")
print("-" * 90)

for file in xml_files:
    if file.name in excluded:
        continue
    
    img_name = file.stem
    dir_name = img_name.split('.')[0].lower()
    
    target_dir = string_wz_dir / dir_name
    split_dir = target_dir / 'split'
    translated_dir = target_dir / 'translated'
    
    status_dir = "✓" if target_dir.exists() else "✗"
    status_split = "✓" if split_dir.exists() else "✗"
    status_trans = "✓" if translated_dir.exists() else "✗"
    
    print(f"{file.name:<30} {dir_name:<20} {status_split:<20} {status_trans:<20}")

print("\n\nDirectories found in String.wz:")
for item in string_wz_dir.iterdir():
    if item.is_dir() and not item.name.startswith('.'):
        print(f"  - {item.name}")
