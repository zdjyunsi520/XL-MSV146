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
	    qm.sendNext("哦，你好" + qm.getPlayer().getName()+"做得好！");
	} else if (status == 1) {
	    qm.sendNextPrev("太棒了，你已经证明了自己的实力。");
	} else if (status == 2) {
	    qm.sendNext("去见#p1101000#并领取英雄的奖励吧！");
	} else if (status == 3) {
            qm.forceStartQuest();
            qm.gainItem(1142336,1);
            qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}