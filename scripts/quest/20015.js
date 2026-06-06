/*
	NPC Name: 		Cygnus
	Description: 		Quest - Encounter with the Young Queen
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你现在可能有些犹豫，但我能在你眼中看到无比的勇气。闭上眼睛，感受你内心深处的勇气和热情。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("你知道吗？枫之谷世界看起来可能很和平，但某些地区充满了黑暗势力。黑魔法师和那些想要复活黑魔法师的人正在威胁着枫之谷世界。");
    } else if (status == 1) {
	qm.sendNextPrev("我们不能坐视不管，任由敌人变得更强。我们自己的恐惧只会反过来困扰我们。");
    } else if (status == 2) {
	qm.askAcceptDecline("但我不会太担心。像你这样意志坚定的人一定能保护枫之谷世界免受危险，对吧？如果你有勇气志愿成为一名骑士，我知道我可以指望你。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142065# #t1142065# - 1");
    } else if (status == 3) {
	if (qm.getQuestStatus(20015) == 0) {
	    qm.gainItem(1142065, 1);
	    qm.forceCompleteQuest();
	}
	qm.sendNext("嘻嘻，我就知道你会这么说。但你知道你距离能为枫之谷世界而战还有很长的路要走，对吧？");
    } else if (status == 4) {
	qm.sendPrev("#p1101002#，我的军师，就站在我旁边，他会帮助你成为一名光荣的骑士。我期待着你的成长。拜托你了！");
	qm.safeDispose();
    }
}

function end(mode, type, selection) {
}