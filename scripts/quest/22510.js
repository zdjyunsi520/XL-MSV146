var status = -1;
//this quest is DELIVER LETTER
function start(mode, type, selection) {
	if (qm.canHold(4032455,1)) {
		qm.sendNext("去把这个送给射手村的村长斯坦。");
		qm.gainItem(4032455,1);
		qm.forceStartQuest();
	} else {
		qm.sendNext("请腾出一些空间。");
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.haveItem(4032455,1)) {
		qm.sendNext("谢谢。");
		qm.getPlayer().gainSP(1, 0);
		qm.gainExp(450);
		qm.gainItem(4032455, -1);
		qm.forceCompleteQuest();
	} else {
		qm.sendNext("请把信给我。");
	}
	qm.dispose();
}