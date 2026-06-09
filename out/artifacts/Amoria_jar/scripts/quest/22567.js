var status = -1;
//this quest is SECRET ORGANIZATION 1
function start(mode, type, selection) {
	qm.sendNext("制作一个生长促进剂。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.isQuestFinished(22568) || qm.haveItem(4032468,10)) {
		qm.getPlayer().gainSP(2, 3);
		qm.forceCompleteQuest();
	} else {
		qm.sendNext("制作一个生长促进剂。");
		qm.forceStartQuest();
	}
	qm.dispose();
}