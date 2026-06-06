/*
	Purin - Before Takeoff To Orbis(101000301)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("你很快就会到达目的地。去和其他人聊聊天吧，不知不觉就到了。");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("你想离开候船室吗？你可以离开，但票是#b不可退款#k的。你确定要离开吗？");
    } else if(status == 1) {
	cm.warp(101000300, 0);
	cm.dispose();
    }
}
