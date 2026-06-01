from pathlib import Path
import os

# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)

split_dir = Path("./item")
translated_dir = Path("./item/tran")

# 检查文件夹是否存在
if not split_dir.exists():
    print(f"错误: 文件夹 '{split_dir}' 不存在！")
    exit()
if not translated_dir.exists():
    print(f"错误: 文件夹 '{translated_dir}' 不存在！")
    exit()

diff_count = 0
missing_count = 0

# 🌟 新增：智能读取文件内容的函数，解决编码问题
def safe_read_text(file_path):
    try:
        # 优先尝试 utf-8-sig (带 BOM 的 UTF-8)
        return file_path.read_text(encoding='utf-8-sig')
    except UnicodeDecodeError:
        # 如果 utf-8 报错，回退到 gb18030 (GBK的超集，兼容性最好)
        try:
            return file_path.read_text(encoding='gb18030')
        except UnicodeDecodeError:
            # 如果 gb18030 也不行，最后用 latin-1 保底（不会报错，但中文可能乱码，只求能读出行数）
            return file_path.read_text(encoding='latin-1')

print(f"开始对比 '{split_dir.name}' 和 '{translated_dir.name}' 的文件行数...\n")

# 遍历 split 文件夹中的所有文件，按文件名排序
for split_file in sorted(split_dir.glob("*"), key=lambda x: x.name):
    if not split_file.is_file():
        continue

    translated_file = translated_dir / split_file.name

    # 检查 translated 文件夹中是否存在同名文件
    if not translated_file.exists():
        print(f"[缺失] {split_file.name} 在 tran 文件夹中不存在")
        missing_count += 1
        continue

    # 读取文件并计算行数
    try:
        # 🌟 修改点：使用 safe_read_text 替代原来的 read_text
        split_lines = len(safe_read_text(split_file).splitlines())
        translated_lines = len(safe_read_text(translated_file).splitlines())

        # 对比行数
        if split_lines != translated_lines:
            print(f"[行数不同] {split_file.name}  (origin: {split_lines} 行 | tran: {translated_lines} 行)")
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
