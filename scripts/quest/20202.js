/*
 * Cygnus 2nd Job advancement - Proof of test
 * Flame Wizard
 */

var status = -1;

function start(mode, type, selection) {
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("我猜你还没准备好承担正式骑士的责任。");
	    qm.dispose();
	    return;
	} else if (status >= 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }
    if (status == 0) {
	if (qm.getQuestStatus(20202) == 0) {
	    qm.forceStartQuest();
	    qm.dispose();
	} else {
	    if (qm.haveItem(4032097, 30)) {
		qm.sendYesNo("你带来了所有的测试证明...好的，我认为你现在有资格成为一名正式骑士了。你想成为吗？");
	    } else {
		qm.dispose(); // Hack
	    }
	}
    } else if (status == 1) {
	if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 30) * 3) {
	    qm.sendOk("嗯...你有太多的#bSP#k了。你不能带着这么多SP进行转职。");
	    qm.safeDispose();
	    return;
	}
	if (!qm.canHold(1142067)) {
	    qm.sendOk("你的背包已满，请检查。");
	    qm.dispose();
	} else {
	    qm.forceCompleteQuest();
	    if (qm.getJob() != 1210) {
		qm.changeJob(1210); // Flame Wizard
		qm.gainItem(4032097, -30);
		qm.gainItem(1142067, 1);
	    }
	    qm.sendNext("见习骑士的训练结束了。你现在是骑士团的正式骑士了。");
	}
    } else if (status == 2) {
	qm.sendNextPrev("我给了你一些#bSP#k。我还给了你一些只有骑士才能使用的魂骑士技能，我希望你努力修炼，尽可能地培养你的灵魂。");
    } else if (status == 3) {
	qm.sendPrev("既然你已经是骑士团的正式骑士了，就好好表现吧，维护骑士团的荣耀。");
	qm.dispose();
    }
}