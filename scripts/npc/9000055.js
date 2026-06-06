var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
	} else {
		status++;
		if (cm.getClient().getChannel() == 1) {
			cm.sendNext("该活动不能在第1频道进行。");
			cm.dispose();
			return;
		}
		cm.sendNext("该活动目前未在进行中。");
		cm.dispose();
		/*if(status == 0){
			cm.sendNext("你好~ 现在是#b枫之谷周年庆#k，你愿意和我一起种植枫树吗？用来自#b温暖阳光#k的阳光可以让树健康成长！请收集你从怪物那里获得的所有温暖阳光...");
		} else if (status == 1) {
			cm.sendSimple("每次玩家收集到所需的温暖阳光，我们就能让树成长到最大！\r\n#b#L0#给你，我带来了温暖阳光。#l#k\r\n#b#L1#请给我看看收集温暖阳光的当前进度。#l#k");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendGetNumber("你带温暖阳光来了吗？那么请把你收集的#b温暖阳光#k交给我。我会做一个漂亮的爆竹。你愿意给我多少？", cm.itemQuantity(4001246), 0, cm.itemQuantity(4001246));
			} else {
				cm.sendOk("枫树成长状态\r\n#B" + cm.getSunshines() + "#\r\n如果我们全部收集齐，树就会成长到最茂盛的状态。");
				cm.dispose();
			}
		} else if (status == 3) {
			if (selection < 0 || selection > cm.itemQuantity(4001246)) {
				selection = cm.itemQuantity(4001246);
			}
			if (selection == 0) {
				cm.sendOk("请带着温暖阳光再来。");
			} else {
				cm.addSunshines(selection);
				cm.gainItem(4001246, -selection);
				cm.sendOk("谢谢你的温暖阳光。");
			}
			cm.dispose();
		}*/
	}
}