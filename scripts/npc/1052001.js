/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("你知道没有其他选择……");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
 	if (cm.getJob() >= 400 && cm.getJob() <= 434 && cm.getQuestStatus(2351) == 1) {
	    cm.forceCompleteQuest(2351);
	    cm.gainItem(1032076,1); //owl earring
	}
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0)
		cm.sendNext("所以你决定成为一名#r飞侠#k了？");
	    else {
		cm.sendOk("再训练一段时间吧，然后我就可以指引你走上#r飞侠#k的道路。")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400 && cm.getPlayer().getSubcategory() == 0) {
		if (cm.getQuestStatus(100009) >= 1) {
		    cm.completeQuest(100011);
		    if (cm.getQuestStatus(100011) == 2) {
			status = 20;
			cm.sendNext("我看你做得很好。我允许你在漫长的旅途中迈出下一步。");
		    } else {
			if (!cm.haveItem(4031011)) {
			    cm.gainItem(4031011, 1);
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
		    cm.sendOk("好的，现在把这个带给#b阿雷克#k。");
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
	cm.sendYesNo("你想成为一名#r飞侠#k吗？");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 25, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(400); // THIEF
 	    if (cm.getQuestStatus(2351) == 1) {
		cm.forceCompleteQuest(2351);
		cm.gainItem(1032076,1); //owl earring
	    }
	}
	cm.gainItem(1332063,1);
	cm.gainItem(1472000,1);
	cm.gainItem(2070015, 500);
	cm.sendNext("就这样吧！现在出发吧，带着荣耀前进。");
	cm.fakeRelog();
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("你可能准备好迈出下一步，成为#r刺客#k或#r侠客#k了。");
    } else if (status == 12) {
	cm.askAcceptDecline("但首先我必须考验你的实力。你准备好了吗？");
    } else if (status == 13) {
	cm.startQuest(100009);
	cm.gainItem(4031011, 1);
	cm.sendOk("去城里某处找#b职业教官#k吧。他会指引你的。");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("你想成为什么？#b\r\n#L0#刺客#l\r\n#L1#侠客#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "Assassin";
	    job = 410; // ASSASIN
	} else {
	    jobName = "Bandit";
	    job = 420; // BANDIT
	}
	cm.sendYesNo("你想成为一名#r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("就这样吧！现在出发吧，我的仆从。");
	cm.dispose();
    }
}	
