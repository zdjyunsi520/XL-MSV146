var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("哦，战神，你醒了！伤势怎么样？……什么？你想知道现在发生了什么吗？");
	} else if (status == 1) {
	    cm.sendNextPrev("我们一切准备就绪，随时可以离开这里。所有人都已经上了方舟，神兽提出在飞行途中保护我们的方舟，所以你什么都不用担心。一旦一切就绪，我们就会前往维多利亚岛。");
	} else if (status == 2) {
	    cm.sendNextPrev("战神的伙伴们……？嗯……他们去和黑魔法师战斗了。他们决定在我们逃跑的同时去对抗黑魔法师。什么？你也想加入战斗？不，不行！你受伤了！你应该立刻登船！");
	} else if (status == 3) {
	    cm.forceStartQuest(21002, "1");
	    // Ahh, Oh No. The kid is missing
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendSimple("我们正处于紧急状态。你想知道什么？\r #b#L0#黑魔法师在哪里？#l \r #b#L1#逃跑准备得怎么样了？#l \r #b#L2#伙伴们呢？#l");
	} else if (status == 1) {
	    switch (selection) {
		case 0:
		    cm.sendOk("我听说黑魔法师就在我们附近。因为黑魔法师控制的龙，我们甚至无法穿过森林逃生。所以我们想出了用方舟逃走的方案。离开这里的唯一方法就是飞向维多利亚岛。");
		    break;
		case 1:
		    cm.sendOk("我们所有人都已经登上方舟，准备就绪逃离此地。我们只需要再多几个人上船，就可以出发前往维多利亚岛了。在飞行途中，神鸟提供了保护，因为她目前在艾琳已经没有需要守护的人了。");
		    break;
		case 2:
		    cm.sendOk("你的战友们……留在这里独自对抗黑魔法师，为我们争取逃跑的时间。他们决定不带你一起去，因为你受了伤。一旦我们救出那个孩子，你就应该上船和我们一起离开，阿兰！");
		    break;
	    }
	    cm.safeDispose();
	}
    }
}