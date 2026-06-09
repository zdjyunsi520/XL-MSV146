var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("不，阿然...如果就这样把孩子留在这里，离开也没有意义。我知道这太过分了...但请重新考虑一下！");
	    qm.dispose();
	    return;
	}
	status--
    }
    if (status == 0) {
	qm.askAcceptDecline("等等，孩子呢？哦不，他一定被困在森林里了！我们需要在方舟离开前把孩子带回来！阿然...请去那里帮我找到孩子！我知道考虑到你受伤了这要求太过分了...但你是我们唯一的希望！");
    } else if (status == 1) {
	qm.forceStartQuest(21000, "..w?PGÄÊ."); // Idk what data lol..
	qm.forceStartQuest(21000, "..w?PGÄÊ."); // Twice, intended..
	qm.sendNext("#b孩子可能就在森林深处#k！我们必须在黑魔法师发现我们之前立刻出发，请快一点！");
    } else if (status == 1) {
	qm.sendNextPrev("现在最重要的是不要慌张，阿然。如果你想看看任务的进展，按#bQ键#k打开任务窗口。");
    } else if (status == 2) {
	qm.sendNextPrev("请把孩子从森林里救出来，阿然！我们不能再承受更多的人在黑魔法师手中伤亡了！");
    } else if (status == 3) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}