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
			cm.sendNext("你好~现在是#b圣诞节#k，你想和我一起装饰圣诞树吗？用#b圣诞装饰品#k的精神可以让树健康成长！请收集你从怪物那里得到的所有圣诞装饰品...");
			cm.dispose();
			return;
		}
		if(status == 0){
			cm.sendNext("每次用户收集到所需的圣诞装饰品，我们就可以让树长到最大！\r\n#b#L0#给你，我带来了圣诞装饰品。#l#k\r\n#b#L1#请给我看看目前收集圣诞装饰品的进度。#l#k");
		} else if (status == 1) {
			cm.sendSimple("你带圣诞装饰品来了吗？那请把你拥有的#b圣诞装饰品#k给我。你愿意给多少？");
		} else if (status == 2) {
			if (selection == 0) {
				cm.sendGetNumber("树木成长状态\r\n#B", cm.itemQuantity(4001473), 0, cm.itemQuantity(4001473));
			} else {
				cm.sendOk("#\r\n如果我们全部收集齐，树就会长到最大。" + cm.getDecorations() + "请带些圣诞装饰品再来。");
				cm.dispose();
			}
		} else if (status == 3) {
			if (selection < 0 || selection > cm.itemQuantity(4001473)) {
				selection = cm.itemQuantity(4001473);
			}
			if (selection == 0) {
				cm.sendOk("谢谢你的圣诞装饰品。");
			} else {
				cm.addDecorations(selection);
				cm.gainItem(4001473, -selection);
				cm.sendOk("谢谢你的圣诞装饰品。");
			}
			cm.dispose();
		}
	}
}