/* RED 1st impact
	Instructor Irvin
    Made by Daenerys
*/
var status;
var selected;

function start() {
    status = 0;
    cm.sendSimple("你想租用哪架飞机？\r\n#b\r\n#L0# #fSkill/8000.img/skill/80001027/iconMouseOver# 木质飞机（1天） #r10,000金币#b#l\r\n#L1# #fSkill/8000.img/skill/80001027/iconMouseOver# 木质飞机（7天） #r50,000金币#b#l\r\n#L2# #fSkill/8000.img/skill/80001028/iconMouseOver# 红色飞机（1天） #r30,000金币#b#l\r\n#L3# #fSkill/8000.img/skill/80001028/iconMouseOver# 红色飞机（7天） #r150,000金币#b#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    switch (status) {
        case 1:
            selected = selection;
            if (selected == 0) {
                cm.sendSimple("你……你不知道飞机是什么？嗯，这也算是新事物。它嘛，有点像你拥有的坐骑，但可以带你飞很远，比如到其他大陆。");//todo handle this
            } else if (selected == 1) {
                cm.sendNext("有两种飞机可供租用。第一种是#b木质飞机#k，价格便宜且可靠。另一种是#b红色飞机#k，价格较贵，但速度更快，能比木质飞机快2分钟到达目的地。");
            } else if (selected == 2) {
                cm.sendOk("你想购买哪种许可证？\r\n#b\r\n#L0# 冰雪峡谷飞行许可证（永久） #r10000金币#b#l\r\n#L2# 鲁德斯湖飞行许可证（永久） #r100000金币#b#l\r\n#L3# 水下世界飞行许可证（永久） #r500000金币#b#l\r\n#L1# 米纳尔森林飞行许可证（永久） #r2000000金币#b#l");
                cm.dispose();            
			} else if (selected == 3) {
                cm.sendSimple("当然你不能飞到所有大陆。你可以从#b天空之城#k搭乘飞机飞往#b维多利亚岛、耶雷弗、埃德尔斯坦、玩具城、阿里安特、武陵或神木村#k。当然也可以反向飞行。最后，你还可以从#b埃德尔斯坦#k飞往#b维多利亚岛#k，反之亦然。这些是你目前可以搭乘飞机前往的目的地……其他地方还太危险了……");
            }
            break;
        case 2:
            if (selected == 0) {//handle
                cm.dispose();
            } else if (selected == 1) {
                cm.sendNextPrev("如果你想搭乘飞机前往某地，可以和各种运营洲际航班的工作人员对话，比如#b天空之城车站的车站向导伊莎#k或#b前往天空之城车站的樱桃乘务员#k。");
            } else if (selected == 3) {//handle
                cm.dispose();
            }
            break;
        case 3:
            if (selected == 0) {//handle
                cm.dispose();
            } else if (selected == 1) {
                cm.sendNextPrev("就是这些了。还有什么问题吗？");
			}
            break;
        case 4:
            if (selected == 0) {
                cm.dispose();
			} else if (selected == 1) {
                cm.sendOk("就是这些了。还有什么问题吗？");
				cm.dispose();
			}	
            break;
    }
}