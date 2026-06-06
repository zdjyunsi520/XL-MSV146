/*
	NPC Name: 		Kimu
	Description: 		Quest - Cygnus tutorial helper
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 3) {
	    qm.sendNext("哇哦，哇哦！你真的要拒绝我的提议吗？嗯，在我们的帮助下你可以#b更快升级#k，所以如果你改变主意就告诉我。即使你拒绝了任务，只要来跟我说话就可以再次接受任务。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("欢迎来到埃雷布！你是？哦，你是#b#h0##k！很高兴见到你。我一直在等你。你是来成为#p1101000#骑士的，对吧？我的名字是#p1102004#，目前受女皇之托，指导像你这样的初心者。");
    } else if (status == 1) {
	qm.sendNextPrev("如果你想正式成为#p1101000#骑士团的一员，你必须先去见女皇。她在岛的中心，由#p1101001#陪同。我和我的兄弟们想在你去之前，先与你分享一些在枫之谷世界中被视为#b基础知识#k的内容。可以吗？");
    } else if (status == 2) {
	qm.sendNextPrev("哦，让我提醒你这是一个任务。你可能已经注意到枫之谷世界中的NPC偶尔会向你请求各种帮助。这种帮助被称为#b任务#k。完成任务后你将获得奖励物品或经验值，所以我强烈建议你勤恳地完成枫之谷NPC的委托。");
    } else if (status == 3) {
	qm.askAcceptDecline("你想去见能告诉你关于狩猎知识的#b#p1102005##k吗？你可以沿着箭头向左走找到#p1102005#。");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.summonMsg(2);
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
	qm.sendNext("你就是#p1102004#派来的初心者？很高兴认识你！我是#p1102005#。我会把#p1102004#让我给你的奖励给你。记住，你可以按#bI键#k查看你的背包。红色药水帮助你恢复HP，蓝色药水帮助恢复MP。最好提前学会使用它们，这样在遇到危险时就能随时使用。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000020# 5 #t2000020# \r\n#i2000021# 5 #t2000021# 5 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15 经验值");
    } else if (status == 1) {
	qm.gainItem(2000020, 5);
	qm.gainItem(2000021, 5);
	qm.forceCompleteQuest();
	qm.gainExp(15);
	qm.summonMsg(3);
	qm.dispose();
    }
}