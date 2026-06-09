// Kerny - Pilot
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getMapId() == 540010002) {
	    cm.dispose();
	} else {
	    cm.sendYesNo("飞机即将起飞，你现在要离开吗？你再次进入需要重新购买机票。");
	}
    } else {
	cm.warp(540010000, 0);
	cm.dispose();
    }
}