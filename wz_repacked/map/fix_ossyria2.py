# -*- coding: utf-8 -*-
"""Fix remaining untranslated values in ossyria_c.xml by direct value replacement."""
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

BASE = 'E:/github/MapleStoryV146/Service/SpiritMS/wz/String.wz/map'

# Complete translation map: English -> Chinese
TRANS = {
    # === mapDesc (long descriptions) ===
    "A fairy town located above El Nath's clouds. There is an Airship that flies out to various places in Ossyria. \n\n#cConnected areas\n - Victoria Island \n - Ereve\n - Ludibrium\n - Leafre\n - Mu Lung\n - Ariant\n - Edelstein": "位于冰封雪域云层之上的妖精之城。有飞往奥斯里亚各地飞船。\n\n#c相连区域\n - 维多利亚岛\n - 圣地\n - 玩具城\n - 神木村\n - 武陵\n - 阿里安特\n - 埃德尔斯坦",
    "A toy town located above Ludus Lake. It's built on top of two towers. You can ride the Airship to move to different areas. \n\n#cConnected areas\n - Orbis Station": "位于露迪斯湖上方的玩具小镇。建在两座塔之上。可以乘坐飞艇前往不同区域。\n\n#c相连区域\n - 天空之城站台",
    "A special facility built to protect Maple World from alien invasions. It's located at the foot of Eos Tower. \n\n#cConnected areas\n - Ludibrium": "为保护冒险岛世界免受外星人入侵而建造的特殊设施。位于艾奥斯塔脚下。\n\n#c相连区域\n - 玩具城",
    "A town inhabited by characters from Korean folk tales. It's located at the foot of Helios Tower. \n\n#cConnected areas\n - Ludibrium": "居住着韩国民间故事人物的村庄。位于赫利奥斯塔脚下。\n\n#c相连区域\n - 玩具城",
    "An underwater city located deep in the ocean. You can use the Dolphin Taxi or the ocean paths to move to different areas. \n\n#cConnected areas\n - El Nath \n - Korean Folk Town \n - Herb Town": "位于海洋深处的海底城市。可以乘坐海豚出租车或通过海洋通道前往不同区域。\n\n#c相连区域\n - 冰封雪域\n - 童话村\n - 百草堂",
    "A town of nature-loving Halflingers. The Halflingers maintain a symbiotic relationship with the Dragons. You can use the station to move to different areas. \n\n#cConnected areas\n - Orbis Station \n - Temple of Time Entrance": "热爱自然的半灵族村庄。半灵族与龙保持共生关系。可以使用车站前往不同区域。\n\n#c相连区域\n - 天空之城站台\n - 时间神殿入口",
    "A town veiled in fog, located in Mu Lung Garden. It's inhabited by Pandas training to become Sages. You can ride the Crane to move to different areas.\n\n#cConnected areas\n - Orbis \n - Herb Town": "位于武陵桃源中雾气弥漫的村庄。居住着修行的熊猫。可以乘坐仙鹤前往不同区域。\n\n#c相连区域\n - 天空之城\n - 百草堂",
    "A town floating above the lake in Mu Lung Garden. Many award-winning herbs are cultivated here. Walk or ride the Taxi to move to different areas.\n\n#cConnected areas\n - Mu Lung \n - Aquarium": "漂浮在武陵桃源湖面上的村庄。这里种植着许多获奖草药。可以步行或乘坐出租车前往不同区域。\n\n#c相连区域\n - 武陵\n - 水族馆",
    "A town centered around a legendary oasis in the middle of the desert. You can ride the Genie or walk to move to different areas. \n\n#cConnected areas\n - Orbis \n - Magatia": "以沙漠中央传说中的绿洲为中心的村庄。可以乘坐精灵或步行前往不同区域。\n\n#c相连区域\n - 天空之城\n - 马加提亚",
    "A desert town whose culture revolves around the study of Alchemy. Two alchemist societies, Zenumist and Alcadno, are in conflict there. \n\n#cConnected areas\n - Ariant": "以炼金术研究为核心文化的沙漠城镇。杰尼斯托和阿尔卡诺两大炼金术学会在此对峙。\n\n#c相连区域\n - 阿里安特",
    "A town built on the perpetual snowfields of El Nath. You can use the Orbis Tower to go to Orbis or Aquarium. \n\n#cConnected areas\n - Orbis \n - Aquarium \n - Dead Mine": "建在冰封雪域永久雪原上的村庄。可以通过天空之塔前往天空之城或水族馆。\n\n#c相连区域\n - 天空之城\n - 水族馆\n - 死亡矿坑",
    "The temple where the Goddess of Time resides. The past, present, and future all exist in this place. You can transform into a dragon and fly out to different areas. \n\n#cConnected areas\n - Leafre": "时间女神居住的神殿。过去、现在和未来同时存在于此地。可以变身为龙飞往不同区域。\n\n#c相连区域\n - 神木村",
    "An ancient kingdom of magic that was believed to be wiped off the face of Maple World centuries ago. Hosts Ranheim Academy and the floating Palace Trueffet. You can use the streets or the Dimensional Portal in the academy to move to different areas.": "被认为是数百年前从冒险岛世界消失的古老魔法王国。拥有兰海姆学院和浮空宫殿特鲁费。可以通过街道或学院中的次元传送门前往不同区域。",
    "The path to the Black Mage's general, in the Lion King's Castle.": "狮王之城中通往黑魔法师将军的道路。",

    # === El Nath area ===
    "El Nath": "冰封雪域",
    "El Nath Market": "冰封雪域市场",
    "El Nath Weapon Store": "冰封雪域武器店",
    "El Nath General Store": "冰封雪域杂货店",
    "Entrance to El Nath Free Market": "冰封雪域自由市场入口",
    "El Nath Free Market &lt;1&gt;": "冰封雪域自由市场&lt;1&gt;",
    "El Nath Free Market &lt;2&gt;": "冰封雪域自由市场&lt;2&gt;",
    "El Nath Free Market &lt;3&gt;": "冰封雪域自由市场&lt;3&gt;",
    "El Nath Free Market &lt;4&gt;": "冰封雪域自由市场&lt;4&gt;",
    "El Nath Free Market &lt;5&gt;": "冰封雪域自由市场&lt;5&gt;",
    "Old Man's House": "老人之家",
    "Chief's Residence": "村长住宅",
    "Entrance to Orbis Tower": "天空之塔入口",
    "Entrance to Zakum Altar": "扎昆祭坛入口",
    "The Door to Zakum": "扎昆之门",
    "Holy Ground at the Snowfield": "雪域圣地",
    "Ice Valley I": "冰谷I",
    "Ice Valley II": "冰谷II",
    "Sharp Cliff I": "峭壁I",
    "Sharp Cliff II": "峭壁II",
    "Sharp Cliff 3": "峭壁3",
    "Sharp Cliff 4": "峭壁4",
    "Watch Out for Icy Path I": "注意结冰路I",
    "Watch Out for Icy Path II": "注意结冰路II",
    "Icy Cold Field": "冰冻旷野",
    "Cold Field I": "寒冷旷野I",
    "Cold Field II": "寒冷旷野II",
    "Wolves' Territory 1": "狼的领地1",
    "Wolves' Territory 2": "狼的领地2",
    "Wolves'  Territory 3": "狼的领地3",
    "Dangerous Cliff": "危险的悬崖",
    "The Hill of Christmas": "圣诞之丘",
    "Snowy Hill": "雪山",
    "Strolling Path": "散步小路",
    "Strolling Path II": "散步小路II",
    "Forest of Dead Trees I": "枯木之森I",
    "Forest of Dead Trees II": "枯木之森II",
    "Forest of Dead Trees III": "枯木之森III",
    "Forest of Dead Trees IV": "枯木之森IV",
    "Valley of Snowman": "雪人谷",
    "Dead Mine I": "死亡矿坑I",
    "Dead Mine II": "死亡矿坑II",
    "Dead Mine III": "死亡矿坑III",
    "Dead Mine IV": "死亡矿坑IV",
    "Extra Frosty Snow Zone": "极寒雪域",
    "Desolate Moor": "荒芜沼泽",
    "Disposed Flower Garden": "废弃花园",
    "Top of the Hill": "山丘之顶",
    "The Passage": "通道",
    "The Cave of Trial III": "试炼洞穴III",
    "Shammos's Solitary Room &lt;Exit Map&gt;": "沙姆斯的独居室 &lt;出口地图&gt;",
    "Unmapped Tower &lt;Exit Map&gt;": "未标记之塔 &lt;出口地图&gt;",
    "Happyville": "快乐村",
    "Small Park": "小公园",

    # === Orbis Tower floors ===
    "Orbis Tower &lt;1st Floor&gt;": "天空之塔&lt;1层&gt;",
    "Orbis Tower &lt;2nd Floor&gt;": "天空之塔&lt;2层&gt;",
    "Orbis Tower &lt;3rd Floor&gt;": "天空之塔&lt;3层&gt;",
    "Orbis Tower &lt;4th Floor&gt;": "天空之塔&lt;4层&gt;",
    "Orbis Tower &lt;5th Floor&gt;": "天空之塔&lt;5层&gt;",
    "Orbis Tower &lt;6th Floor&gt;": "天空之塔&lt;6层&gt;",
    "Orbis Tower &lt;7th Floor&gt;": "天空之塔&lt;7层&gt;",
    "Orbis Tower &lt;8th Floor&gt;": "天空之塔&lt;8层&gt;",
    "Orbis Tower &lt;9th Floor&gt;": "天空之塔&lt;9层&gt;",
    "Orbis Tower &lt;10th Floor&gt;": "天空之塔&lt;10层&gt;",
    "Orbis Tower &lt;11th Floor&gt;": "天空之塔&lt;11层&gt;",
    "Orbis Tower &lt;12th Floor&gt;": "天空之塔&lt;12层&gt;",
    "Orbis Tower &lt;13th Floor&gt;": "天空之塔&lt;13层&gt;",
    "Orbis Tower &lt;14th Floor&gt;": "天空之塔&lt;14层&gt;",
    "Orbis Tower &lt;15th Floor&gt;": "天空之塔&lt;15层&gt;",
    "Orbis Tower &lt;16th Floor&gt;": "天空之塔&lt;16层&gt;",
    "Orbis Tower &lt;17th Floor&gt;": "天空之塔&lt;17层&gt;",
    "Orbis Tower &lt;18th Floor&gt;": "天空之塔&lt;18层&gt;",
    "Orbis Tower &lt;19th Floor&gt;": "天空之塔&lt;19层&gt;",
    "Orbis Tower &lt;20th Floor&gt;": "天空之塔&lt;20层&gt;",
    "Orbis Tower &lt;Hidden Room&gt;": "天空之塔&lt;隐藏房间&gt;",
    "Orbis Tower&lt;B1&gt;": "天空之塔&lt;B1&gt;",
    "Orbis Tower&lt;B2&gt;": "天空之塔&lt;B2&gt;",
    "Orbis Tower&lt;Hughes's Laboratory&gt;": "天空之塔&lt;休斯实验室&gt;",

    # === Orbis misc ===
    "Orbis Hair Salon": "天空之城美发店",
    "Orbis Plastic Surgery": "天空之城整形医院",
    "Orbis Skin-Care": "天空之城护肤中心",
    "Cloud Park I": "云朵公园I",
    "Cloud Park II": "云朵公园II",
    "Cloud Park III": "云朵公园III",
    "Cloud Park IV": "云朵公园IV",
    "Cloud Park V": "云朵公园V",
    "Cloud Park VI": "云朵公园VI",
    "The Road to Garden of 3 Colors": "三色花园之路",
    "Garden of Darkness I": "黑暗花园I",
    "Garden of Darkness II": "黑暗花园II",
    "Garden of Green I": "绿色花园I",
    "Garden of Green II": "绿色花园II",
    "Garden of Red I": "红色花园I",
    "Garden of Red II": "红色花园II",
    "Garden of Yellow I": "黄色花园I",
    "Garden of Yellow II": "黄色花园II",

    # === Castle towers (Lion King's Castle) ===
    "First Tower": "第一座塔",
    "Second Tower": "第二座塔",
    "Third Tower": "第三座塔",
    "Fourth Tower": "第四座塔",
    "Fifth Tower": "第五座塔",
    "Roof of the First Tower": "第一座塔的屋顶",
    "Roof of the Second Tower": "第二座塔的屋顶",
    "Roof of the Third Tower": "第三座塔的屋顶",
    "Roof of the Fourth Tower": "第四座塔的屋顶",
    "Roof of the Fifth Tower": "第五座塔的屋顶",
    "Castle Entrance": "城堡入口",
    "Cave Within the Cave": "洞穴中的洞穴",

    # === Castle walls ===
    "Short Castle Walls 1": "矮城墙1",
    "Short Castle Walls 2": "矮城墙2",
    "Short Castle Walls 3": "矮城墙3",
    "Tall Castle Walls 1": "高城墙1",
    "Tall Castle Walls 2": "高城墙2",
    "Very Tall Castle Walls": "非常高的城墙",
    "Under the Castle Walls 1": "城墙下方1",
    "Under the Castle Walls 2": "城墙下方2",
    "Under the Castle Walls 3": "城墙下方3",
    "Under the Castle Walls 4": "城墙下方4",
    "Under the Castle Walls 5": "城墙下方5",
    "Guild Headquarters &lt;Hall of Fame&gt;": "公会总部 &lt;名人堂&gt;",

    # === Ship/transport ===
    "Cabin &lt;To Mu Lung&gt;": "船舱 &lt;前往武陵&gt;",
    "Cabin &lt;To Orbis&gt;": "船舱 &lt;前往天空之城&gt;",
    "Cabin &lt;Victoria Bound&gt;": "船舱 &lt;开往维多利亚岛&gt;",
    "Cabin Path &lt;To Mu Lung&gt;": "船舱通道 &lt;前往武陵&gt;",
    "The Crown-Flyer": "皇冠飞行器",
    "Cruising": "巡航中",
    "During the Ride": "乘坐中",
    "On a Voyage": "航行中",
    "Station &lt;To Ariant&gt;": "站台 &lt;前往阿里安特&gt;",
    "Station Tunnel &lt;To Ariant&gt;": "站台隧道 &lt;前往阿里安特&gt;",
    "To Ariant": "前往阿里安特",
    "To Leafre": "前往神木村",
    "To Mu Lung": "前往武陵",
    "Ani's Jail": "阿尼的牢房",

    # === Remaining mapName ===
    "Area 15-1": "区域15-1",
    "Armory 1": "武器库1",
    "Armory 2": "武器库2",
    "Fevered Land": "炽热之地",
    "Forked Road : East Sea": "岔路口：东海",
    "Forked Road : West Sea": "岔路口：西海",
    "Moon Ridge": "月岭",
    "Time Lane": "时间车道",
    "Zoo": "动物园",

    # === streetName missing ===
    "El Nath": "冰封雪域",
    "Dead Mine": "死亡矿坑",
}

