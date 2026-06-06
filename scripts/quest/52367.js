var status = -1;

function start(mode, type, selection) {
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
	qm.sendNext("你怎么还没去上学？你应该好好学习！");
    } else if (status == 1) {
	qm.sendNextPrev("我会出现在每个城镇。想去上学的话就来找我！");
    } else if (status == 2) {
	qm.sendNextPrev("今天来学校吧，我带你参观一下！");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.dispose();
    }
}

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
	qm.sendNext("听好了孩子。这所学校就像一个迷宫。教室乱七八糟的。你永远不知道穿过一扇门会到哪里。");
    } else if (status == 1) {
	qm.sendNextPrev("如果你想充分利用在这里的时间，就不断穿行教室来获得更多经验值，并提升你与天之四灵的好感度……当你遇到他们的时候。");
    } else if (status == 2) {
	qm.sendNextPrev("但不要太贪心。连续通过教室会变得越来越难！不过不用担心被击倒会损失经验值。学校的护士很厉害！");
    } else if (status == 3) {
	qm.sendNextPrev("提升你与天之四灵的好感度，我听说你可以从他们的储物柜里买东西。");
    } else if (status == 4) {
	qm.sendNextPrev("如果你到了屋顶，从左边的门出去就能回到这里。");
    } else if (status == 5) {
	qm.sendNextPrev("还有拿着这把钥匙，我帮你打开东门的锁。");
    } else if (status == 6) {
	if(qm.getPlayer().getLevel() <= 30) {
	qm.gainExp(15000 * 2);
	qm.gainItem(5252017, 1);
	qm.forceCompleteQuest();
	qm.dispose();
	}
	if(qm.getPlayer().getLevel() <= 70 && qm.getPlayer().getLevel() > 30) {
	qm.gainExp(30000 * 2);
	qm.gainItem(5252017, 1);
	qm.forceCompleteQuest();
	qm.dispose();
	}
	if(qm.getPlayer().getLevel() <= 120 && qm.getPlayer().getLevel() > 70) {
	qm.gainExp(60000 * 2);
	qm.gainItem(5252017, 1);
	qm.forceCompleteQuest();
	qm.dispose();
	}
	if(qm.getPlayer().getLevel() <= 200 && qm.getPlayer().getLevel() > 120) {
	qm.gainExp(120000 * 2);
	qm.gainItem(5252017, 1);
	qm.forceCompleteQuest();
	qm.dispose();
	}
	qm.dispose();
    }
}