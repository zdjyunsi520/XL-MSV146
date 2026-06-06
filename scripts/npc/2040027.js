/*
	Fourth Eos Rock - Ludibrium : Eos Tower 1st Floor (221020000)
*/

var status = 0;

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
	    cm.sendYesNo("你可以使用#b爱奥斯岩石卷轴#k来激活#b第四块爱奥斯岩石#k。你要前往第32层的#b第三块爱奥斯岩石#k吗？");
	} else {
	    cm.sendOk("有一块岩石可以将你传送到#b第三块爱奥斯岩石#k，但没有卷轴就无法激活它。");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4001020, -1);
	cm.warp(221021200, 0);
	cm.dispose();
    }
}