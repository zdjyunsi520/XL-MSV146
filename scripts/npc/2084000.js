/*
 *  NPC   : Gold Compass
 *  Free Market event NPC
 */

var status = -1;

function start() {
    if (cm.getMapId() == 910000000) {
	cm.sendNext("说真的，没有我——伟大的卡桑德拉，这个世界还怎么运转？我还没有哪一天不为这个伟大的世界担忧过。你问我在说什么？");
    } else {
	cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendOk("好吧，如果你对宝藏不感兴趣的话……");
	cm.dispose();
	return;
    }

    if (status == 0) {
	cm.sendNext("据说枫之谷世界首富金里奇的宝藏仓库被一群猪给毁了，它们把他所有的宝藏都吃掉了，他希望有人立刻处理这件事。#b#h0##k！嗯，我觉得你不太可靠，但我也找不到其他愿意帮忙的人了……你愿意帮忙吗？说不定你能把他的一件宝藏带回家……但请确保你的"消耗品"背包至少有一个空位！");
    } else if (status == 1) {
	cm.sendNext("我现在只有#t2430007#，但你可以通过支付少量费用找到以下物品：#b#t3994102#、#t3994103#、#t3994104#和\n#t3994105##k。当你把它们全部收集齐后，双击我给你的#b#t2430007##k，你就能制作出#b#t2430008##k，它会指引你前往金里奇的宝藏仓库。");
    } else if (status == 2) {
	cm.sendSimple("你想要什么？\r\n#b#L0# #t2430007#，300万枫币#l \r\n#b#L1##t3994102# x20，10万枫币#l \r\n#b#L2##t3994103# x20，10万枫币#l \r\n#b#L3##t3994104# x20，10万枫币#l \r\n#b#L4##t3994105# x20，10万枫币#l");
    } else if (status == 3) {
	if (selection == 0) {
	    if (cm.canHold(2430007) && cm.getMeso() >= 3000000) {
		cm.gainItem(2430007, 1)
		cm.gainMeso(-3000000);
	    } else {
		cm.sendOk("你不是在耍我吧？");
	    }
	} else if (selection == 1) {
	    if (cm.canHold(3994102) && cm.getMeso() >= 100000) {
		cm.gainItem(3994102, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你不是在耍我吧？");
	    }
	} else if (selection == 2) {
	    if (cm.canHold(3994103) && cm.getMeso() >= 100000) {
		cm.gainItem(3994103, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你不是在耍我吧？");
	    }
	} else if (selection == 3) {
	    if (cm.canHold(3994104) && cm.getMeso() >= 100000) {
		cm.gainItem(3994104, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你不是在耍我吧？");
	    }
	} else if (selection == 4) {
	    if (cm.canHold(3994105) && cm.getMeso() >= 100000) {
		cm.gainItem(3994105, 20)
		cm.gainMeso(-100000);
	    } else {
		cm.sendOk("你不是在耍我吧？");
	    }
	}
	cm.dispose();
    }
}