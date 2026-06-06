import os
import shutil

# 读取翻译文件
translations = {}
with open('translate_zh.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        parts = line.split('|')
        if len(parts) == 3:
            filepath, en_text, zh_text = parts
            # 提取文件名
            filename = os.path.basename(filepath)
            if filename not in translations:
                translations[filename] = []
            translations[filename].append((en_text, zh_text))

# 执行替换
tran_dir = 'tran'
for filename, pairs in translations.items():
    src_path = os.path.join(tran_dir, filename)
    if not os.path.exists(src_path):
        print(f"文件不存在: {src_path}")
        continue
    
    # 读取源文件
    with open(src_path, 'rb') as f:
        raw = f.read()
    try:
        content = raw.decode('utf-8')
    except:
        content = raw.decode('latin-1')
    
    # 执行替换
    for en_text, zh_text in pairs:
        content = content.replace(en_text, zh_text)
    
    # 保存替换后的文件
    with open(src_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"已替换完成: {src_path}")

print("批量替换完成！")
