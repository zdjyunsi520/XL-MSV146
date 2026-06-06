var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("各位长老仍深陷沉睡之中，" + qm.getPlayer().getName()+"!");
	} else if (status == 1) {
	    qm.sendNextPrev("请继续修炼，总有一天要去拯救他们……");
	} else if (status == 2) {
	    qm.sendNext("Mercedes...");
	} else if (status == 3) {
            qm.forceStartQuest();
            qm.changeJob(2310);
            qm.gainItem(1142337,1);
            qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}