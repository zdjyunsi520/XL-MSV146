/*
	Machine Apparatus - Origin of Clocktower(220080001)
*/

var status = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("嘟嘟……嘟嘟……你可以通过我传送到一个更安全的地方。嘟嘟……嘟嘟……你想离开这里吗？");
    } else if (status == 1) {
	cm.warp(220080000);
	if (cm.getPlayerCount(220080001) == 0) {
		cm.getMap(220080000).resetReactors();
	}
	cm.dispose();
    } else {
	cm.dispose();
	}
}
