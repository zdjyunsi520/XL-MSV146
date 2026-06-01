import re
from pathlib import Path
import os
# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
def fix_newlines_in_xml(file_path):
    # 读取文件
    content = Path(file_path).read_text(encoding='utf-8')
       # 正则：匹配 <imgdir name="纯数字">
    # 如果前面紧挨着已经有 </imgdir>，就不再重复加
    content = open(file_path, 'r', encoding='utf-8').read()
    result = re.sub(r'(<imgdir name="\d+">)', r'</imgdir>\n\1', content)
   

    # 写回文件
    Path("MonsterBook.img_c_r.xml").write_text(result, encoding='utf-8')
    print(f"修复完成！已将物理换行替换为 \\n")

# 使用示例：处理你的文件
fix_newlines_in_xml("MonsterBook.img_c.xml") 
# 如果是其他文件名，请修改这里的参数
