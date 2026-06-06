/*
	Dolphin - Pier on the Beach(251000100)
*/

var status = -1;
var menu;
var cost = 10000;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("嗯……现在太忙了没空做吗？不过如果你想做了，随时回来找我。");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("你想现在前往#b#m230000000##k吗？费用是#b"+cost+" 枫币#k。");
    } else if (status == 1) {
	if (cm.getMeso() < cost) {
	    cm.sendOk("我觉得你的钱不够……");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(230000000);
	    cm.dispose();
	}
    }
}