var status = -1;

function start(mode, type, selection) {
	qm.sendOk("去找神木村的#b长老塔塔莫#k，带一份龙苔提取物回来。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
    	status++;
	if (status == 0) {
		if (qm.haveItem(4032531,1)) {
			qm.sendNext("太好了！请等我调配这些材料……");
		} else {
			qm.sendOk("请去找神木村的#b长老塔塔莫#k，带一份龙苔提取物回来。");
			qm.forceStartQuest();
			qm.dispose();
		}
	} else {
		qm.teachSkill(qm.getPlayer().getStat().getSkillByJob(1026, qm.getPlayer().getJob()), 1, 0); // Maker
		qm.gainExp(11000);
		qm.removeAll(4032531);
		qm.sendOk("好了！你已经学会了翱翔技能，可以飞行了，但会消耗大量MP。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	