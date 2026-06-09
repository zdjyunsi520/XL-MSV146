var status = -1;
function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		qm.dispose();
		return;
	}
	if (status == 0) {
		qm.sendYesNo("你想现在去废弃都市广场吗？");
	} else if (status == 1) {
		qm.warp(103040000,0);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}