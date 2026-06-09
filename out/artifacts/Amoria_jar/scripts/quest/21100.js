var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.sendNext("哦，5只不够吗？如果你觉得需要更多训练，请随意多打一些。如果你把它们全部打完了，我也只能视而不见，即使我很心疼，因为它们将是为了正义的事业而牺牲...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("关于对抗黑魔法师的英雄们留下的记录已经不多了。即使在预言书中，唯一的信息也只有五位英雄。没有关于他们是谁或长什么样的记载。你记得什么吗？任何事情都行？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("我什么都不记得了...", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("果然如此。当然，黑魔法师的诅咒强大到足以抹去你所有的记忆。但即使如此，你的过去一定会有某个时刻被揭开，特别是现在我们确定你就是英雄之一。我知道你在战斗中失去了你的盔甲和武器，但是...哦，对了对了。我差点忘了！你的#b武器#k！", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("我的武器？", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("我之前在挖掘冰块时发现了一把不可思议的武器。我认为这把武器属于一位英雄，所以我把它带到了镇上，放在了镇中心。你没见过吗？#b那把#p1201001##k...\r\r#i4032372#\r\r它看起来像这样...", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("说起来，我确实在镇上见过一把#p1201001#。", 2);
    } else if (status == 6) {
	qm.askAcceptDecline("是的，就是那个。根据记载，英雄的武器会认出它真正的主人，如果你是使用#p1201001#的英雄，当你握住#p1201001#时，它会做出反应。请去找那把#b#p1201001#并点击它。#k");
    } else if (status == 7) {
	if (qm.getQuestStatus(21100) == 0) {
	    qm.forceCompleteQuest();
	}
	qm.sendOkS("如果#p1201001#对你做出了反应，我们就知道你是#b阿然#k，使用#p1201001#的英雄。", 8);
	qm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickPoleArm");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
