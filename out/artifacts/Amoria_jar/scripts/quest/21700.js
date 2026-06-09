var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 4) {
	    qm.sendNext("不要？你是说你可以自己训练？我只是告诉你，如果跟着教官一起训练效果会更好。你不能独自一人生活在这个世界上。你必须学会与他人相处。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("看来你开始记起一些东西了。你的战戟一定认出了你。这意味着你肯定是#b战神，战戟的使用者#k。你还记得什么吗？也许是用战戟使用的技能？什么都可以？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告诉她你记起了一些技能。)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("虽然不多，但这是进步。那么我们的重点应该是让你恢复到被冰封之前的状态。你虽然失去了记忆，但我相信要恢复你身体记住的能力不会花太长时间。", 8);
    } else if (status == 3) {
	qm.sendNextPrevS('How do I recover my abilities?', 2);
    } else if (status == 4) {
	qm.askAcceptDecline("只有一种方法可以做到。训练！训练！训练！再训练！如果你持续训练，你的身体会本能地记住它的能力。为了帮助你完成这个过程，我给你介绍一位教官。");
    } else if (status == 5) {
	qm.forceStartQuest();
	qm.sendNext("我给了你一把#b战戟#k，因为我觉得使用你熟悉的武器是最好的。它在你的训练中会很有用。");
    } else if (status == 6) {
	qm.sendPrev("如果你往#b左边#k出口走，你会发现一个训练中心。在那里你会见到#b#p1202006##k。我有点担心，因为我觉得他可能在和老年痴呆症作斗争，但他花了很长时间研究能帮助你的技能。我相信你一定能从他那里学到一些东西。");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}