/*
	Second Eos Rock - Ludibrium : Eos Tower 71st Floor (221022900)
*/

var status = 0;
var map;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4001020)) {
	    cm.sendSimple("你可以使用#b爱奥斯岩石卷轴#k来激活#b第二块爱奥斯岩石#k。你想传送到哪块岩石？#b\r\n#L0#第一块爱奥斯岩石（第100层）#l\r\n#L1#第三块爱奥斯岩石（第41层）#l");
	} else {
	    cm.sendOk("有一块岩石可以将你传送到#b第一块爱奥斯岩石或第三块爱奥斯岩石#k，但没有卷轴就无法激活它。");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("你可以使用#b爱奥斯岩石卷轴#k来激活#b第二块爱奥斯岩石#k。你要传送到第100层的#b第一块爱奥斯岩石#k吗？");
	    map = 221023200;
	} else {
	    cm.sendYesNo("你可以使用#b爱奥斯岩石卷轴#k来激活#b第二块爱奥斯岩石#k。你要传送到第32层的#b第三块爱奥斯岩石#k吗？");
	    map = 221021200;
	}
    } else if (status == 2) {
	cm.gainItem(4001020, -1);
	cm.warp(map, 0);
	cm.dispose();
    }
}