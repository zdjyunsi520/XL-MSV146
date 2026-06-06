var status = -1;

function start(mode, type, selection) {
	    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 3) {
	    qm.sendOk("...");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
	qm.sendNext("你问我为什么变成这个样子？我不想说，但既然你是我的主人，我猜我也瞒不住你……");
	} else if (status == 1) {
    qm.sendNextPrev("当你被困在冰中数百年的时候，我也被冻结了。那是一段漫长的与你的分离时光。就在那时，黑暗的种子在我心中被种下了。");
	} else if (status == 2) {
    qm.sendNextPrev("但自从你苏醒后，我以为黑暗已经消散了。我以为一切都会恢复如初，但我错了。");
	} else if (status == 3) {
		qm.sendAcceptDecline("求你了，战神。请阻止我陷入暴怒。只有你能控制我。我已经无力控制自己了。请不惜一切代价#r阻止我暴走");
	} else if (status == 4) {
		qm.warp(914020000);
		qm.spawnMonster(9001014, 1, 124, 86);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
		    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 1) {
	    qm.sendOk("...");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
	qm.sendNext("谢谢你，战神。如果不是你，我一定会暴走，天知道会发生什么。谢谢你。才怪！这只是你作为我主人的职责而已……");
	} else if (status == 1) {
	qm.sendYesNo("话说回来，我刚刚注意到你的等级已经达到了这么高。如果你能在我的暴怒状态下控制住我，我觉得你已经准备好掌握更多能力了。");
	} else if (status == 2) {
	qm.changeJob(2112);
	qm.gainItem(1142132, 1);
	qm.gainItem(1702475, 1);
    qm.gainSp(qm.getPlayer().getLevel() * 3 - 100 - 100 - 100);
    qm.forceCompleteQuest();	
	qm.sendNext("你的技能已经恢复了。这些技能沉睡了太久，你需要重新训练自己，但一旦完成训练，你就会恢复如初。");	
	}
	else if (status == 3) {
    qm.sendNext("哦，我还教了你枫叶英雄。这不是你过去拥有的技能之一，但说不定有一天会派上用场。");
	} else if (status == 4) {
	qm.sendNext("然而，尽管如此，你离恢复从前的自己还有很长的路要走。我听说你遗忘的技能以技能手册的形式散落在各处。如果你能找到并训练所有这些技能，你就能恢复从前的自己。");
    qm.dispose();	
	}
}