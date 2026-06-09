/*
	NPC Name: 		Kisan
	Description: 		Quest - Cygnus tutorial helper
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你不想做吗？这其实不难，而且你会获得特殊装备作为奖励！好好想想，如果你改变主意就告诉我。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("狩猎有很多种方法，但最基本的方式是使用你的#b普通攻击#k。你只需要手拿武器，然后简单地挥动武器攻击怪物就行。");
    } else if (status == 1) {
	qm.sendNextPrev("按#bC键#k使用普通攻击。通常C键位于#b键盘左下角#k，但你不需要我来告诉你这个，对吧？找到C键试试看！");
    } else if (status == 2) {
	qm.askAcceptDecline("既然你已经试过了，我们来测试一下。在这个区域，你可以找到埃雷布最弱的#r#o100120##k，对你来说再完美不过了。试试狩猎#r1只#k。回来后我会给你奖励。");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.summonMsg(4);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("啊，看来你已经成功狩猎了#o100120#。很简单吧？普通攻击虽然容易使用，但威力比较弱。不过别担心。#p1102006#会教你如何使用更强大的技能。等等，在你走之前让我先给你应得的任务奖励。");
    } else if (status == 1) {
	qm.sendNextPrev("这件装备是给初心者的。比你现在穿的要酷多了，对吧？沿着箭头向左走去见我的弟弟#b#p1102006##k。你不如先换上你的新初心者服装再走吧？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1002869# #t1002869# - 1 \r\n#i1052177# #t1052177# - 1 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30 经验值");
    } else if (status == 2) {
	qm.gainItem(1002869, 1);
	qm.gainItem(1052177, 1);
	qm.forceCompleteQuest();
	qm.gainExp(30);
	qm.summonMsg(6);
	qm.dispose();
    }
}