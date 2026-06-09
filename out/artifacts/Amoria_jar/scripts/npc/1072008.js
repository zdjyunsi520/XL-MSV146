/**
	Author: xQuasar
	NPC: Kyrin - Pirate Job Advancer
	Inside Test Room
**/

var status;

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (status == -1) {
	if (cm.getMapId() == 912040000) {
	    if (!(cm.haveItem(4031856,15))) {
		cm.sendNext("去吧，给我弄15个#b强效风之水晶#k来。");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("哇，你给我带来了15个#b强效风之水晶#k！恭喜。让我把你传送出去吧。");
	    }
	} else if (cm.getMapId() == 912040005) {
	    if (!(cm.haveItem(4031857,15))) {
		cm.sendNext("去吧，给我弄15个#b强效力量水晶#k来。");
		cm.dispose();
	    } else {
		status = 2;
		cm.sendNext("哇，你给我带来了15个#b强效力量水晶#k！恭喜。让我把你传送出去吧。");
	    }
	} else {
	    cm.sendNext("错误，请报告此问题。");
	    cm.dispose();
	}
    } else if (status == 2) {
	cm.warp(120000101,0);
	cm.dispose();
    }
}