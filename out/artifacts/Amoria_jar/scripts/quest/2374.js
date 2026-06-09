var status = -1;
function end(mode, type, selection) {
	    qm.forceCompleteQuest();
	if (qm.getJob() == 431) {
	    qm.changeJob(432);
	    qm.gainItem(1132021,1);
	    qm.sendNext("你已经进阶了。");
	}
	qm.dispose();
}

function start(mode, type, selection) {
    qm.dispose();
}
