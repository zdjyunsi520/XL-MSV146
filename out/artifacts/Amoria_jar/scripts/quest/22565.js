var status = -1;
//this quest is NEVER GIVE UP
function start(mode, type, selection) {
	qm.sendNext("和米尔谈谈。");
	qm.forceStartQuest();
	qm.getPlayer().gainSP(2, 3);
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.getPlayer().gainSP(2, 3);
	qm.forceCompleteQuest();
	qm.dispose();
}