function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("你很快就会到达目的地。和周围的人聊聊天吧，不知不觉就到了。");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("你想离开候车室吗？可以，但车票是不退的。你确定要离开吗？");
    } else if(status == 1) {
	if (cm.getMapId() == 220000111) {
	    cm.warp(220000110, 0);
	} else {
	    cm.warp(200000121, 0);
	}
	cm.dispose();
    }
}
