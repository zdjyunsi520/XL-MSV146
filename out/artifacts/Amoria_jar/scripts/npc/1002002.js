/* Author: Xterminator
	NPC Name: 		Pison
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Florina Beach Tour Guide
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.sendNext("你一定在这里有什么事情要办吧。旅行和打猎一定让你很累了吧。去休息一下吧，如果你改变主意了，再来找我。");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("你听说过在里本港附近有一个海景壮丽的海滩叫做#b弗洛里纳海滩#k吗？我现在就可以带你去，只需#b1500金币#k，或者如果你有#b弗洛里纳海滩VIP券#k的话，就可以免费过去。\r\n\r\n#L0##b 我付1500金币。#l\r\n#L1# 我有弗洛里纳海滩VIP券。#l\r\n#L2# 弗洛里纳海滩VIP券是什么？#k#l");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("所以你想支付#b1500金币#k前往弗洛里纳海滩？好的，不过请注意那里也可能会遇到怪物。那么，你现在想前往弗洛里纳海滩吗？");
	} else if (selection == 1) {
	    status = 2;
	    cm.sendYesNo("你有#b弗洛里纳海滩VIP券#k？有了它你随时都可以前往弗洛里纳海滩。好的，不过请注意那里也可能会遇到怪物。那么，你现在想前往弗洛里纳海滩吗？");
	} else if (selection == 2) {
	    status = 4;
	    cm.sendNext("你一定对#b弗洛里纳海滩VIP券#k很好奇吧。哈哈，这完全可以理解。弗洛里纳海滩VIP券是一种物品，只要你拥有它，就可以免费前往弗洛里纳海滩。它是非常稀有的物品，就连我们都得花钱购买，可惜我在暑假期间把它弄丢了。");
	}
    } else if (status == 2) {
	if (cm.getMeso() < 1500) {
	    cm.sendNext("我觉得你的金币不够。有很多方法可以攒钱的，比如……卖掉装备……打倒怪物……做任务……你懂我在说什么吧。");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-1500);
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
	    cm.sendNext("嗯，你的#b弗洛里纳海滩\r\nVIP券#k到底在哪里呢？你确定你有吗？请再仔细检查一下。");
	    cm.safeDispose();
	}
    } else if (status == 4) {
	cm.sendNext("你一定对#b弗洛里纳海滩VIP券#k很好奇吧。哈哈，这完全可以理解。弗洛里纳海滩VIP券是一种物品，只要你拥有它，就可以免费前往弗洛里纳海滩。它是非常稀有的物品，就连我们都得花钱购买，可惜我在暑假期间把它弄丢了。");
    } else if (status == 5) {
	cm.sendNextPrev("我没带它就回来了，没有它的感觉真糟糕。希望有人捡到它并放好了。总之，这就是我的故事，谁知道呢，也许你能捡到它并好好利用。如果你有任何问题，尽管问吧。");
    } else if (status == 6) {
	cm.dispose();
    }
}