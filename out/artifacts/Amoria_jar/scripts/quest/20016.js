/*
	NPC Name: 		Nineheart
	Description: 		Quest - Do you know the black Magician?
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 8) {
	    qm.sendNext("哦，你还有什么问题吗？再来找我，我会从头开始给你解释。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("你好，#h0#。欢迎加入#p1101000#骑士团。我的名字是#p1101002#，目前担任年轻女皇的军师。我们最好互相熟悉一下，因为我们以后会经常见面。哈哈！");
    } else if (status == 1) {
	qm.sendNextPrev("我猜你有很多问题，因为一切发生得太快了。我会一一为你解释，从你现在的位置到你来这里要做什么。");
    } else if (status == 2) {
	qm.sendNextPrev("这座岛屿叫做埃雷布。多亏了女皇的魔法，这座岛屿通常像一艘空中的船一样漂浮着，在枫之谷世界周围巡逻。不过，我们现在停在这里是有原因的。");
    } else if (status == 3) {
	qm.sendNextPrev("年轻的女皇是枫之谷世界的统治者。什么？你是第一次听说她？啊，是的。嗯，她是枫之谷世界的统治者，但她不喜欢控制它。她在远处观察，确保一切安好。至少这是她通常的角色。");
    } else if (status == 4) {
	qm.sendNextPrev("但现在情况不同了。我们在整个枫之谷世界都发现了预示着黑魔法师复活的迹象。我们不能让黑魔法师像过去那样回来恐吓枫之谷世界！");
    } else if (status == 5) {
	qm.sendNextPrev("但那已经是很久以前的事了，如今的人们没有意识到黑魔法师有多可怕。我们都已经被如今和平的枫之谷世界惯坏了，忘记了枫之谷世界曾经是多么混乱和可怕。如果我们不采取行动，黑魔法师将再次统治枫之谷世界！");
    } else if (status == 6) {
	qm.sendNextPrev("这就是为什么年轻的女皇决定亲自采取行动。她正在组建一支由勇敢的冒险者组成的骑士团，一劳永逸地击败黑魔法师。你知道你需要做什么，对吧？我相信你有想法，因为你自己也报名成为了骑士。");
    } else if (status == 7) {
	qm.sendNextPrev("我们必须变得更强，这样如果黑魔法师复活，我们就能击败他。我们的首要目标是阻止他毁灭枫之谷世界，而你将在其中扮演重要角色。");
    } else if (status == 8) {
	qm.askAcceptDecline("我的解释到此结束。我回答了你所有的问题吗？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 380 经验值");
    } else if (status == 9) {
	if (qm.getQuestStatus(20016) == 0) {
	    qm.gainExp(380);
	    qm.forceCompleteQuest();
	}
	qm.sendNext("我很高兴你清楚了我们目前的处境，但你知道吗，以你现在的等级，你甚至不够强大去面对黑魔法师的手下，更不用说黑魔法师本人了。事实上连他手下的手下都不够。以你现在的等级，你怎么保护枫之谷世界呢？");
    } else if (status == 10) {
	qm.sendNextPrev("虽然你已经被骑士团接纳了，但你还不能被认定为骑士。你还不是见习骑士，所以不是正式骑士。如果你停留在现在的等级，你只不过是#p1101000#骑士团的杂工而已。");
    } else if (status == 11) {
	qm.sendNextPrev("但没有人从第一天起就是强大的骑士。女皇不需要强大的人。她需要有勇气的人，可以通过严格训练培养成强大骑士的人。所以，你应该先成为一名见习骑士。等你达到那个阶段我们再来谈你的任务。");
    } else if (status == 12) {
	qm.sendPrev("从左边的传送口进入训练森林。在那里你会找到#p1102000#训练教官，他会教你如何变强。我可不想看到你漫无目的地闲逛直到10级，听明白了吗？");
	qm.safeDispose();
    }
}

function end(mode, type, selection) {
}