var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("#b#L0#给我一瓶古代冰川水。#l\r\n#L1#独自前往冰之峡谷。（任务）#l");
    } else if (status == 1) {
	if (selection == 0) {
	    if (!cm.haveItem(4032649) && !cm.haveItem(2022698)) {
		cm.gainItem(4032649,1);
	    } else {
		cm.sendOk("你已经有了。");
	    }
	} else if (selection == 1){
	    cm.warp(921120705,0);
	}
	cm.dispose();
    }
}