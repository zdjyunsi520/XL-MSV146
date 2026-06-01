# -*- coding: utf-8 -*-
"""Fix mapDesc translations in ossyria_c.xml - use raw strings to preserve \\n"""
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE = 'E:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/map'

MAPDESC = {
    r"A fairy town located above El Nath's clouds. There is an Airship that flies out to various places in Ossyria. \n\n#cConnected areas\n - Victoria Island \n - Ereve\n - Ludibrium\n - Leafre\n - Mu Lung\n - Ariant\n - Edelstein":
        "位于冰封雪域云层之上的妖精之城。有飞往奥斯里亚各地飞船。\n\n#c相连区域\n - 维多利亚岛\n - 圣地\n - 玩具城\n - 神木村\n - 武陵\n - 阿里安特\n - 埃德尔斯坦",
    r"A toy town located above Ludus Lake. It's built on top of two towers. You can ride the Airship to move to different areas. \n\n#cConnected areas\n - Orbis Station":
        "位于露迪斯湖上方的玩具小镇。建在两座塔之上。可以乘坐飞艇前往不同区域。\n\n#c相连区域\n - 天空之城站台",
    r"A special facility built to protect Maple World from alien invasions. It's located at the foot of Eos Tower. \n\n#cConnected areas\n - Ludibrium":
        "为保护冒险岛世界免受外星人入侵而建造的特殊设施。位于艾奥斯塔脚下。\n\n#c相连区域\n - 玩具城",
    r"A town inhabited by characters from Korean folk tales. It's located at the foot of Helios Tower. \n\n#cConnected areas\n - Ludibrium":
        "居住着韩国民间故事人物的村庄。位于赫利奥斯塔脚下。\n\n#c相连区域\n - 玩具城",
    r"An underwater city located deep in the ocean. You can use the Dolphin Taxi or the ocean paths to move to different areas. \n\n#cConnected areas\n - El Nath \n - Korean Folk Town \n - Herb Town":
        "位于海洋深处的海底城市。可以乘坐海豚出租车或通过海洋通道前往不同区域。\n\n#c相连区域\n - 冰封雪域\n - 童话村\n - 百草堂",
    r"A town of nature-loving Halflingers. The Halflingers maintain a symbiotic relationship with the Dragons. You can use the station to move to different areas. \n\n#cConnected areas\n - Orbis Station \n - Temple of Time Entrance":
        "热爱自然的半灵族村庄。半灵族与龙保持共生关系。可以使用车站前往不同区域。\n\n#c相连区域\n - 天空之城站台\n - 时间神殿入口",
    r"A town veiled in fog, located in Mu Lung Garden. It's inhabited by Pandas training to become Sages. You can ride the Crane to move to different areas.\n\n#cConnected areas\n - Orbis \n - Herb Town":
        "位于武陵桃源中雾气弥漫的村庄。居住着修行的熊猫。可以乘坐仙鹤前往不同区域。\n\n#c相连区域\n - 天空之城\n - 百草堂",
    r"A town floating above the lake in Mu Lung Garden. Many award-winning herbs are cultivated here. Walk or ride the Taxi to move to different areas.\n\n#cConnected areas\n - Mu Lung \n - Aquarium":
        "漂浮在武陵桃源湖面上的村庄。这里种植着许多获奖草药。可以步行或乘坐出租车前往不同区域。\n\n#c相连区域\n - 武陵\n - 水族馆",
    r"A town centered around a legendary oasis in the middle of the desert. You can ride the Genie or walk to move to different areas. \n\n#cConnected areas\n - Orbis \n - Magatia":
        "以沙漠中央传说中的绿洲为中心的村庄。可以乘坐精灵或步行前往不同区域。\n\n#c相连区域\n - 天空之城\n - 马加提亚",
    r"A desert town whose culture revolves around the study of Alchemy. Two alchemist societies, Zenumist and Alcadno, are in conflict there. \n\n#cConnected areas\n - Ariant":
        "以炼金术研究为核心文化的沙漠城镇。杰尼斯托和阿尔卡诺两大炼金术学会在此对峙。\n\n#c相连区域\n - 阿里安特",
    r"A town built on the perpetual snowfields of El Nath. You can use the Orbis Tower to go to Orbis or Aquarium. \n\n#cConnected areas\n - Orbis \n - Aquarium \n - Dead Mine":
        "建在冰封雪域永久雪原上的村庄。可以通过天空之塔前往天空之城或水族馆。\n\n#c相连区域\n - 天空之城\n - 水族馆\n - 死亡矿坑",
    r"The temple where the Goddess of Time resides. The past, present, and future all exist in this place. You can transform into a dragon and fly out to different areas. \n\n#cConnected areas\n - Leafre":
        "时间女神居住的神殿。过去、现在和未来同时存在于此地。可以变身为龙飞往不同区域。\n\n#c相连区域\n - 神木村",
}

# Also handle variants with trailing \r\n
MAPDESC_VARIANTS = {}
for eng, chn in list(MAPDESC.items()):
    if eng.endswith('\n'):
        # Add variant without trailing newline
        MAPDESC_VARIANTS[eng.rstrip()] = chn
    # Add variant with \r\n ending
    MAPDESC_VARIANTS[eng + '\r\n'] = chn

MAPDESC.update(MAPDESC_VARIANTS)


def main():
    with open(f'{BASE}/ossyria_c.xml', 'r', encoding='utf-8') as f:
        content = f.read()

    # Sort by key length descending
    sorted_keys = sorted(MAPDESC.keys(), key=len, reverse=True)

    replaced = 0
    for eng in sorted_keys:
        chn = MAPDESC[eng]
        search = f'value="{eng}"'
        count = content.count(search)
        if count > 0:
            content = content.replace(search, f'value="{chn}"')
            replaced += count
            print(f'  OK {count}x: {eng[:60]}...' if len(eng) > 60 else f'  OK {count}x: {eng}')

    with open(f'{BASE}/ossyria_c.xml', 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'\nTotal replacements: {replaced}')

    # Verify remaining
    english_vals = set()
    for m in re.finditer(r'value="([^"]+)"', content):
        val = m.group(1)
        if any('一' <= c <= '鿿' for c in val):
            continue
        if re.search(r'[a-zA-Z]{3,}', val) and not val.startswith('#'):
            english_vals.add(val)
    print(f'Remaining English values: {len(english_vals)}')
    for v in sorted(english_vals, key=len, reverse=True)[:5]:
        print(f'  {v[:80]}' if len(v) > 80 else f'  {v}')


if __name__ == '__main__':
    main()
