var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("#b(你需要考虑一下...)#k");
	    qm.dispose();
	    return;
	} else if (status == 2) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090100, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("#b(你确定你是使用#p1201001#的英雄吗？是的，你确定。你最好紧紧握住#p1201001#。它一定会对你做出反应的。)#k");
    } else if (status == 1) {
	if (qm.getJob() == 2000) {
	    qm.changeJob(2100);
	    qm.forceCompleteQuest();
	    qm.resetStats(35, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(3, 4);
	    qm.expandInventory(4, 4);
	    qm.gainItem(1142129, 1);
	    qm.forceCompleteQuest(29924); //medal
	    qm.teachSkill(20009000, 0, -1);
	    qm.teachSkill(20009000, 1, 0);
	    qm.sendNextS("#b(我感觉脑海中有什么东西浮现出来...)#k", 3);
	}
    } else if (status == 2) {
	qm.sendYesNoS("你想跳过动画吗？即使你跳过场景，游戏体验也不会受到影响。", 1);
    } else if (status == 3) {
	qm.warp(140000000, 0)
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
