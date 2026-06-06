var status = -1;

function start(mode, type, selection) {
	qm.sendNext("来冰封雪域。");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
