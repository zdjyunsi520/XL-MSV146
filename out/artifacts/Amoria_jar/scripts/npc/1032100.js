/**
	Arwen the Fairy - Victoria Road : Ellinia (101000000)
**/

var status = 0;
var item;
var selected;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status == 2 && mode == 0) {
	cm.sendNext("制作 " + item + "可不容易。请准备好材料。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getPlayerStat("LVL") >= 40) {
	    cm.sendNext("是啊……我是妖精们的炼金大师。但妖精不应该和人类长时间接触……不过像你这样强大的人应该没事。如果你把材料带给我，我会为你制作一件特殊的物品。");
	} else {
	    cm.sendOk("我可以制作稀有且有价值的物品，但很遗憾我不能为陌生人制作。");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendSimple("你想制作什么？#b\r\n#L0#月亮之石#l\r\n#L1#星星之石#l\r\n#L2#黑色羽毛#l");
    } else if (status == 2) {
	selected = selection;
	if (selection == 0) {
	    item = "月亮之石";
	    cm.sendYesNo("So you want to make 月亮之石? To do that you need refined one of each of these: #bBronze Plate#k, #bSteel Plate#k,\r\n#bMithril Plate#k, #bAdamantium Plate#k, #bSilver Plate#k, #bOrihalcon Plate#k and #bGold Plate#k. Throw in 10,000 mesos and I'll make it for you.");
	} else if (selection == 1) {
	    item = "星星之石";
	    cm.sendYesNo("So you want to make the 星星之石? To do that you need refined one of each of these: #bGarnet#k, #bAmethyst#k, #bAquaMarine#k, #bEmerald#k, #bOpal#k, #bSapphire#k, #bTopaz#k, #bDiamond#k and #bBlack Crystal#k. Throw in 15,000 mesos and I'll make it for you.");
	} else if (selection == 2) {
	    item = "黑色羽毛";
	    cm.sendYesNo("So you want to make 黑色羽毛? To do that you need #b1 Flaming Feather#k, #b1 月亮之石#k and #b1 Black Crystal#k. Throw in 30,000 mesos and I'll make it for you. Oh yeah, this piece of feather is a very special item, so if you drop it by any chance, it'll disappear, as well as you won't be able to give it away to someone else.");
	}
    } else if (status == 3) {
	if (selected == 0) {
	    if (cm.haveItem(4011000) && cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4011003) && cm.haveItem(4011004) && cm.haveItem(4011005) && cm.haveItem(4011006) && cm.getMeso() > 10000) {
		cm.gainMeso(-10000);
		cm.gainItem(4011000, -1);
		cm.gainItem(4011001, -1);
		cm.gainItem(4011002, -1);
		cm.gainItem(4011003, -1);
		cm.gainItem(4011004, -1);
		cm.gainItem(4011005, -1);
		cm.gainItem(4011006, -1);
		cm.gainItem(4011007, 1);
		cm.sendNext("好的，给你 " + item + "。做得很好，大概是因为用了好材料的缘故。以后如果还需要我的帮助，随时回来。");
	    } else {
		cm.sendNext("你确定你有足够的金币吗？请检查你是否拥有精炼的#b青铜板#k、#b钢铁板#k、\r\n#b秘银板#k、#b精金板#k、#b银板#k、#b奥利哈康板#k和#b黄金板#k，每种各一个。");
	    }
	} else if (selected == 1) {
	    if (cm.haveItem(4021000) && cm.haveItem(4021001) && cm.haveItem(4021002) && cm.haveItem(4021003) && cm.haveItem(4021004) && cm.haveItem(4021005) && cm.haveItem(4021006) && cm.haveItem(4021007) && cm.haveItem(4021008) && cm.getMeso() > 15000) {
		cm.gainMeso(-15000);
		cm.gainItem(4021000, -1);
		cm.gainItem(4021001, -1);
		cm.gainItem(4021002, -1);
		cm.gainItem(4021003, -1);
		cm.gainItem(4021004, -1);
		cm.gainItem(4021005, -1);
		cm.gainItem(4021006, -1);
		cm.gainItem(4021007, -1);
		cm.gainItem(4021008, -1);
		cm.gainItem(4021009, 1);
		cm.sendNext("好的，给你 " + item + "。做得很好，大概是因为用了好材料的缘故。以后如果还需要我的帮助，随时回来。");
	    } else {
		cm.sendNext("你确定你有足够的金币吗？请检查你是否拥有精炼的#b石榴石#k、#b紫水晶#k、#b海蓝宝石#k、#b祖母绿#k、#b蛋白石#k、#b蓝宝石#k、#b黄玉#k、#b钻石#k和#b黑水晶#k，每种各一个。");
	    }
	} else if (selected == 2) {
	    if (cm.haveItem(4001006) && cm.haveItem(4011007) && cm.haveItem(4021008) && cm.getMeso() > 30000) {
		cm.gainMeso(-30000);
		cm.gainItem(4001006, -1);
		cm.gainItem(4011007, -1);
		cm.gainItem(4021008, -1);
		cm.gainItem(4031042, 1);
		cm.sendNext("好的，给你 " + item + "。做得很好，大概是因为用了好材料的缘故。以后如果还需要我的帮助，随时回来。");
	    } else {
		cm.sendNext("你确定你有足够的金币吗？请检查你是否拥有精炼的#b石榴石#k、#b紫水晶#k、#b海蓝宝石#k、#b祖母绿#k、#b蛋白石#k、#b蓝宝石#k、#b黄玉#k、#b钻石#k和#b黑水晶#k，每种各一个。");
	    }
	}
	cm.dispose();
    }
}