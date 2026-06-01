import re
from pathlib import Path
import os
os.chdir(Path(__file__).parent)
translated_dir = Path("translated")
output_file = Path("Eqp.img_c_r.xml")

def fix_multiline_xml(file_path):
    # 读取文件内容
    content = Path(file_path).read_text(encoding='utf-8')

    # 正则表达式匹配：<string 开头，中间有任何字符(包括换行)，直到 />
    # re.DOTALL 是关键，它让 . 能够匹配换行符
    pattern = re.compile(r'<string\b.*?/>', re.DOTALL)

    def replace_newlines(match):
        # 将匹配到的整段文本中的物理换行替换为空
        # 同时处理 \r\n (Windows) 和 \n (Linux)
        return match.group(0).replace('\r\n', '').replace('\n', '')

    # 执行替换
    cleaned_content = pattern.sub(replace_newlines, content)

    # 写回文件
    output_file.write_text(cleaned_content, encoding='utf-8')
    print(f"已将 {file_path} 中的多行标签合并为一行！")

# 使用示例：处理你的 Eqp.img_c.xml
fix_multiline_xml("Eqp.img_c.xml")
