/*  NPC : Samuel
	Pirate 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (!(cm.getJob() == 511 || cm.getJob() == 521 || cm.getJob() == 531)) {
	    cm.sendOk("你找我有什么事吗？你没有什么想问我的。");
	    cm.safeDispose();
	    return;
	} else if (cm.getPlayerStat("LVL") < 120) {
	    cm.sendOk("你还太弱了，无法前往海盗极限之路。等你变强了再来找我吧。");
	    cm.safeDispose();
	    return;
	} else {
	    if (cm.getQuestStatus(6944) == 2 || cm.getJob() == 531) {
		if (cm.getJob() == 511)
		    cm.sendSimple("你有资格成为真正的海盗。\r\n你想要转职吗？\r\n#b#L0# 我想要转职为拳霸。#l\r\n#b#L1#  让我再想想。#l");
		else if (cm.getJob() == 531) {
		    if (cm.haveItem(4031348)) {
		        cm.sendSimple("你有资格成为真正的海盗。\r\n你想要转职吗？\r\n#b#L0# 我想要转职为炮术师。#l\r\n#b#L1#  让我再想想。#l");
		    } else {
			cm.sendNext("你需要花费1000万枫币购买秘传卷轴。");
			cm.dispose();
			return;
		    }
		    
		} else
		    cm.sendSimple("你有资格成为真正的海盗。\r\n你想要转职吗？\r\n#b#L0# 我想要转职为枪手。#l\r\n#b#L1#  让我再想想。#l");
	    } else {
		cm.sendOk("你还没有准备好进行第四次转职。等你准备好了，再来找我。");
		cm.safeDispose();
		return;
	    }
	}
    } else if (status == 1) {
	if (selection == 1) {
	    cm.sendOk("你不必犹豫……无论你何时做出决定，都来找我。如果你准备好了，我将让你进行第四次转职。");
	    cm.safeDispose();
	    return;
	}
	if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 120) * 3) { //player have too much SP means they havent assigned to their skills
	    if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
		cm.sendOk("看起来你还有大量的SP，但你已经在技能上使用了足够的SP。你的SP已被重置。#e请再次与我交谈以进行转职。#n");
		cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
	    } else {
	    	cm.sendOk("嗯……你有太多的#bSP#k。SP太多的话是无法进行转职的。");
	    }
	    cm.safeDispose();
	    return;
	} else {
		if (cm.getJob() == 511) {
		    cm.changeJob(512);
		    cm.sendNext("你已成为最强的海盗#b拳霸#k。 ");
		} else if (cm.getJob() == 521) {
		    cm.changeJob(522);
		    cm.sendNext("你已成为最强的海盗#b枪手#k。  ");
		} else if (cm.getJob() == 531) {
		    cm.gainItem(4031348, -1);
		    cm.changeJob(532);
		    cm.sendNext("你已成为最强的海盗#b炮术师#k。  ");
		}
	}
    } else if (status == 2) {
	if (cm.getJob() == 512) {
	    cm.sendNext("这还不是拳霸的全部实力。 ");
	} else if (cm.getJob() == 532) {
	    cm.sendNext("这还不是炮术师的全部实力。 ");
	} else {
	    cm.sendNext("这还不是枪手的全部实力。 ");
	}
    } else if (status == 3) {
	cm.sendNextPrev("别忘了，一切取决于你训练的付出。");
    } else if (status == 4) {
	cm.dispose();
    }
}