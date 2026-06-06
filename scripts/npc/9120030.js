/*
	Marr - Tokyo Park 2095
*/

function start() {
    if (cm.getMapId() != 802000310) {
	cm.sendSimple("请收集10个能量传送装置！");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	if (selection == 0) {
	    if (cm.haveItem(4032192, 10)) {
		cm.gainItem(4032192, -10);
		cm.warp(802000313, 0);
	    } else {
		cm.sendOk("请收集10个能量传送装置！");
	    }
	} else if (selection == 1) {
	    cm.warp(802000310, 0);
	}
    }
    cm.dispose();
}