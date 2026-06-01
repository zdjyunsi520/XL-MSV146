import re
from pathlib import Path
import os
# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
def fix_newlines_in_xml(file_path):
    # 读取文件
    content = Path(file_path).read_text(encoding='utf-8')

    # 正则解释：
    # 匹配 <string 开头，中间有 value="，然后捕获里面的内容(包含换行)，直到遇到 "/> 或 ">
    # re.DOTALL 是关键，让 . 能够匹配物理换行符
    pattern = re.compile(r'(<string\b[^>]*value=")(.*?)("\s*/?>)', re.DOTALL)

    def replacer(match):
        prefix = match.group(1)   # 匹配到 <string ... value="
        value_content = match.group(2) # 匹配到 value 里面的内容（有物理换行的部分）
        suffix = match.group(3)   # 匹配到结尾的 "/> 或 ">

        # 核心操作：将物理换行替换为字面量 \n
        # 先替换 Windows 换行 \r\n，再替换 Linux 换行 \n
        fixed_content = value_content.replace('\r\n', '\\n').replace('\n', '\\n')

        # 重新拼接
        return prefix + fixed_content + suffix

    # 执行替换
    cleaned_content = pattern.sub(replacer, content)

    # 写回文件
    Path('ossyria_c.xml').write_text(cleaned_content, encoding='utf-8')
    print(f"修复完成！已将物理换行替换为 \\n")

# 使用示例：处理你的文件
fix_newlines_in_xml("ossyria_c.xml") 
# 如果是其他文件名，请修改这里的参数
