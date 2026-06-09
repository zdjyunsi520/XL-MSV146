function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("嘿，你想把技能全部满级吗？\r\n#r需要花费1,000,000金币");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0) {
		cm.sendYesNo("我觉得你的金币不够。有很多方法可以攒钱，#g卖药#k 你懂的，比如...卖掉你的装备...打怪...做任务...你明白我在说什么吧。");
	}
	if (status == 1 && cm.getMeso() < 1000000) {
	    cm.sendNext("我觉得你的金币不够。有很多方法可以攒钱，#g卖药#k 你懂的，比如...卖掉你的装备...打怪...做任务...你明白我在说什么吧。");
	    cm.dispose();
	} if (status == 1 && cm.getMeso() > 1000000) {
	    cm.gainMeso(-1000000);
	    cm.maxSkillsByJob();
		cm.sendOk("done");
	    cm.dispose();
	}

}
}