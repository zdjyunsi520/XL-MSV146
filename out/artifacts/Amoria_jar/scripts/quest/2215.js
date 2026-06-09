var status = -1;

function start(mode, type, selection) {
 	if (!qm.canHold(4031894, 1)) {
	    qm.sendNext("请腾出一些空间。。");
	} else {
	    qm.gainItem(4031894, 1);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
 	if (!qm.canHold(4031894, 1)) {
	    qm.sendNext("请腾出一些空间。。");
	} else {
	    qm.gainItem(4031894, 1);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
