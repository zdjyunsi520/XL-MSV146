var status = -1;

function start(mode, type, selection) {
	qm.sendNext("你想要战锤？哈！你看起来一点都不强壮。差得远呢。如果你想要战锤，去西边狩猎#r#o9001012##k，找30个#b#t4032311##k来证明我错了！");
	qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		qm.sendNext("哈！你证明了自己的实力...你将得到你想要的；最好的战锤！");
	} else if (status == 1) {
	if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 30) * 3) {
	    qm.sendNext("你身上还有太多的#bSP#k。你不能就这样获得新称号。我强烈建议你把更多的SP用在一级和二级技能上。");
	    qm.dispose();
	    return;
	}
		qm.sendNextS("我的记忆正在恢复...", 2);
		qm.changeJob(2110);
		qm.gainItem(1142130, 1);
		qm.gainItem(4032311, -30);
		qm.forceCompleteQuest(21201);
		qm.forceCompleteQuest();
	} else if (status == 2) {
		qm.sendOk("哈哈！你已经得到了你想要的，现在离开吧！");
		qm.dispose();
	}
}