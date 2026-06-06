// Xinga - Pilot
function start() {
    if (cm.getMapId() == 540010101) {
	cm.dispose();
    } else {
	cm.sendYesNo("飞机即将起飞，你现在要离开吗？你再次进入需要重新购买机票。");
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(103000000, 0);
    }
    cm.dispose();
}