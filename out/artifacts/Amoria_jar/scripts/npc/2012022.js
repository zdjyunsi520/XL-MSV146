var status = -1;

function action(mode, type, selection) {
    status++;
    if (mode == 0) {
	cm.sendOk("你很快就会到达目的地的。和其他人聊聊天吧，不知不觉你就到了。");
	cm.safeDispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("你想离开候机室吗？可以，但票是不退的。你确定要离开吗？");
    } else if(status == 1) {
	cm.warp(200000131, 0);
	cm.dispose();
    }
}