var status = -1;

function start(mode, type, selection) {
	qm.sendNext("回埃雷布汇报情况。");
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}