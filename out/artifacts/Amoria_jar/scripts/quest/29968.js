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
			qm.sendNext("哦，你好" + qm.getPlayer().getName()+"你好！");
		} else if (status == 1) {
			qm.sendNextPrev("太棒了，你已经证明了自己的实力。不过前方的路还很长");
		} else if (status == 2) {
			qm.sendNextPrev("准备好完成你的任务吧！");
		} else if (status == 3) {
			qm.sendNext("请稍等一下……");
		} else if (status == 4) {
				qm.changeJob(2410);
				qm.forceStartQuest();
				qm.gainItem(1142376,1);
				qm.dispose();
		}
    }
}

function end(mode, type, selection) {
}