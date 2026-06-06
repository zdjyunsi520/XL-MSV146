/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Shane - Ellinia (101000000)
-- By ---------------------------------------------------------------------------------------------
	Unknown
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Statement fix [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var check = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendOk("好的，下次再见。");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    }
    else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayerStat("LVL") < 25) {
	    cm.sendOk("你必须达到更高等级才能进入忍耐之森。");
	    cm.dispose();
	    check = 1;
	}
	else {
	    cm.sendYesNo("你好，我是谢恩。只要付一点小费，我就能让你进入忍耐之森。你想花#b5000#k金币进入吗？");
	}
    } else if (status == 1) {
	if (check != 1) {
	    if (cm.getMeso() < 5000) {
		cm.sendOk("抱歉，看起来你的金币不够！")
		cm.dispose();
	    }
	    else {
		if (cm.getQuestStatus(2050) == 1 || cm.getPlayerStat("LVL") < 50) {
		    cm.warp(910130000, 0);
		}
		else if (cm.getQuestStatus(2051) == 1 || cm.getPlayerStat("LVL") >= 50) {
		    cm.warp(910130100, 0);
		}
		cm.gainMeso(-5000);
		cm.dispose();
	    }
	}
    }
}	


