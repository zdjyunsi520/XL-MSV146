var status = -1;
function end(mode, type, selection) {
	if (qm.getJob() == 430) {
	    qm.changeJob(431);

	    qm.sendNext("你已经进阶了。");
	}
	    qm.forceCompleteQuest();
	qm.dispose();
}

function start(mode, type, selection) {
    qm.dispose();
}
