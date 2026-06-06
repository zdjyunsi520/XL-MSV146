function start() {
	cm.sendYesNo("你想前往外星人组队任务吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(502029000, 0);
    }
    cm.dispose();
}