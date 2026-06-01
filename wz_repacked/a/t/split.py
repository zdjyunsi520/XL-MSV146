import re
from pathlib import Path
import os

# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)

split_dir = Path("split")
translated_dir = Path("translated")

# 如果 translated 文件夹不存在，自动创建
translated_dir.mkdir(exist_ok=True)

# 匹配标准的 value="..." 
value_pattern = re.compile(r'(value=")([^"]*)(")')

# 匹配逗号和句号，后面不跟 \n 的情况（防止重复添加产生 \n\n）
# 如果还需要在其他标点（如 ！？；）后换行，可以把正则改成 r'([，。！？；])(?!\\n)'
punctuation_pattern = re.compile(r'([，。])(?!\\n)')

def insert_newlines(match):
    prefix = match.group(1)       # value="
    content = match.group(2)      # 引号内的纯文本
    suffix = match.group(3)       # "
    
    # 如果内容为空，直接返回原样
    if not content:
        return match.group(0)
        
    # 核心逻辑：在 ， 和 。 后面添加字面的 \n
    # r'\1' 代表标点符号本身，r'\\n' 代表插入字面量 \n
    new_content = punctuation_pattern.sub(r'\1\\n', content)
    
    # 重新拼装
    return f'{prefix}{new_content}{suffix}'

print(f"开始处理 '{split_dir.name}' 文件夹中的 XML 文件...")

file_count = 0
for file_path in sorted(split_dir.glob("*.xml"), key=lambda x: x.stem):
    # 1. 读取源文件内容
    text = file_path.read_text(encoding='utf-8-sig')
    
    # 2. 替换 value 中的内容
    new_text = value_pattern.sub(insert_newlines, text)
    
    # 3. 保存到 translated 文件夹
    output_path = translated_dir / file_path.name
    output_path.write_text(new_text, encoding='utf-8')
    
    file_count += 1
    print(f"已处理: {file_path.name}")

print("-" * 40)
print(f"处理完成！共处理 {file_count} 个文件。")
print(f"输出目录: {translated_dir.absolute()}")
