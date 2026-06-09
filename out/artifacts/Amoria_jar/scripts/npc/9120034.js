/*
	Noran
 */

var status = -1;

function start() {
    cm.sendSimple("我的名字是诺兰，技术人员。在这里，每个人都在谈论你。如果你能击败机械怪物，我也想帮助你。利用烈焰技术，可以制造更强大的物品。");
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else if (status == 1) {
	status--;
	selection = 0;
    } else {
	cm.dispose();
	return;
    }
	
    switch (status) {
	case 0:
	    if (selection == 0) {
		cm.sendNext("有什么可以帮你的？ \r #b#L0#魔法飞刀#l \r #L1#穿甲弹#l")
	    } else {
		status = 9;
		cm.sendSimple("据说烈焰已经成功收集了漂浮在宇宙中的能量。如果这是真的，就能获得巨大的能量。少部分能量可以从封印勇士之石中提取，但必须先解除封印才能使用。把它交给我，我来解除封印。");
	    }
	    break;
	case 1:
	    cm.sendNextPrev("把封印石交给我 \r #b#L0#交出封印勇士之石和服务费。1000枚银币#l \r #L1#交出封印贤者之石和服务费。1000枚银币#l \r #L2#交出封印圣人之石和服务费。1000枚银币#l");
	    break;
	case 2:
	    cm.sendSimple("嗯？你没有所需材料。\n\r 你需要封印勇士之石和1000枚银币来制作勇士之石。");
	    break;
	case 3:
	    if (selection == 0) {
		if (cm.haveItem(4020010, 1) && cm.haveItem(4032181, 1000)) {
		    cm.gainItem(4032169, 1);
		    cm.gainItem(4020010, -1);
		    cm.gainItem(4032181, -1000);
		} else {
		    cm.sendNext("嗯？你没有所需材料。\n\r 你需要封印贤者之石和1000枚银币来制作贤者之石。");
		}
	    } else if (selection == 1) {
		if (cm.haveItem(4020011, 1) && cm.haveItem(4032181, 1000)) {
		    cm.gainItem(4032170, 1);
		    cm.gainItem(4020011, -1);
		    cm.gainItem(4032181, -1000);
		} else {
		    cm.sendNext("嗯？你没有所需材料。\n\r 你需要封印圣人之石和1000枚银币来制作圣人之石。");
		}
	    } else {
		if (cm.haveItem(4020012, 1) && cm.haveItem(4032181, 1000)) {
		    cm.gainItem(4032171, 1);
		    cm.gainItem(4020011, -1);
		    cm.gainItem(4032181, -1000);
		} else {
		    cm.sendNext("嗯？你没有所需材料。\n\r 你需要纳米植物（奥米茄）、贤者之石、1个雪花镖、2500枚银币和1.5亿金币来制作魔法飞刀。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (selection == 0) {
		if (cm.haveItem(4032168, 1) && cm.haveItem(4032181, 2500) && cm.haveItem(4032171, 1) && cm.haveItem(2070006, 1) && (cm.getMeso() >= 150000000)) {
		    cm.gainItem(4032171, -1);
		    cm.gainItem(4032168, -1);
		    cm.gainItem(2070006, -1);
		    cm.gainItem(4032181, -2500);
		    cm.gainMeso(-150000000);
		    cm.gainItem(2070019, 1);
		} else {
		    cm.sendNext("嗯？你没有所需材料。\n\r 你需要纳米植物（奥米茄）、圣人之石、1个生命弹、2500枚银币和1.5亿金币来制作穿甲弹。");
		}
	    } else {
		if (cm.haveItem(4032168, 1) && cm.haveItem(4032181, 2500) && cm.haveItem(4032170, 1) && cm.haveItem(2330003, 1) && (cm.getMeso() >= 150000000)) {
		    cm.gainItem(4032170, -1);
		    cm.gainItem(4032168, -1);
		    cm.gainItem(2330003, -1);
		    cm.gainItem(4032181, -2500);
		    cm.gainMeso(-150000000);
		    cm.gainItem(2330007, 1);
		} else {
		    cm.sendNext("嗯？你没有所需材料。\n\r 你需要纳米植物（奥米茄）、圣人之石、1个生命弹、2500枚银币和1.5亿金币来制作穿甲弹。");
		}
	    }
	    cm.dispose();
	    break;
    }
}