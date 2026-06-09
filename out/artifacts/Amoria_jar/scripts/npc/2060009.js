var status = 0;
var menu;
var payment = false;

function start() {
    status = -1;
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
	if (cm.haveItem(4031242)) {
	    menu = "#L0##b我将使用#t4031242##k前往#b#m230030200##k。#l\r\n#L1#支付#b10000金币#k后前往#b#m251000000##k。#l";
	} else {
	    menu = "#L0#支付#b1000金币#k后前往#b#m230030200##k。#l\r\n#L1#支付#b10000金币#k后前往#b#m251000000##k。#l";
	    payment = true;
	}
	cm.sendSimple ("海洋彼此相连。靠脚无法到达的地方可以轻松通过海路到达。今天要不要和我们一起乘坐#b海豚出租车#k呢？\r\n"+menu);
    } else if (status == 1) {
	if (selection == 0) {
	    if(payment == true) {
		if(cm.getMeso() < 1000) {
		    cm.sendOk("我觉得你的钱不够……");
		    cm.dispose();
		} else {
		    cm.gainMeso(-1000);
		}
	    } else {
		cm.gainItem(4031242,-1);
	    }
	    cm.warp(230030200);
	    cm.dispose();
	} else if (selection == 1) {
	    if(cm.getMeso() < 10000) {
		cm.sendOk("我觉得你的钱不够……");
		cm.dispose();
	    }
	    cm.gainMeso(-10000);
	    cm.warp(251000100);
	    cm.dispose();
	}
    }
}