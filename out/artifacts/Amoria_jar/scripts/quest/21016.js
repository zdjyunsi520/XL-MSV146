var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("你还没准备好狩猎#o0100132#吗？只有在充分准备好的情况下才继续前进。没有充分准备就投入战斗是最糟糕的。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("我们继续你的基础训练吧？在接受之前，请确保你已正确装备了你的剑，并且你的技能和药水都方便取用。");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
