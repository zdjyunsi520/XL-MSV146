/** 
	Tylus: Warrior 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
	cm.sendOk("想好了再来找我吧。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (!(cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {
	    if (cm.getQuestStatus(6192) == 1) {
		if (cm.getParty() != null) {
		    var ddz = cm.getEventManager("ProtectTylus");
		    if (ddz == null) {
			cm.sendOk("发生了未知错误。");
		    } else {
			var prop = ddz.getProperty("state");
			if (prop == null || prop.equals("0")) {
			    ddz.startInstance(cm.getParty(), cm.getMap());
			} else {
			    cm.sendOk("已经有其他人在保护泰勒斯了，请稍后再试。");
			}
		    }
		} else {
		    cm.sendOk("请组建队伍来保护泰勒斯！");
		}
	    } else if (cm.getQuestStatus(6192) == 2) {
		cm.sendOk("你保护了我。谢谢。我将教授你站姿技能。");
		if (cm.getJob() == 112) {
			if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
				cm.teachSkill(1121002, 0, 10);
			}
		} else if (cm.getJob() == 122) {
			if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
				cm.teachSkill(1221002, 0, 10);
			}
		} else if (cm.getJob() == 132) {
			if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
				cm.teachSkill(1321002, 0, 10);
			}
		}
	    } else {
		cm.sendOk("你似乎有潜力，继续训练吧，也许有一天我会考虑训练你。");
	    }
	    cm.dispose();
	    return;
	}
	if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110 ) && cm.getPlayerStat("LVL") >= 70) {
	    if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
	        if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
		    cm.sendOk("看起来你有大量的SP，但你的技能已经使用了足够的SP。你的SP已被重置。#e请再次和我对话进行转职。#n");
		    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
	        } else {
	    	    cm.sendOk("嗯……你有太多的#bSP#k。SP太多的话无法进行转职。");
	        }
		cm.safeDispose();
	    } else {
	        cm.sendNext("你确实是个强者。");
	    }
	} else {
	    cm.sendOk("请确保你符合转职条件。（70级以上）");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	    if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
	    if (cm.getJob() == 110) { // FIGHTER
		cm.changeJob(111); // CRUSADER
		cm.sendOk("你现在是一名#b十字军#k了。");
		cm.dispose();
	    } else if (cm.getJob() == 120) { // PAGE
		cm.changeJob(121); // WHITEKNIHT
		cm.sendOk("你现在是一名#b白骑士#k了。");
		cm.dispose();
	    } else if (cm.getJob() == 130) { // SPEARMAN
		cm.changeJob(131); // DRAGONKNIGHT
		cm.sendOk("你现在是一名#b龙骑士#k了。");
		cm.dispose();
	    } else if (cm.getJob() == 2110) { // ARAN
		cm.changeJob(2111); // ARAN
		if (cm.canHold(1142131,1)) {
		    cm.forceCompleteQuest(29926);
		    cm.gainItem(1142131,1); //temp fix
		}
		cm.sendOk("你现在是一名#b阿兰#k了。");
		cm.dispose();
	    }
	    } else {
		cm.sendOk("等你达到70级并使用完SP后再来。");
		cm.dispose();
	    }
    }
}