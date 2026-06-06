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
		if(status == 0){
			cm.sendSimple("欢迎来到黄金神殿！我可以给你发放黄金门票。\r\n\r\n#b#L0#200万枫币购买黄金门票（一次性使用）#l\r\n#L1#5000万枫币购买高级黄金门票#l#k");
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getMeso() < 2000000) {
					cm.sendOk("你的枫币不够。");
				} else if (!cm.canHold(4001431) || cm.haveItem(4001431)) {
					cm.sendOk("你要么已经拥有了这个，要么背包已满。");
				} else {
					cm.gainMeso(-2000000);
					cm.gainItem(4001431,1);
					cm.sendOk("谢谢。");
				}
			} else {
				if (cm.getMeso() < 50000000) {
					cm.sendOk("你的枫币不够。");
				} else if (!cm.canHold(4001432) || cm.haveItem(4001432)) {
					cm.sendOk("你要么已经拥有了这个，要么背包已满。");
				} else {
					cm.gainMeso(-50000000);
					cm.gainItem(4001432,1);
					cm.sendOk("谢谢。");
				}
			}
			cm.dispose();
		}
	}
}