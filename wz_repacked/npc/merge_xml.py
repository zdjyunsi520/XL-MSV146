import re
from pathlib import Path

def xml_escape(value):
    return value.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

def has_xml_entity(value):
    return '&amp;' in value or '&lt;' in value or '&gt;' in value or '&quot;' in value

original_file = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img.xml")
translated_dir = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/translated")
output_file = Path("e:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/npc/Npc.img_c.xml")

trans_entries = {}
for file_path in sorted(translated_dir.glob("Npc.img_*_c.xml"), key=lambda x: int(re.search(r'Npc\.img_(\d+)_c\.xml', x.name).group(1))):
    content = file_path.read_text(encoding='utf-8')
    npc_pattern = re.compile(r'<imgdir name="(\d+)">(.*?)</imgdir>', re.DOTALL)
    npc_matches = npc_pattern.findall(content)
    for npc_id, npc_content in npc_matches:
        value_pattern = re.compile(r'<string name="([^"]+)" value="([^"]+)"/>')
        value_matches = value_pattern.findall(npc_content)
        trans_entries[npc_id] = {name: value for name, value in value_matches}

original_content = original_file.read_text(encoding='utf-8')

def process_npc(match):
    npc_id = match.group(1)
    inner_content = match.group(2)

    if npc_id in trans_entries:
        translations = trans_entries[npc_id]

        def replace_value(m):
            attr_name = m.group(1)
            original_value = m.group(2)

            if has_xml_entity(original_value):
                return m.group(0)

            if attr_name in translations:
                translated_value = xml_escape(translations[attr_name])
                return f'<string name="{attr_name}" value="{translated_value}"/>'

            return m.group(0)

        result = re.sub(r'<string name="([^"]+)" value="([^"]+)"/>', replace_value, inner_content)
        return f'<imgdir name="{npc_id}">{result}</imgdir>'

    return match.group(0)

merged_content = re.sub(r'<imgdir name="(\d+)">(.*?)</imgdir>', process_npc, original_content, flags=re.DOTALL)

output_file.write_text(merged_content, encoding='utf-8')

print(f"合并完成！共处理 {len(trans_entries)} 个翻译条目")
print(f"输出文件: {output_file}")