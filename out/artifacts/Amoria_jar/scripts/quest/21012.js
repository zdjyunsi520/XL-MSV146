var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("嗯...你不觉得那会有帮助吗？想想看。它可能有帮助的，你知道...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("欢迎英雄！什么？你想知道我是怎么知道你是谁的？很简单。我偷听了一些在我旁边大声说话的人。我敢说谣言已经传遍了整个岛。大家都知道你回来了！");
    } else if (status == 1) {
	qm.sendNextPrev("不管怎样，为什么愁眉苦脸的？有什么不对吗？嗯？你不确定自己是否真的是英雄？你失忆了？！不会吧...一定是因为你被困在冰里几百年造成的。");
    } else if (status == 2) {
	qm.askAcceptDecline("嗯，不如你试试那把剑？说不定能唤起一些回忆呢？不如去#b打打怪物#k？");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNext("恰好这附近有很多#r#o9300383##k。不如就打败#r3只#k？也许能帮你想起一些事情。");
    } else if (status == 4) {
	qm.sendNextPrevS("啊，你也忘了怎么使用技能了？#b把技能放到快捷栏方便使用。#k你也可以把消耗品放到快捷栏中，好好利用这些栏位。", 1);
    } else if (status == 5) {
	qm.summonMsg(17);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("什么？你不要药水？");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("嗯...你的表情告诉我锻炼并没有唤起什么回忆。但别担心。它们会回来的，最终会回来的。来，喝下这瓶药水变强吧！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i2000022# 10 #t2000022# \r\n#i2000023# 10 #t2000023# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 57 经验值");
    } else if (status == 1) {
	qm.gainItem(2000022, 10);
	qm.gainItem(2000023, 10);
	qm.gainExp(57);
	qm.forceCompleteQuest();
	qm.sendOkS("#b(即使你真的是大家说的英雄...没有技能你又有什么用呢？)#k", 2);
	qm.dispose();
    }
}