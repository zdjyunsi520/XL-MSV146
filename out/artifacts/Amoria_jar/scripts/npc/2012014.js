/**
	Orbis Magic Spot - Orbis Tower <1st Floor>(200082100)
**/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    }
    status++;
    if (status == 0) {
	if(cm.haveItem(4001019)) {
	    cm.sendYesNo("你可以使用#b#t4001019#k来激活#b#p2012014##k。要传送到#b#p2012015##k所在的位置吗？");
	} else {
	    cm.sendOk("有一个#b#p2012014##k可以将你传送到#b#p2012015##k所在的位置，但没有卷轴就无法激活它。");
	    cm.dispose();
	}
    }
    if (status == 1) {
	cm.gainItem(4001019, -1);
	cm.warp(200082100,0);
	cm.dispose();
    }
}
