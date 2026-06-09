var status = -1;

function start(mode, type, selection) {
	qm.sendNext("也许你应该回洞穴看看有没有人在那里...");
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}