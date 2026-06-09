/* Arec
	Thief 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = -1;
var job;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendOk("想好了再来找我吧。");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	// if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432)) {
	//     cm.sendOk("你似乎有潜力，继续训练吧，也许有一天我会考虑训练你。");
	//     cm.safeDispose();
	//     return;
	// } 
	if (cm.getJob() == 3612) {
        cm.sendOk("你是谁啊？");
	    cm.safeDispose();
	}
	if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432) && cm.getPlayerStat("LVL") >= 70) {
	    if (cm.getJob() != 432 && cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
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
	    cm.sendOk("请确保你符合转职条件。（70级以上）"+cm.getJob());
	    cm.safeDispose();
	}
    } else if (status == 1) {
	    if (cm.getPlayerStat("LVL") >= 70 && (cm.getJob() == 432 || cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3)) {
	    	if (cm.getJob() == 410) { // ASSASIN
			cm.changeJob(411); // HERMIT
			cm.sendOk("你现在是一名#b隐士#k了。");
			cm.safeDispose();
	    	} else if (cm.getJob() == 420) { // BANDIT
			cm.changeJob(421); // CDIT
			cm.sendOk("你现在是一名#b神偷#k了。");
			cm.safeDispose();
		} else if (cm.getJob() == 432) { // 
			cm.changeJob(433); // 
			cm.sendOk("你现在是一名#b刀刃领主#k了。");
			cm.safeDispose();
	    	}
	    } else {
		cm.sendOk("等你达到70级并使用完所有SP后再来。");
		cm.dispose();
	    }
    }
}
