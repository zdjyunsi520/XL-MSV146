var status = -1;

function start(mode, type, selection) {
	qm.sendNext("请去冰原雪域找简了解更多信息。");
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}