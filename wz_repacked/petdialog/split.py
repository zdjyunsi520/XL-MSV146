import re
import xml.sax.saxutils # 用于 XML 转义
from pathlib import Path
import os

# 先切换到脚本所在目录
os.chdir(Path(__file__).parent)
translated_dir = Path("translated")
output_file = Path("PetDialog.img_c.xml")

# 预编译正则表达式：
fix_pattern = re.compile(r'<string\b[^>]*?name="([^"]*)"[^>]*?value(.*?)(/>|>)', re.DOTALL)

# 预编译非法字符正则：剔除 XML 不允许的控制字符及零宽字符等
illegal_xml_chars_re = re.compile(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x84\x86-\x9f\u200b-\u200f\u2028-\u202f\u2060-\u206f]')

def fix_and_clean_tag(match):
    # 1. 提取并清理 name 的值
    name_val = match.group(1).strip()
    name_val = illegal_xml_chars_re.sub('', name_val) # 杀掉不可见非法字符
    
    # 2. 提取 value 后面的部分
    broken_val_part = match.group(2).strip()
    closing_tag = match.group(3).strip()
    
    # --- 核心清理逻辑 ---
    content = broken_val_part
    if content.startswith('='):
        content = content[1:].strip()
    if content.startswith('"'):
        content = content[1:].lstrip()
    if content.endswith('"'):
        content = content[:-1].rstrip()
        
    content = content.strip()
    
    # 杀掉 value 内容中的不可见非法字符
    content = illegal_xml_chars_re.sub('', content)
    
    # 3. 对文本进行 XML 转义！
    # 关键修改：传入 {'"': '&quot;'}，强制把文本内部的双引号也转义
    name_val = xml.sax.saxutils.escape(name_val, {'"': '&quot;'})
    content = xml.sax.saxutils.escape(content, {'"': '&quot;'})
    
    # 4. 重新拼接
    return f'<string name="{name_val}" value="{content}"{closing_tag}'

# 预编译正则表达式：用于移除子文件里的 XML 声明
xml_declaration_pattern = re.compile(r'<\?xml.*?\?>\s*', re.IGNORECASE)

content_parts = []
for file_path in sorted(translated_dir.glob("*.xml"), key=lambda x: x.stem):
    # 1. 读取文件原始内容
    lines = file_path.read_text(encoding='utf-8-sig')
    
    # 2. 移除子文件自带的 XML 声明
    lines = xml_declaration_pattern.sub('', lines)
    
    # 3. 执行正则替换，清理非法字符并转义
    cleaned_lines = fix_pattern.sub(fix_and_clean_tag, lines)
    
    # 4. 将修复后的内容加入列表
    content_parts.append(cleaned_lines.strip())

# 拼接完整 XML
full_content = [
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
    '<imgdir name="PetDialog.img">'
] + content_parts + [
    '</imgdir>'
]

# 写入输出文件
output_file.write_text('\n'.join(full_content), encoding='utf-8')

print(f"合并并修复完成！")
print(f"输出文件: {output_file}")
