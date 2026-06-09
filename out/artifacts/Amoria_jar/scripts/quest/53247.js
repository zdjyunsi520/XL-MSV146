var status = -1;

function end(mode, type, selection) {
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
	qm.sendNext("（这应该能让我们离开这个鬼地方……）");
    } else if (status == 1) {
	qm.sendPlayerToNpc("#b（我已经拿到了主钥匙。我还等什么？！我应该回去找#e伯克。）");
    } else if (status == 2) {
	qm.warp(552000022);
	qm.forceCompleteQuest(53247);
	qm.dispose();
    }
}