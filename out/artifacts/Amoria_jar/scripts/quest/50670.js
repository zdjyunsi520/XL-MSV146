var status = -1;

function start(mode, type, selection) {
	qm.sendNext("加入沉默远征队……");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
