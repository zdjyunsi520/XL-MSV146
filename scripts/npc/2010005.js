/*
	Shuri the Tour Guide - Orbis (200000000)
*/

var pay = 2000;
var ticket = 4031134;
var msg;
var check;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("你一定有什么事情要处理。经过这么多的旅行和狩猎，你一定累了吧。去休息一下吧，如果你改变主意了，再来和我说话。");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("你听说过一个叫做#b#m110000000##k的海滩吗？那里有着壮观的海景，距离#m"+cm.getMapId()+"#有些远。我现在就可以带你去，只需#b"+pay+" 金币#k，或者如果你有#b#t"+ticket+"##k的话，就可以免费进去。\r\n\r\n#L0##b我付 "+pay+" 金币。#k#l\r\n#L1##b我有#t"+ticket+"##k#l\r\n#L2##b什么是#t"+ticket+"#?#k#l");
    } else if (status == 1) {
	if (selection == 0 || selection == 1) {
	    check = selection;
	    if (selection == 0) {
		msg = "你想支付#b"+pay+" 金币#k前往#m110000000#吗？";
	    } else if (selection == 1) {
		msg = "你有#b#t"+ticket+"##k吗？你可以用它直接前往#m110000000#。";
	    }
	    cm.sendYesNo(msg+"好的！！请注意，那里附近可能会有一些怪物，所以不要掉以轻心。好的，你现在想前往#m110000000#吗？");
	} else if (selection == 2) {
	    cm.sendNext("你一定对#b#t"+ticket+"##k很好奇吧。是吧，我能理解。#t"+ticket+"#是一种道具，只要你持有它，就可以免费前往#m110000000#。这是非常稀有的道具，连我们都得花钱购买，但不幸的是几周前的一个长周末我把它弄丢了。");
	    status = 3;
	}
    } else if (status == 2) {
	if (check == 0) {
	    if (cm.getMeso() < pay) {
		cm.sendOk("我想你的金币不够。有很多方法可以筹集资金，比如……卖掉你的装备……打倒怪物……完成任务……你懂的。");
		cm.safeDispose();
	    } else {
		cm.gainMeso(-pay);
		access = true;
	    }
	} else if (check == 1) {
	    if (!cm.haveItem(ticket)) {
		cm.sendOk("嗯，那么#b#t"+ticket+"##k到底在哪里呢？？你确定你有吗？请再仔细检查一下。");
		cm.safeDispose();
	    } else {
		access = true;
	    }
	}
	if (access == true) {
	    cm.saveLocation("FLORINA");
	    cm.warp(120030000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	cm.sendNext("你一定对#b#t"+ticket+"##k很好奇吧。是吧，我能理解。#t"+ticket+"#是一种道具，只要你持有它，就可以免费前往#m110000000#。这是非常稀有的道具，连我们都得花钱购买，但不幸的是几周前的一个长周末我把它弄丢了。");
    } else if (status == 4) {
	cm.sendPrev("我没有把它找回来，丢掉它的感觉真糟糕。希望有人捡到并把它放在了安全的地方。总之这就是我的故事，谁知道呢，也许你能捡到它并派上用场。如果你有任何问题，随时问我。");
    } else if (status == 5) {
	cm.dispose();
    }
}