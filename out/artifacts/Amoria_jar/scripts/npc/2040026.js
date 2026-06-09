/*
Third Eos Rock - Ludibrium : Eos Tower 41st Floor (221021700)
*/

var status = 0;
var map;
var portal;

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
	    cm.sendSimple("你可以使用#b爱奥斯岩石卷轴#k来激活#b第三块爱奥斯岩石#k。你想传送到哪块岩石？#b\r\n#L0#第二块爱奥斯岩石（第71层）#l\r\n#L1#第四块爱奥斯岩石（第1层）#l");
	} else {
	    cm.sendOk("有一块岩石可以将你传送到#b第二块爱奥斯岩石或第四块爱奥斯岩石#k，但没有卷轴就无法激活它。");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("你可以使用#b爱奥斯岩石卷轴#k来激活#b第三块爱奥斯岩石#k。你要传送到第70层的#b第二块爱奥斯岩石#k吗？");
	    map = 221022100;
	    portal = 3;
	} else {
	    cm.sendYesNo("你可以使用#b爱奥斯岩石卷轴#k来激活#b第三块爱奥斯岩石#k。你要传送到第1层的#b第四块爱奥斯岩石#k吗？");
	    map = 221020000;
	    portal = 4;
	}
    } else if (status == 2) {
	cm.gainItem(4001020, -1);
	cm.warp(map, portal);
	cm.dispose();
    }
}