var status = -1;
//this quest is DRAGON KNOWLEDGE
function start(mode, type, selection) {
	qm.sendNext("去和龙神村的村长塔塔莫谈谈。");
	qm.forceStartQuest();
	qm.getPlayer().gainSP(1, 2);
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.getPlayer().gainSP(1, 2);
	qm.forceCompleteQuest();
	qm.dispose();
}