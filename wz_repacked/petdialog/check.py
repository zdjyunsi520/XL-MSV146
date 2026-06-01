from pathlib import Path
import os

# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)

split_dir = Path("split")
translated_dir = Path("translated")

# 检查文件夹是否存在
if not split_dir.exists():
    print(f"错误: 文件夹 '{split_dir}' 不存在！")
    exit()
if not translated_dir.exists():
    print(f"错误: 文件夹 '{translated_dir}' 不存在！")
    exit()

diff_count = 0
missing_count = 0

print(f"开始对比 '{split_dir.name}' 和 '{translated_dir.name}' 的文件行数...\n")

# 遍历 split 文件夹中的所有文件，按文件名排序
for split_file in sorted(split_dir.glob("*"), key=lambda x: x.name):
    if not split_file.is_file():
        continue

    translated_file = translated_dir / split_file.name

    # 检查 translated 文件夹中是否存在同名文件
    if not translated_file.exists():
        print(f"[缺失] {split_file.name} 在 translated 文件夹中不存在")
        missing_count += 1
        continue

    # 读取文件并计算行数
    try:
        # 使用 utf-8-sig 避免 BOM 头问题
        # 使用 splitlines() 可以准确计算行数，不受末尾是否有换行符的影响
        split_lines = len(split_file.read_text(encoding='utf-8-sig').splitlines())
        translated_lines = len(translated_file.read_text(encoding='utf-8-sig').splitlines())

        # 对比行数
        if split_lines != translated_lines:
            print(f"[行数不同] {split_file.name}  (split: {split_lines} 行 | translated: {translated_lines} 行)")
            diff_count += 1

    except Exception as e:
        print(f"[读取错误] {split_file.name}: {e}")

# 打印汇总信息
print("-" * 40)
if diff_count == 0 and missing_count == 0:
    print("✅ 完美！所有对应文件的行数完全一致。")
else:
    if diff_count > 0:
        print(f"⚠️ 共发现 {diff_count} 个文件行数不一致。")
    if missing_count > 0:
        print(f"⚠️ 共发现 {missing_count} 个文件在 translated 中缺失。")
