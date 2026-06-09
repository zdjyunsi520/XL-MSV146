/* Author: Xterminator (Modified by RMZero213)
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("嘿，伙计~怎么样？哈哈！我是罗杰，可以教你们这些可爱的新手枫之谷玩家很多东西。");
	} else if (status == 1) {
	    qm.sendNextPrev("你问是谁让我这么做的？啊哈哈哈！\r\n我自己！我想这么做，就是想对这些新来的旅行者友善一些。");
	} else if (status == 2) {
	    qm.askAcceptDecline("所以.....让我来做点有趣的事吧！天灵灵地灵灵~！");
	} else if (status == 3) {
	    if (qm.getPlayerStat("HP") >= 50) {
//		qm.getPlayer().setHp(25);
//		qm.getPlayer().updateSingleStat(client.MapleStat.HP, 25);
	    }
	    if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
	    }
	    qm.sendNext("惊讶吗？如果HP变成0的话，你就麻烦了。现在，我给你#r罗杰的苹果#k。请收下它。你会感到更强壮的。打开物品栏，双击使用。嘿，打开物品栏很简单的。只要按键盘上的#bI键#k就行了。");
	} else if (status == 4) {
	    qm.sendPrev("请把我给你的罗杰的苹果全部吃掉。你会看到HP条在增加。等你的HP恢复到100%时再跟我说话。");
	} else if (status == 5) {
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    if (qm.getPlayerStat("HP") < 50) {
		qm.sendNext("嘿，你的HP还没有完全恢复呢。你有没有把我给你的罗杰的苹果全部吃掉？你确定吗？");
		qm.dispose();
	    } else {
		qm.sendNext("消耗物品是不是很简单？对吧？你可以在右下角的槽位设置#b快捷键#k。哈哈你不知道吧？哦，如果你是新手，HP会随着时间自动恢复。虽然需要一些时间，但这是新手的生存策略之一。");
	    }
	} else if (status == 1) {
	    qm.sendNextPrev("好了！既然你已经学了很多，我就送你一个礼物。这在枫之谷世界旅行中是必不可少的，所以要感谢我哦！请在紧急情况下使用！");
	} else if (status == 2) {
	    qm.sendNextPrev("好的，这就是我能教你的全部了。我知道很伤感，但到了说再见的时候了。好好照顾自己，祝你好运，朋友！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 经验值");
	} else if (status == 3) {
	    qm.gainExp(10);
	    qm.gainItem(2010000, 3);
	    qm.gainItem(2010009, 3);
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}