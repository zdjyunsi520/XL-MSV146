/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131 || cm.getJob() == 2111)) {
	    cm.sendOk("你为什么要见我？你没有什么想问我的。");
	    cm.dispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("你还太弱，不能走上战士的极限之路。等你变强了再来找我吧。");
	    cm.dispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6904) == 2 || cm.getJob() == 2111) {
		if (cm.getJob() == 111)
		    cm.sendSimple("你有资格成为一名真正的战士。\r\n你想要转职吗？\r\n#b#L0# 我想转职为英雄。#l\r\n#b#L1# 让我再想想。#l");
		else if (cm.getJob() == 121)
		    cm.sendSimple("你有资格成为一名真正的战士。\r\n你想要转职吗？\r\n#b#L0# 我想转职为圣骑士。#l\r\n#b#L1# 让我再想想。#l");
		else if (cm.getJob() == 131)
		    cm.sendSimple("你有资格成为一名真正的战士。\r\n你想要转职吗？\r\n#b#L0# 我想转职为暗黑骑士。#l\r\n#b#L1# 让我再想想。#l");
		else {
		    if (cm.haveItem(4031348)) {
		        cm.sendSimple("你有资格成为一名真正的战士。\r\n你想要转职吗？\r\n#b#L0# 我想转职为战神。#l\r\n#b#L1# 让我再想想。#l");
		    } else {
			cm.sendNext("你需要花费1000万金币购买秘密卷轴。");
			cm.dispose();
			return;
		    }
		}
	    } else {
		cm.sendOk("你还没有准备好进行四转。等你准备好了再来找我。");
		cm.dispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("你不必犹豫成为最强的战士……无论你何时做出决定，都来找我。如果你准备好了，我将让你进行第四次转职。");
	    cm.dispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //player have too much SP means they havent assigned to their skills
	    if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //player used too much SP means they have assigned to their skills.. conflict
		cm.sendOk("看起来你还有大量的SP，但你已经在技能上使用了足够的SP。你的SP已被重置。#e请再次与我交谈以进行转职。#n");
		cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
	    } else {
	    	cm.sendOk("嗯……你有太多的#bSP#k。SP太多的话是无法进行第四次转职的。");
	    }
	    cm.dispose();
	    return;
	} else {
		if (cm.getJob() == 111) {
		    cm.changeJob(112);
		    cm.sendNext("你已经成为了最强的战士，我的#b英雄#k。你将获得#b突进#k技能，可以攻击多个敌人并赋予你不屈的意志，同时还有#b稳如泰山#k和#b阿喀琉斯#k。");
		} else if (cm.getJob() == 121) {
		    cm.changeJob(122);
		    cm.sendNext("你已经成为了最强的战士，我的#b圣骑士#k。你将获得#b突进#k技能，可以攻击多个敌人并赋予你不屈的意志，同时还有#b稳如泰山#k和#b阿喀琉斯#k。");
		} else if (cm.getJob() == 131) {
		    cm.changeJob(132);
		    cm.sendNext("你已经成为了最强的战士，我的#b黑骑士#k。你将获得#b突进#k技能，可以攻击多个敌人并赋予你不屈的意志，同时还有#b稳如泰山#k和#b阿喀琉斯#k。");
		} else {
		    cm.gainItem(4031348, -1);
		    cm.changeJob(2112);
		if (cm.canHold(1142132,1)) {
		    cm.forceCompleteQuest(29927);
		    cm.gainItem(1142132,1); //temp fix
		}
		    cm.sendNext("你已经成为了最强的战士，我的#b战神#k。你将获得#b双重 swing#k技能，可以攻击多个敌人并赋予你不屈的意志，同时还有#b战斗姿态#k和#b冰冻姿态#k。");
		}
	}
    } else if (status == 2) {
	cm.sendNextPrev("别忘了，一切取决于你训练的付出。");
	cm.dispose();
    }
}