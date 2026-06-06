var status = -1;

function start(mode, type, selection) {
 	qm.sendOk("来玩具城。");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
