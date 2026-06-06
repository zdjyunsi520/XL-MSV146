var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("不不不！阿然要把我一个人留在这里！！..");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("啊。(颤抖) 我...在...这里...好...害怕。请带我去见雅典娜·皮尔斯！");
    } else if (status == 1) {
	if (qm.getQuestStatus(21001) == 0) {
	    qm.gainItem(4001271, 1);
	    qm.forceStartQuest(21001, null);
	}
	qm.warp(914000300, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("孩子呢？如果你把孩子带来了，把他交给我！");
	    qm.dispose();
	    return;
	} else if (status == 8) { // watching the introduction
	    if (qm.haveItem(4001271)) {
		qm.gainItem(4001271, -1);
	    }
	    qm.MovieClipIntroUI(true);
	    qm.forceCompleteQuest();
	    qm.warp(914090010, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("啊啊，你安全了！孩子呢？孩子在哪里？");
    } else if (status == 1) {
	qm.sendNext("..哦，谢天谢地..");
    } else if (status == 2) {
	qm.sendNextPrevS("马上上船！我们没有多少时间了！", 3);
    } else if (status == 3) {
	qm.sendNextPrev("是是是。我们没有多少时间了。我能感觉到黑魔法师的力量越来越近，我有一种感觉他已经发现了方舟！如果我们现在不走，就会被攻击！");
    } else if (status == 4) {
	qm.sendNextPrevS("现在就出发！", 3);
    } else if (status == 5) {
	qm.sendNextPrev("阿然！马上上船！我知道你想加入他们的战斗，但...太迟了！让你的朋友们去对付黑魔法师，你现在应该上船逃往维多利亚岛！");
    } else if (status == 6) {
	qm.sendNextPrevS("不，我不能那样做！", 3);
    } else if (status == 7) {
	qm.sendNextPrevS("雅典娜·皮尔斯，你照顾好这些人，然后前往维多利亚岛。我向你保证，我不会死的。我会很快在岛上与你会合。我最好去帮助我的朋友们，与黑魔法师决一死战！", 3);
    } else if (status == 8) {
	qm.sendYesNo("你想跳过动画吗？即使你跳过场景，游戏体验也不会受到影响。");
    } else if (status == 9) { // Not watching
	if (qm.haveItem(4001271)) {
	    qm.gainItem(4001271, -1);
	}
	qm.forceCompleteQuest();
	qm.warp(140090000, 0);
	qm.dispose();
    }
}