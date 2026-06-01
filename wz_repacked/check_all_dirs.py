from pathlib import Path

string_wz_dir = Path(r"e:\github\MapleStoryV146\Service\SpiritMS\wz\String.wz")

dirs = [d for d in string_wz_dir.iterdir() if d.is_dir() and not d.name.startswith('.')]

print(f"Checking {len(dirs)} directories:\n")
print(f"{'Directory':<25} {'split':<10} {'translated':<10}")
print("-" * 50)

needs_translated = []

for d in dirs:
    split_dir = d / 'split'
    trans_dir = d / 'translated'
    
    has_split = "✓" if split_dir.exists() else "✗"
    has_trans = "✓" if trans_dir.exists() else "✗"
    
    print(f"{d.name:<25} {has_split:<10} {has_trans:<10}")
    
    if not trans_dir.exists():
        needs_translated.append(d)

print(f"\n\nNeed to create translated directories for: {len(needs_translated)} directories")
for d in needs_translated:
    print(f"  - {d.name}")
