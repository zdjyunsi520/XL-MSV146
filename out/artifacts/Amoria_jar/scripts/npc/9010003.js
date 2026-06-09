/* Ria
	lolcastle NPC
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getMapId() != 101000000) {
	cm.dispose();
	return;
    }
    if (mode == 0) {
	cm.sendOk("好的，下次见。");
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	cm.sendNext("我是莉亚。只需支付 #b1000000枫币#k 的小额费用，我就能送你去 #r审判之地#k。");
    } else if (status == 1) {
	cm.sendYesNo("你想现在进入 #r审判之地#k 吗？");
    } else if (status == 2) {
	var em = cm.getEventManager("lolcastle");
	if (em == null || !em.getProperty("entryPossible").equals("true")) {
	    cm.sendOk("抱歉，#r审判之地#k 目前已关闭。");
	} else if (cm.getMeso() < 1000000) {
	    cm.sendOk("你的枫币不够。");
	} else if (cm.getPlayerStat("LVL") < 21) {
	    cm.sendOk("你必须达到21级以上才能进入 #r审判之地。#k");
	} else if (cm.getPlayerStat("LVL") >= 21 && cm.getPlayerStat("LVL") < 31) {
	    cm.gainMeso(-1000000);
	    em.getInstance("lolcastle1").registerPlayer(cm.getChar());
	} else if (cm.getPlayerStat("LVL") >= 31 && cm.getPlayerStat("LVL") < 51) {
	    cm.gainMeso(-1000000);
	    em.getInstance("lolcastle2").registerPlayer(cm.getChar());
	} else if (cm.getPlayerStat("LVL") >= 51 && cm.getPlayerStat("LVL") < 71) {
	    cm.gainMeso(-1000000);
	    em.getInstance("lolcastle3").registerPlayer(cm.getChar());
	} else if (cm.getPlayerStat("LVL") >= 71 && cm.getPlayerStat("LVL") < 91) {
	    cm.gainMeso(-1000000);
	    em.getInstance("lolcastle4").registerPlayer(cm.getChar());
	} else {
	    cm.gainMeso(-1000000);
	    em.getInstance("lolcastle5").registerPlayer(cm.getChar());
	}
	cm.dispose();
    }
}