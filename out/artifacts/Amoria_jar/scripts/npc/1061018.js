
function start() {
    cm.sendYesNo("如果你现在离开，就得从头开始。你确定要离开吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(105100100);
    }
    cm.dispose();
}