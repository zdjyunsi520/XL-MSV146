var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("哦，你还想在新快乐镇逛逛？没错！在这样一个小镇里从日常生活中偷个闲确实是个好主意~");
	cm.safeDispose();
    }
  
    // cm.safeDispose();
    if (status == 0) {
	cm.sendYesNo("哦，你在这里的事情办完了？想回到#b自由市场#k吗？我可以随时把你送到自由市场。你现在就想回去吗？");
    } else if (status == 1) {
	cm.warp(910000000);
	cm.dispose();
    }
}