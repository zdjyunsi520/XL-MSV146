var status = 0;

function start() {
    cm.sendYesNo("你想前往万神殿吗？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(400000001);
	}
    cm.dispose();
}