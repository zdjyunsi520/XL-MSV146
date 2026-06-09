/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Cody
-- By --------------------------------------------------------------------------------------------------
	xQuasar
Note by Tykian: Minor fixes/additions
**/

importPackage(java.lang);

var status = -1;
var oldWepName;
var oldWepId;
var newWepId;
var newWepName;
var leaves;
var stimulator;
var cost;
var getNewWep;
var sel;

function start() {
    cm.sendSimple("那么，你想要什么？ \r\n#b#L0#枫叶剑#l \r\n#b#L2#枫叶法杖#l \r\n#b#L3#枫叶弓#l \r\n#b#L4#枫叶弩#l \r\n#b#L5#枫叶拳套#l \r\n#b#L6#枫叶手枪#l \r\n#b#L7#枫叶指节#l \r\n#b#L8#枫叶盾牌#l \r\n#b#L9#枫叶短刀#l");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    if (status == 0) {
	sel = selection;
	if (sel == 0) {
	    cm.sendSimple("那么，你想要什么？ \r\n\r\n#b#L0#枫叶荣耀之剑 (单手剑)#l\r\n#L1#枫叶灵魂罗恩 (双手剑)#l\r\n#L2#枫叶钢斧 (单手斧)#l\r\n#L3#枫叶恶魔斧 (双手斧)#l\r\n#L4#枫叶破坏之锤 (单手钝器)#l\r\n#L5#枫叶贝尔扎特 (双手钝器)#l\r\n#L6#枫叶坎迪瓦之弓 (弓)#l\r\n#L7#枫叶尼沙达 (弩)#l\r\n#L8#枫叶斯坎达 (拳套)#l\r\n#L9#枫叶阿修罗短刀 (短刀)#l\r\n#L10#枫叶暗之伴侣 (短刀)#l\r\n#L11#枫叶灵魂之枪 (枪)#l\r\n#L12#枫叶卡斯檀 (矛)#l\r\n#L13#枫叶光辉之杖 (短杖)#l\r\n#L14#枫叶智慧之杖 (长杖)#l\r\n#L15#枫叶黄金拳套 (指节)#l\r\n#L16#枫叶加农炮 (手枪)#l\r\n#L17#枫叶战士盾牌 (战士盾牌)#l\r\n#L18#枫叶法师盾牌 (法师盾牌)#l\r\n#L19#枫叶飞侠盾牌 (飞侠盾牌)#l\r\n#L20#枫叶铆钉短刀#l");
	} else if (sel == 2) {
	    cm.sendSimple("那么，你想要什么？ \r\n#b#L0#枫叶灵魂之歌#l \r\n#b#L1#枫叶喇嘛之杖#l \r\n#b#L2#枫叶龙斧#l \r\n#b#L3#枫叶末日之歌#l \r\n#b#L4#枫叶穿刺者#l \r\n#b#L5#枫叶天蝎#l \r\n#b#L6#枫叶灵魂搜索者#l \r\n#b#L7#枫叶十字弩#l \r\n#b#L8#枫叶坎度约#l \r\n#b#L9#枫叶风暴手枪#l \r\n#b#L10#枫叶风暴指节#l \r\n#b#L11#枫叶公爵短刀#l  \r\n#b#L12#枫叶瓦格纳#l");
	} else if (sel == 1) {
	    cm.sendSimple("那么，你想要什么？ \r\n#b#L0#枫叶红榴石之剑#l \r\n#b#L1#枫叶红榴石之斧#l \r\n#b#L2#枫叶红榴石之锤#l \r\n#b#L3#枫叶红榴石半月#l \r\n#b#L4#枫叶红榴石短杖#l \r\n#b#L5#枫叶红榴石长杖#l \r\n#b#L6#枫叶红榴石罗恩#l \r\n#b#L7#枫叶红榴石战斧#l \r\n#b#L8#枫叶红榴石大锤#l \r\n#b#L9#枫叶红榴石之枪#l \r\n#b#L10#枫叶红榴石地狱使者#l \r\n#b#L11#枫叶红榴石之弓#l \r\n#b#L12#枫叶红榴石弩#l \r\n#b#L13#枫叶红榴石斯坎达#l \r\n#b#L14#枫叶红榴石指节#l \r\n#b#L15#枫叶红榴石射手#l \r\n#b#L16#枫叶红榴石短刀#l");
	} else if (sel == 4) {
	    cm.sendSimple("你至少需要一片叶子才能获得经验值！");
	} else if (sel == 3) {
		if (!cm.haveItem(4001126, 1)) {
			cm.sendOk("你想交换多少片叶子？");
			cm.dispose();
			return;
		}
		cm.sendGetNumber("枫叶剑", 0, 0, 32767);
		status = 9;
	}
    } else if (status == 1) {
	if (sel == 0) {
	    if (selection == 0) {
		newWepName = "枫叶法杖";
		newWepId = 1302020;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 2) {
		newWepName = "枫叶弓";
		newWepId = 1382009;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 3) {
		newWepName = "枫叶弩";
		newWepId = 1452016;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 4) {
		newWepName = "枫叶拳套";
		newWepId = 1462014;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 5) {
		newWepName = "枫叶手枪";
		newWepId = 1472030;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 6) {
		newWepName = "枫叶指节";
		newWepId = 1492020;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 7) {
		newWepName = "枫叶盾牌";
		newWepId = 1482020;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 8) {
		newWepName = "枫叶短刀";
		newWepId = 1092030;
		leaves = 50;
		cost = 50000;
	    } else if (selection == 9) {
		newWepName = "你确定要制作#b";
		newWepId = 1342025;
		leaves = 50;
		cost = 50000;
	    }
	    cm.sendYesNo("#k吗？制作需要以下物品和材料...\r\n\#i4001126# x" + newWepName + "枫叶灵魂之歌" + leaves + "枫叶灵魂之歌 " + cost);
	// 1482020
	} else if (sel == 2) {
	    if (selection == 0) {
		oldWepName = "枫叶荣耀之剑";
		oldWepId = 1302030;
		newWepName = "枫叶灵魂罗恩";
		newWepId = 1302064;
		leaves = 50;
		cost = 300000;
		stimulator = 4130002;
	    } else if (selection == 1) {
		oldWepName = "枫叶荣耀之剑";
		oldWepId = 1302030;
		newWepName = "枫叶龙斧";
		newWepId = 1402039;
		leaves = 100;
		cost = 500000;
		stimulator = 4130005;
	    } else if (selection == 2) {
		oldWepName = "枫叶钢斧";
		oldWepId = 1412011;
		newWepName = "枫叶恶魔斧";
		newWepId = 1312032;
		leaves = 50;
		cost = 300000;
		stimulator = 4130003;
	    } else if (selection == 3) {
		oldWepName = "枫叶钢斧";
		oldWepId = 1412011;
		newWepName = "枫叶末日之歌";
		newWepId = 1412027;
		leaves = 100;
		cost = 500000;
		stimulator = 4130006;
	    } else if (selection == 4) {
		oldWepName = "枫叶破坏之锤";
		oldWepId = 1422014;
		newWepName = "枫叶贝尔扎特";
		newWepId = 1322054;
		leaves = 50;
		cost = 300000;
		stimulator = 4130004;
	    } else if (selection == 5) {
		oldWepName = "枫叶破坏之锤";
		oldWepId = 1422014;
		newWepName = "枫叶灵魂搜索者";
		newWepId = 1422029;
		leaves = 100;
		cost = 500000;
		stimulator = 4130007;
	    } else if (selection == 6) {
		oldWepName = "枫叶坎迪瓦之弓";
		oldWepId = 1452022;
		newWepName = "枫叶十字弩";
		newWepId = 1452045;
		leaves = 100;
		cost = 500000;
		stimulator = 4130012;
	    } else if (selection == 7) {
		oldWepName = "枫叶尼沙达";
		oldWepId = 1462019;
		newWepName = "枫叶坎度约";
		newWepId = 1462040;
		leaves = 100;
		cost = 500000;
		stimulator = 4130013;
	    } else if (selection == 8) {
		oldWepName = "枫叶斯坎达";
		oldWepId = 1472032;
		newWepName = "枫叶瓦格纳";
		newWepId = 1472055;
		leaves = 100;
		cost = 500000;
		stimulator = 4130015;
	    } else if (selection == 9 || selection == 10) {
		oldWepName = "枫叶阿修罗短刀";
		oldWepId = 1332025;
		if (selection == 9) {
		    newWepName = "枫叶暗之伴侣";
		    newWepId = 1332056;
		} else {
		    newWepName = "枫叶穿刺者";
		    newWepId = 1332055;
		}
		leaves = 100;
		cost = 500000;
		stimulator = 4130014;
	    } else if (selection == 11) {
		oldWepName = "枫叶灵魂之枪";
		oldWepId = 1432012;
		newWepName = "枫叶天蝎";
		newWepId = 1432040;
		leaves = 100;
		cost = 500000;
		stimulator = 4130008;
	    } else if (selection == 12) {
		oldWepName = "枫叶卡斯檀";
		oldWepId = 1442024;
		newWepName = "枫叶喇嘛之杖";
		newWepId = 1442051;
		leaves = 100;
		cost = 500000;
		stimulator = 4130009;
	    } else if (selection == 13) {
		oldWepName = "枫叶光辉之杖";
		oldWepId = 1382012;
		newWepName = "枫叶智慧之杖";
		newWepId = 1372034;
		leaves = 100;
		cost = 500000;
		stimulator = 4130010;
	    } else if (selection == 14) {
		oldWepName = "枫叶光辉之杖";
		oldWepId = 1382012;
		newWepName = "枫叶风暴指节";
		newWepId = 1382039;
		leaves = 100;
		cost = 500000;
		stimulator = 4130011;
	    } else if (selection == 15){
		oldWepName = "枫叶黄金拳套";
		oldWepId = 1482021;
		newWepName = "枫叶风暴手枪";
		newWepId = 1482022;
		leaves = 100;
		cost = 500000;
		stimulator = 4130016;
	    } else if (selection == 16) {
		oldWepName = "枫叶加农炮";
		oldWepId = 1492021;
		newWepName = "枫叶战士盾牌";
		newWepId = 1492022;
		leaves = 100;
		cost = 500000;
		stimulator = 4130017;
	    } else if (selection == 17) {
		oldWepName = "枫叶短刀";
		oldWepId = 1092030;
		newWepName = "枫叶法师盾牌";
		newWepId = 1092046;
		leaves = 100;
		cost = 500000;
	    } else if (selection == 18) {
		oldWepName = "枫叶短刀";
		oldWepId = 1092030;
		newWepName = "枫叶飞侠盾牌";
		newWepId = 1092045;
		leaves = 100;
		cost = 500000;
	    } else if (selection == 19) {
		oldWepName = "枫叶短刀";
		oldWepId = 1092030;
		newWepName = "枫叶公爵短刀";
		newWepId = 1092047;
		leaves = 100;
		cost = 500000;
	    } else if (selection == 20) {
		oldWepName = "枫叶铆钉短刀";
		oldWepId = 1342026;
		newWepName = "#k吗？制作需要以下物品和材料...\r\n\r\n#i";
		newWepId = 1342027;
		leaves = 100;
		cost = 500000;
	    }
	    cm.sendYesNo("#k吗？制作需要以下物品和材料...\r\n\#i4001126# x" + newWepName + "\r\n 如果你有需要的催化剂也可以使用！#r(可选)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0#" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n A Stimulator can also be used if you have the required one! #r(Optional)枫叶灵魂之歌 " + cost);
	} else if (sel == 1) {
	    if (selection == 0) {
		newWepName = "枫叶荣耀之剑";
		newWepId = 1302030;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 1) {
		newWepName = "枫叶光辉之杖";
		newWepId = 1382012;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 2) {
		newWepName = "枫叶钢斧";
		newWepId = 1412011;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 3) {
		newWepName = "枫叶破坏之锤";
		newWepId = 1422014;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 4) {
		newWepName = "枫叶灵魂之枪";
		newWepId = 1432012;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 5) {
		newWepName = "枫叶卡斯檀";
		newWepId = 1442024;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 6) {
		newWepName = "枫叶坎迪瓦之弓";
		newWepId = 1452022;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 7) {
		newWepName = "枫叶尼沙达";
		newWepId = 1462019;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 8) {
		newWepName = "枫叶斯坎达";
		newWepId = 1472032;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 9) {
		newWepName = "枫叶加农炮";
		newWepId = 1492021;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 10) {
		newWepName = "枫叶黄金拳套";
		newWepId = 1482021;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 11) {
		newWepName = "枫叶铆钉短刀";
		newWepId = 1342026;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 12) {
		newWepName = "枫叶阿修罗短刀";
		newWepId = 1332025;
		leaves = 100;
		cost = 50000;
	    }
	    cm.sendYesNo("#k吗？制作需要以下物品和材料...\r\n\#i4001126# x" + newWepName + "枫叶灵魂之歌" + leaves + "枫叶灵魂之歌 " + cost);
	} else if (sel == 4) {
	    if (selection == 0) {
		oldWepName = "枫叶灵魂罗恩";
		oldWepId = 1302064;
		newWepName = "枫叶红榴石罗恩";
		newWepId = 1302142;
		leaves = 110;
		cost = 3000000;
		stimulator = 4130002;
	    } else if (selection == 6) {
		oldWepName = "枫叶龙斧";
		oldWepId = 1402039;
		newWepName = "枫叶红榴石之斧";
		newWepId = 1402085;
		leaves = 125;
		cost = 5000000;
		stimulator = 4130005;
	    } else if (selection == 1) {
		oldWepName = "枫叶恶魔斧";
		oldWepId = 1312032;
		newWepName = "枫叶红榴石战斧";
		newWepId = 1312056;
		leaves = 110;
		cost = 3000000;
		stimulator = 4130003;
	    } else if (selection == 7) {
		oldWepName = "枫叶末日之歌";
		oldWepId = 1412027;
		newWepName = "枫叶红榴石之锤";
		newWepId = 1412055;
		leaves = 125;
		cost = 5000000;
		stimulator = 4130006;
	    } else if (selection == 2) {
		oldWepName = "枫叶贝尔扎特";
		oldWepId = 1322054;
		newWepName = "枫叶红榴石大锤";
		newWepId = 1322084;
		leaves = 110;
		cost = 3000000;
		stimulator = 4130004;
	    } else if (selection == 8) {
		oldWepName = "枫叶灵魂搜索者";
		oldWepId = 1422029;
		newWepName = "枫叶红榴石之弓";
		newWepId = 1422057;
		leaves = 125;
		cost = 500000;
		stimulator = 4130007;
	    } else if (selection == 11) {
		oldWepName = "枫叶十字弩";
		oldWepId = 1452045;
		newWepName = "枫叶红榴石弩";
		newWepId = 1452100;
		leaves = 125;
		cost = 500000;
		stimulator = 4130012;
	    } else if (selection == 12) {
		oldWepName = "枫叶坎度约";
		oldWepId = 1462040;
		newWepName = "枫叶红榴石斯坎达";
		newWepId = 1462085;
		leaves = 125;
		cost = 500000;
		stimulator = 4130013;
	    } else if (selection == 13) {
		oldWepName = "枫叶瓦格纳";
		oldWepId = 1472055;
		newWepName = "枫叶红榴石半月";
		newWepId = 1472111;
		leaves = 125;
		cost = 500000;
		stimulator = 4130015;
	    } else if (selection == 3) {
		oldWepName = "枫叶穿刺者";
		oldWepId = 1332055;
		newWepName = "枫叶红榴石之枪";
		newWepId = 1332114;
		leaves = 125;
		cost = 500000;
		stimulator = 4130014;
	    } else if (selection == 9) {
		oldWepName = "枫叶天蝎";
		oldWepId = 1432040;
		newWepName = "枫叶红榴石地狱使者";
		newWepId = 1432075;
		leaves = 125;
		cost = 500000;
		stimulator = 4130008;
	    } else if (selection == 10) {
		oldWepName = "枫叶喇嘛之杖";
		oldWepId = 1442051;
		newWepName = "枫叶红榴石短杖";
		newWepId = 1442104;
		leaves = 125;
		cost = 500000;
		stimulator = 4130009;
	    } else if (selection == 4) {
		oldWepName = "枫叶智慧之杖";
		oldWepId = 1372034;
		newWepName = "枫叶红榴石长杖";
		newWepId = 1372071;
		leaves = 125;
		cost = 500000;
		stimulator = 4130010;
	    } else if (selection == 5) {
		oldWepName = "枫叶风暴指节";
		oldWepId = 1382039;
		newWepName = "枫叶红榴石指节";
		newWepId = 1382093;
		leaves = 125;
		cost = 500000;
		stimulator = 4130011;
	    } else if (selection == 14){
		oldWepName = "枫叶风暴手枪";
		oldWepId = 1482022;
		newWepName = "枫叶红榴石射手";
		newWepId = 1482073;
		leaves = 125;
		cost = 500000;
		stimulator = 4130016;
	    } else if (selection == 15) {
		oldWepName = "枫叶战士盾牌";
		oldWepId = 1492022;
		newWepName = "枫叶红榴石短刀";
		newWepId = 1492073;
		leaves = 125;
		cost = 500000;
		stimulator = 4130017;
	    } else if (selection == 16) {
		oldWepName = "#k吗？制作需要以下物品和材料...\r\n\r\n#i";
		oldWepId = 1342027;
		newWepName = "不要吗？也许你应该先收集所需的材料，或者想清楚再说。我会在这里等你的。";
		newWepId = 1342028;
		leaves = 125;
		cost = 500000;
	    }
	    cm.sendYesNo("#k吗？制作需要以下物品和材料...\r\n\#i4001126# x" + newWepName + "\r\n 如果你有需要的催化剂也可以使用！#r(可选)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0#" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n A Stimulator can also be used if you have the required one! #r(Optional)枫叶灵魂之歌 " + cost);
	}
    } else if (status == 2) {
	if (sel == 2 || sel == 4) {
	    if (mode != 1) {
		cm.sendOk("抱歉，你似乎还没有凑齐所有材料。请收集齐全后再来试试。");
		cm.dispose();
	    } else {
		if ((cm.getMeso() < cost) || (!cm.haveItem(oldWepId,1)) || (!cm.haveItem(4001126,leaves))) {
		    cm.sendOk("好了，全部完成！很快吧？如果你还需要其他物品，我就在这里等你。");
		    cm.dispose();
		} else if (stimulator == null || !cm.haveItem(stimulator)) {
		    if (cm.canHold(newWepId)) {
			cm.gainItem(oldWepId, -1);
			cm.gainItem(4001126, -leaves);
			cm.gainMeso(-cost);
			cm.gainItem(newWepId,1);
			cm.sendOk("你的背包似乎已满，请检查一下。");
		    } else {
			cm.sendOk("看来你有一个适用于这件武器的#r催化剂#k。你想用还是不用#r催化剂#k来制作武器？如果不用#r催化剂#k，物品属性将始终是#b平均值#k。如果使用#r催化剂#k，物品属性有随机概率#b低于#b或#b高于#b平均值。\r\n#b#L20#使用催化剂制作武器#l\r\n#L21#不使用催化剂制作武器#l#k");
		    }
		    cm.dispose();
		} else {
		    status = 2;
		    cm.sendSimple("如果你不想交换叶子的话，就无法获得经验值。");
		}
	    }
	} else if (sel == 0 || sel == 1) {
	    if ((cm.getMeso() < cost) || !cm.haveItem(4001126,leaves)) {
		cm.sendOk("好了，全部完成！很快吧？如果你还需要其他物品，我就在这里等你。");
	    } else {
		if (cm.canHold(newWepId)) {
		    cm.gainItem(4001126, -leaves);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId, 1);
		    cm.sendOk("你的背包似乎已满，请检查一下。");
		} else {
		    cm.sendOk("看来你有一个适用于这件武器的#r催化剂#k。你想用还是不用#r催化剂#k来制作武器？如果不用#r催化剂#k，物品属性将始终是#b平均值#k。如果使用#r催化剂#k，物品属性有随机概率#b低于#b或#b高于#b平均值。\r\n#b#L20#使用催化剂制作武器#l\r\n#L21#不使用催化剂制作武器#l#k");
		}
	    }
	    cm.dispose();
	}
    } else if (status == 3) {
	if (sel == 2 || sel == 4) {
	    if (cm.canHold(newWepId)) {
		if (selection == 21) {
		    cm.gainItem(oldWepId,-1);
		    cm.gainItem(4001126,-leaves);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId, 1);
		    cm.sendOk("你的背包似乎已满，请检查一下。");
		} else {
		    cm.gainItem(oldWepId,-1);
		    cm.gainItem(4001126,-leaves);
		    cm.gainItem(stimulator,-1);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId,1,true);
		    cm.sendOk("你的背包似乎已满，请检查一下。");
		}
	    } else {
		cm.sendOk("看来你有一个适用于这件武器的#r催化剂#k。你想用还是不用#r催化剂#k来制作武器？如果不用#r催化剂#k，物品属性将始终是#b平均值#k。如果使用#r催化剂#k，物品属性有随机概率#b低于#b或#b高于#b平均值。\r\n#b#L20#使用催化剂制作武器#l\r\n#L21#不使用催化剂制作武器#l#k");
	    }
	    cm.dispose();
	}
	} else if (status == 10) {
		if (selection == 0) {
			cm.sendOk("你没有那么多叶子。");
			cm.dispose();
			return;
		}
		if (!cm.haveItem(4001126, selection)) {
			cm.sendOk("你想交换的叶子太多了！");
			cm.dispose();
			return;
		}
		if (cm.getPlayerStat("EXP") >= (Integer.MAX_VALUE - 200 * selection)) {
			cm.sendOk("给你！");
			cm.dispose();
			return;
		}
		cm.gainItem(4001126, -selection);
		cm.gainExp(200 * selection);
		cm.sendOk("给你！");
		cm.dispose();
    }
}