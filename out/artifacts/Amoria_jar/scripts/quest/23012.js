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
	qm.sendYesNo("你做出决定了吗？这个决定是最终的，所以在做决定之前请仔细考虑。你确定要成为狂豹猎人吗？");
    } else if (status == 1) {
	qm.sendNext("我已经塑造了你的身体，使其完美适合狂豹猎人。如果你想变得更强大，使用属性窗口(S)来提升相应的属性。如果你不确定该提升什么，只需点击#b自动#k。");
	if (qm.getJob() == 3000) {
	    qm.gainItem(1462092,1);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(3300);
	    qm.teachSkill(30001061, 1, 0);
	    qm.teachSkill(30001062, 1, 0);
	    qm.getPlayer().fakeRelog();
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("我还扩展了你的装备栏和其他物品栏的格子数量。明智地使用这些格子，将反抗者需要携带的物品装满它们。");
    } else if (status == 3) {
	qm.sendNextPrev("现在……我希望你走出去向世界展示反抗者是如何行动的。");
	qm.safeDispose();
    }
}