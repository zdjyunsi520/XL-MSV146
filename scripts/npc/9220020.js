var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (!cm.isLeader()) {
	cm.sendNext("嘿！从这里找到17张通往MV巢穴的地图吧！");
	cm.dispose();
	return;
    }
    if (cm.haveItem(4032248,17)) {
	cm.warpParty(674030200);
	cm.gainItem(4032248,-17);
    } else {
	cm.sendOk("嘿！从这里找到17张通往MV巢穴的地图吧！");
    }
    cm.dispose();
}