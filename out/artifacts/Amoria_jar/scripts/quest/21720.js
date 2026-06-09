var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("有什么我能帮你的吗？特鲁给我发消息说你在维多利亚岛一边勤奋训练一边帮他工作。怎么了？什么？黑色之翼？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告诉她关于傀儡师和黑色之翼的事情，以及他们的使命。)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("原来如此……我不知道有一个叫黑色之翼的组织……如果他们知道黑魔法师有多危险还要试图复活他，那他们一定是傻瓜。", 8);
    } else if (status == 3) {
	qm.sendNextPrevS("那……那倒是……\r\r#b(她确实说话直来直去的。)#k", 2);
    } else if (status == 4) {
	qm.sendNextPrevS("预言书上说英雄将会复活并与黑魔法师战斗。我之前不确定那是否是真的，但这证实了黑魔法师仍然存在。", 8);
    } else if (status == 5) {
	qm.sendNextPrevS("你不害怕吗？", 2);
    } else if (status == 6) {
	qm.sendYesNo("害怕？切。谁在乎黑魔法师是否出现。你会在这里保护我们的。如果说有什么的话，这反而让我想为大战做好准备来武装你。啊，这倒提醒了我，我找到了一个#b技能#k。你想看看吗？");
    } else if (status == 7) {
	if (qm.getQuestStatus(21720) == 0) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	    qm.gainExp(3900);
	}
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
	qm.sendNextS('#b(You remembered the Polearm Booster skill!)#k', 2);
    } else if (status == 8) {
	qm.sendNextPrevS("这个技能是在一份古老且难以理解的文献中发现的。我有种预感这可能是你过去使用过的技能，我想我是对的。你虽然不如以前那么强大，但随着时间的推移，你会恢复的。", 8);
    } else if (status == 9) {
	qm.sendNextPrevS("你正在稳步变强，而我会在这里继续激励你。你没什么好怕的。你不会输掉这场战斗。你从冰中苏醒不是为了输给黑魔法师的对吧？这一次，你要彻底终结他！", 8);
    } else if (status == 10) {
	qm.sendPrevS("要做到这一点，你只有一条路可以走。训练、训练、再训练。前往维多利亚岛继续训练。让我们确保你变得如此强大，让黑魔法师毫无胜算！", 8);
    } else if (status == 11) {
	qm.dispose();
    }
}