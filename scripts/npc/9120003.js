/*
	Hikari - Showa Town(801000000)
*/

var status = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else {
	cm.sendOk("你想进入浴场吗？需要");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("金币 "+300+"请确认你是否有");
    } else if (status == 1) {
	if (cm.getMeso() < 300) {
	    cm.sendOk("金币来进入这个地方。 "+300+"金币来进入这个地方。");
	} else {
	    cm.gainMeso(-300);
	    if (cm.getPlayerStat("GENDER") == 0) {
		cm.warp(801000100);
	    } else {
		cm.warp(801000200);
	    }
	}
	cm.dispose();
    }
}
