var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if ((status == 0 && mode == 0) || (status == 5 && mode == 1)) {
	cm.dispose();
	return;
    } else if (status <= 2 && mode == 0) {
	cm.sendNext("你一定是在这里有事情要办吧。走了这么远的路，打怪也累了吧。去休息一下\r\n吧，如果改变主意了，\r\n就来找我谈话。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendSimple("你听说过那个距离玩具城稍远、拥有壮观海景的#b弗洛丽娜海滩#k吗？我可以立刻带你去，只需要#b1200金币#k，或者如果你有#b弗洛丽娜海滩贵宾票#k的话，可以免费前往。\r\n\r\n#L0##b我付1200金币。#l\r\n#L1#我有弗洛丽娜海滩贵宾票。#l\r\n#L2#弗洛丽娜海滩贵宾票是什么？#k#l");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("你想付#b1200金币#k前往弗洛丽娜海滩？好的！请注意，你可能会在那附近遇到一些怪物，所以别掉以轻心。好了，你现在要前往弗洛丽娜海滩吗？");
	} else if (selection == 1) {
	    status = 2;
	    cm.sendYesNo("你有#b弗洛丽娜海滩贵宾票#k？有了它你可以随时前往弗洛丽娜海滩。好的！请注意，你可能会在那附近遇到一些怪物，所以别掉以轻心。好了，你现在要前往弗洛丽娜海滩吗？");
	} else if (selection == 2) {
	    status = 4;
	    cm.sendNext("你一定对#b弗洛丽娜海滩贵宾票#k很好奇。是的，我看得出来。弗洛丽娜海滩贵宾票是一种只要你持有它，就可以免费前往弗洛丽娜海滩的物品。它是如此稀有的物品，就连我们都得花钱购买，但不幸的是我在几周前的一个长假中把我的弄丢了。");
	}
    } else if (status == 2) {
	if (cm.getMeso() < 1200) {
	    cm.sendNext("我觉得你的金币不够。有很多方法可以攒钱，你知道的，比如……卖掉你的装备……打怪……做任务……你懂的。");
	    cm.dispose();
	} else {
	    cm.gainMeso(-1200);
	    cm.saveLocation("FLORINA");
	    cm.warp(120030000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	if (cm.haveItem(4031134)) {
	    cm.saveLocation("FLORINA");
	    cm.warp(120030000, 0);
	    cm.dispose();
	} else {
	    cm.sendNext("嗯……你确定你有#b弗洛丽娜海滩贵宾票#k吗？请仔细检查，因为我没有在你身上找到它。");
	    cm.dispose();
	}
    } else if (status == 4) {
	cm.sendNext("你一定对#b弗洛丽娜海滩贵宾票#k很好奇。是的，我看得出来。弗洛丽娜海滩贵宾票是一种只要你持有它，就可以免费前往弗洛丽娜海滩的物品。它是如此稀有的物品，就连我们都得花钱购买，但不幸的是我在几周前的一个长假中把我的弄丢了。");
    } else if (status == 5) {
	cm.sendPrev("我回来的时候没有带着它，那种失去它的感觉真糟糕。希望有人捡到了并放在了安全的地方。不管怎样，这就是我的故事，谁知道呢，也许你能捡到它并好好利用它。如果你有任何问题，尽管问。");
    }
}