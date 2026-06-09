/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = -1;
var job;

function start() {
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
	if (!(cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) { // CLERIC
	    cm.sendOk("你似乎有潜力，继续训练吧，也许有一天我会考虑训练你。");
	    cm.dispose();
	    return;
	}
	if ((cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) && cm.getPlayerStat("LVL") >= 70) {
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
	    if (cm.getJob() == 210) { // FP
		cm.changeJob(211); // FP MAGE
		cm.sendOk("你现在是一名#b火毒魔导师#k了。");
		cm.dispose();
	    } else if (cm.getJob() == 220) { // IL
		cm.changeJob(221); // IL MAGE
		cm.sendOk("你现在是一名#b冰雷魔导师#k了。");
		cm.dispose();
	    } else if (cm.getJob() == 230) { // CLERIC
		cm.changeJob(231); // PRIEST
		cm.sendOk("你现在是一名#b祭司#k了。");
		cm.dispose();
	    }
	    } else {
		cm.sendOk("等你达到70级并使用完SP后再来。");
		cm.dispose();
	    }
    }
}