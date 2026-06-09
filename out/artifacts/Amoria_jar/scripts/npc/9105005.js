
var status = 0;

function start() {
    cm.sendYesNo("你想返回大厅吗？");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(889100100);
	}
    cm.dispose();
}