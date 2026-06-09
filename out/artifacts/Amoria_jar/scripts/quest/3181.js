var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是一个重要的决定。");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendNext("是克雷格带你来的吗？");
    } else if (status == 1) {
	qm.sendPlayerToNpc("#b我想是的。");
    } else if (status == 2) {
	qm.sendNext("好的，这是你的任务。");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.dispose();
    }
}