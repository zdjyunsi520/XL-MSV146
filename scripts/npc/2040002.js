var dh;
var entry = true;

function start() {
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.sendNext("我明白了。考虑到你将面对里面非常危险的怪物，这完全可以理解。如果你改变主意了，请来找我谈谈。我确实需要像你这样的人的帮助。");
	cm.dispose();
	return;
    } else if(mode == 0 && status == 2) {
	cm.sendNext("我明白了。请在你准备好接受这项任务时来找我。我建议你不要花太多时间，因为那只怪物可能会变成完全不同的样子。我们必须装作什么都不知道。");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if(cm.getQuestStatus(3230) == 1) {
	if(status == 0) {
	    cm.sendYesNo("嗯……我通过#b#p2040001##k听说了很多关于你的事。你给他弄了一堆#b#t4031093##k，好让他在工作中打发无聊。好吧……好的。里面有一只非常、非常危险的怪物。我想请你帮忙找到它。你愿意帮我吗？");
	} else if(status == 1) {
	    cm.sendNext("非常感谢。其实，#b#t4031093##k让你去拿#b#p2040001##k是为了测试你的能力，看看你能否应对这个挑战，所以不要把它当作随便的请求。我觉得像你这样的人能够很好地应对困难。");
	} else if(status == 2) {
	    cm.sendYesNo("不久前，一只来自异次元的怪物通过次元裂缝来到了这里，偷走了时钟的钟摆。它把自己藏在那个房间里，伪装成洋娃娃屋的样子。对我来说它们看起来都一样，所以没办法找到它。你愿意帮我们找到它吗？");
	    if (dh != null && dh.getProperty("noEntry").equals("true")) {
		entry = false;
	    }
	} else if(status == 3) {
	    cm.sendNext("好的！我会带你去一个房间，那里到处都是洋娃娃屋。其中一个看起来会和其他的略有不同。你的任务是找到它并打破它的门。但是，如果你打破了错误的洋娃娃屋，你会被立刻传送出来，所以请小心。");
	} else if(status == 4) {
	    cm.sendNextPrev("你在里面还会遇到怪物，它们因为那只异次元怪物而变得非常强大，你无法击败它们。请在时间限制内找到#b#t4031094##k，然后通知里面的#b#p2040028##k。让我们开始吧！");
	} else if(status == 5) {
	    if(dh == null || entry == false) {
		cm.sendPrev("一定有其他人正在里面寻找洋娃娃屋。很遗憾我一次只能让一个人进去，所以请排队等候。");
	    } else {
		cm.removeAll(4031093);
		dh.startInstance(cm.getChar());
	    }
	    cm.dispose();
	}
    } else if(cm.getQuestStatus(3230) == 2) {
	cm.sendNext("多亏了#h #，我们找回了#b#t4031094##k，并消灭了那只来自异次元的怪物。谢天谢地，从那以后我们再也没发现过类似的怪物。对你的帮助感激不尽。希望你在这里#m220000000#玩得愉快！");
	cm.dispose();
    } else {
	cm.sendOk("我们是守卫这个房间的玩具士兵，防止其他人进入。我无法告知你这项规定的原因。那么，失陪了，我正在工作。");
	cm.dispose();
    }
}