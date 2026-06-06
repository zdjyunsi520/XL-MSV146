var status = -1;

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendSimple("你好，我是咕噜力，我想要#b年糕#k……#b\r\n#L0#我给你带来了年糕！#l\r\n#L1#我在这里要做什么？#l#k");
	} else if (status == 1) {
		if (selection == 0) {
			if (!cm.isLeader()) {
				cm.sendNext("只有队长才能给我送年糕。");
			} else {
				if (cm.haveItem(4001101,10)) {
					cm.achievement(100);
					cm.gainItem(4001101, -10);
					cm.givePartyExp_PQ(70, 1.5);
					cm.givePartyNX(250);
					cm.addPartyTrait("will", 5);
					cm.addPartyTrait("sense", 1);
					cm.endPartyQuest(1200);
					cm.warpParty(910010300);
				} else {
					cm.sendNext("你没有10个年糕…… ");
				}
			}
		} else if (selection == 1) {
			cm.sendNext("这里是月妙山丘，满月时月兔会制作#b年糕#k。要制造满月，需要从月妙花上获取种子并种下，当6颗种子全部种下后，满月就会出现。#r月兔随后会被召唤出来，你必须保护它免受其他怪物的攻击#k。如果#b月兔#k死亡，你将任务失败，我会又饿又生气……");

		}
		cm.dispose();
	}
}