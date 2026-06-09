/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("想好了再来找我吧。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 8) {
		cm.sendNext("所以你决定成为一名#r魔法师#k了？");
	    } else {
		cm.sendOk("再训练一段时间吧，然后我就可以指引你走上#r魔法师#k的道路。")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 200) { // MAGICIAN
		if (cm.getQuestStatus(100006) >= 1) {
		    cm.completeQuest(100008);
		    if (cm.getQuestStatus(100008) == 2) {
			status = 20;
			cm.sendNext("我看你做得很好。我允许你在漫长的旅途中迈出下一步。");
		    } else {
			if (!cm.haveItem(4031009)) {
			    cm.gainItem(4031009, 1);
			}
			cm.sendOk("去见#r职业教官#k吧。")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("你取得的进步令人惊叹。");
		}
	    } else if (cm.getQuestStatus(100100) == 1) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("好的，现在把这个带给#b罗贝拉#k。");
		} else {
		    cm.sendOk("嘿，#b#h0##k！我需要一枚#b黑色符咒#k。去找次元之门吧。");
		    cm.startQuest(100101);
		}
		cm.dispose();
	    } else {
		cm.sendOk("你做出了明智的选择。");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("这是一个重要且最终的选择。你将无法回头。");
    } else if (status == 2) {
	cm.sendYesNo("你想成为一名#r魔法师#k吗？");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 4, 20, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(200); // MAGICIAN
	}
	cm.gainItem(1372005, 1);
	cm.sendOk("就这样吧！现在出发吧，带着荣耀前进。");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("你可能准备好迈出下一步，成为#r火毒法师#k、#r冰雷法师#k或#r牧师#k了。");
    } else if (status == 12) {
	cm.askAcceptDecline("但首先我必须考验你的实力。你准备好了吗？");
    } else if (status == 13) {
	cm.startQuest(100006);
	cm.gainItem(4031009, 1);
	cm.sendOk("去魔法森林附近找#b职业教官#k吧。他会指引你的。");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("你想成为什么？#b\r\n#L0#火毒法师#l\r\n#L1#冰雷法师#l\r\n#L2#牧师#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "火毒法师";
	    job = 210; // FP
	} else if (selection == 1) {
	    jobName = "冰雷法师";
	    job = 220; // IL
	} else {
	    jobName = "Cleric";
	    job = 230; // CLERIC
	}
	cm.sendYesNo("你想成为一名#r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("就这样吧！现在出发吧，带着荣耀前进。");
	cm.dispose();
    }
}	
