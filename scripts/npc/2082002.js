function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("你很快就会到达目的地。去和其他人聊聊天吧，不知不觉间你就到了。");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("你想离开候船室吗？可以，但船票不可退款。你确定要离开吗？");
    } else if(status == 1) {
	cm.warp(240000110, 0);
	cm.dispose();
    }
}
