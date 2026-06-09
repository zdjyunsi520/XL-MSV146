/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Mark the Toy Soldier - Doll's House(922000010)
-- By ---------------------------------------------------------------------------------------------
	Information
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Information
---------------------------------------------------------------------------------------------------
**/

var havePendulum = false;
var complete = false;
var inQuest = false;

function start() {
    if(cm.getQuestStatus(3230) == 1) {
	inQuest = true;
    } else {
	inQuest = false;
    }
    dh = cm.getEventManager("DollHouse");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    } else if(mode == 0 && status == 1) {
	cm.sendNext("我就知道你会留下。完成你已经开始的事情很重要！现在请去找到那个看起来不一样的洋娃娃屋，打破它，然后把#b#t4031094##k带给我！");
	cm.dispose();
	return;
    }
    if(mode == 1) {
	status++;
    } else {
	status--;
    }
    if(inQuest == true) {
	if(status == 0) {
	    if(cm.haveItem(4031094)) {
		cm.sendNext("哇，你真的找到了那个不同的洋娃娃屋，并且拿到了#b#t4031094##k！太厉害了！有了这个，玩具城钟塔又可以运转了！感谢你的努力，这里有一些小奖励。不过在那之前，请检查一下你的背包是否已满。");
		havePendulum = true;
	    } else {
		cm.sendSimple("你好。我是#b#p2040028##k，负责守护这个房间。在里面你会看到许多洋娃娃屋，其中有一个看起来会和其他的略有不同。你的任务是找到它，打破它的门，找到#b#t4031094##k，这是玩具城钟塔的重要组成部分。你有时间限制，如果打破了错误的洋娃娃屋，你将被强制送出，所以请小心。\r\n#L0##b我想离开这里。#k#l");
	    }
	} else if(status == 1) {
	    if(havePendulum == true) {
		if(!cm.canHold(2000010)) {
		    cm.sendNext("你无法持有该物品？？？");
		}
		cm.sendNextPrev("怎么样？你喜欢我给你的#b100个#t2000010##k吗？非常感谢你的帮助。多亏了你的英勇行为，钟塔又可以运转了，来自异次元的怪物似乎也消失了。我现在放你出去。再见！");
		if(complete == false) {
		    cm.completeQuest(3230);
		    cm.gainExp(2400);
		    cm.gainItem(4031094, -1);
		    cm.gainItem(2000010, 100);
		    complete = true;
		}
	    } else {
		cm.sendYesNo("你确定现在要放弃吗？好的……但请记住，下次你再来这里时，洋娃娃屋的位置会改变，你必须重新仔细检查每一个。你觉得呢？你仍然想离开这里吗？");
	    }
	} else if(status == 2) {
	    cm.getPlayer().getEventInstance().removePlayer(cm.getChar());
	    cm.dispose();
	}
    } else {
	if(status == 0) {
	    cm.sendNext("什么……我们一直禁止人们进入这个房间，因为有一只来自异次元的怪物藏在这里。我不知道你是怎么进来的，但我必须请你立即离开，因为待在这个房间里很危险。");
	} else if(status == 1) {
	    cm.warp(221023200, 4);
	    cm.dispose();
	}
    }
}