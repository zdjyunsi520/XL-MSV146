var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你在犹豫什么？你是英雄！你得趁热打铁！来吧，开始吧！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("好了，我的解释已经够了。让我们进入下一阶段。你问下一阶段是什么？我刚说了。努力训练，直到你变得强大到能一击打败黑魔法师。");
    } else if (status == 1) {
	qm.sendNextPrev("你过去可能是一名英雄，但那是几百年前的事了。即使不是因为黑魔法师的诅咒，那些被冰封的岁月也让你的身体变得僵硬了。你必须慢慢放松并恢复你的敏捷。怎么做呢？");
    } else if (status == 2) {
	qm.askAcceptDecline("你难道不知道必须先掌握基本功吗？所以明智的做法是从#b基础训练#k开始。哦，当然，我忘了你失忆了。这就是为什么我在这里。你必须亲身体验。我们开始吧？");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
