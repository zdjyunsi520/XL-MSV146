from pathlib import Path
import shutil
import os

# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)

base_dir = Path("./event/tran")

# 检查文件夹是否存在
if not base_dir.exists():
    print(f"错误: 文件夹 '{base_dir}' 不存在！")
    exit()

# 获取源目录下所有的 .js 文件，并按文件名排序，保证分组顺序固定
js_files = sorted(base_dir.glob("*.js"), key=lambda x: x.name)

if not js_files:
    print(f"在 '{base_dir}' 中没有找到任何 .js 文件。")
    exit()

print(f"共找到 {len(js_files)} 个 js 文件，开始分组移动...\n")

# 遍历文件，index 是序号（从0开始），file_path 是文件路径
for index, file_path in enumerate(js_files):
    
    # 计算当前文件应该放在第几个文件夹里
    # index 0~9 对应 folder_num 1，index 10~19 对应 folder_num 2 ...
    folder_num = index // 10 + 1
    
    # 构造新文件夹的名称和路径，例如 portal1, portal2
    folder_name = f"portal{folder_num}"
    target_dir = base_dir / folder_name
    
    # 如果目标文件夹不存在，则创建
    target_dir.mkdir(exist_ok=True)
    
    # 构造目标文件路径
    target_file = target_dir / file_path.name
    
    # 移动文件 (相当于剪切)
    try:
        shutil.move(str(file_path), str(target_file))
        print(f"[移动] {file_path.name}  ->  {folder_name}/")
    except Exception as e:
        print(f"[错误] 移动 {file_path.name} 失败: {e}")

print("\n" + "=" * 40)
print("✅ 分组移动完成！")
