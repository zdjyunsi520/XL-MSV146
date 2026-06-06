var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("哦，5只不够吗？如果你觉得需要更多训练，请随意多打一些。如果你把它们全部打完了，我也只能视而不见，即使我很心疼，因为它们将是为了正义的事业而牺牲...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("现在，你将接受一项测试来决定你是否合格。你所要做的就是对抗这个岛上最强大的怪物——#o0100134#。大约#r50只#k就够了，但是...");
    } else if (status == 1) {
	qm.askAcceptDecline("我们不能让你把#o0100134#全部消灭，因为它们的数量本来就不多。5只怎么样？你是来训练的，不是来破坏生态系统的。");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
