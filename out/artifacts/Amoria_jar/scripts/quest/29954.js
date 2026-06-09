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
	    qm.sendNext(qm.getPlayer().getName()+"，你看起来变强了很多！");
	} else if (status == 1) {
	    qm.sendNextPrev("然而……这还不够。黑魔法师的影响至今仍在。");
	} else if (status == 2) {
	    qm.sendNext("……梅赛德斯……");
	} else if (status == 3) {
            qm.forceStartQuest();
            qm.changeJob(2311);
            qm.gainItem(1142338,1);
            qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}