/**
	Subway Attendant @ Ximending
**/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.sendNext("由于恶魔史莱姆的入侵，火车服务已暂停。不过如果你愿意，你可以进入并穿过火车车厢前往台北101。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你想进入吗？");
    } else if (status == 1) {
	    cm.sendYesNo("你想进入吗？");
    } else if (status == 2) {
	cm.warp(742000104, 5);
	cm.dispose();
    }
}