def main():
    with open(f'{BASE}/ossyria_c.xml', 'r', encoding='utf-8') as f:
        content = f.read()

    # Sort keys by length (longest first) to avoid partial matches
    sorted_keys = sorted(TRANS.keys(), key=len, reverse=True)

    replaced = 0
    for eng in sorted_keys:
        chn = TRANS[eng]
        # Escape special regex chars in the key
        escaped = eng.replace('\\', '\\\\').replace('"', '\\"')
        # Only replace within value="..." attributes
        pattern = f'value="{re.escape(eng)}"'
        matches = list(re.finditer(pattern, content))
        if matches:
            content = content.replace(f'value="{eng}"', f'value="{chn}"')
            replaced += len(matches)
            print(f'  Replaced {len(matches)}x: {eng[:50]}...' if len(eng) > 50 else f'  Replaced {len(matches)}x: {eng}')

    with open(f'{BASE}/ossyria_c.xml', 'w', encoding='utf-8') as f:
        f.write(content)

    print(f'\nTotal replacements: {replaced}')

    # Check remaining untranslated
    english_vals = set()
    for m in re.finditer(r'value="([^"]+)"', content):
        val = m.group(1)
        if any('一' <= c <= '鿿' for c in val):
            continue
        if re.search(r'[a-zA-Z]{3,}', val) and not val.startswith('#'):
            english_vals.add(val)
    print(f'Remaining English values: {len(english_vals)}')
    for v in sorted(english_vals):
        print(f'  {v[:80]}' if len(v) > 80 else f'  {v}')

if __name__ == '__main__':
    main()
