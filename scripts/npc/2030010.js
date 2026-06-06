/* Amon
 * Last Mission : Zakum's Altar (280030000)
 */

function start() {
    cm.sendYesNo("如果你现在离开，就必须从头开始。你确定要离开吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(211042200);
    }
    cm.dispose();
}