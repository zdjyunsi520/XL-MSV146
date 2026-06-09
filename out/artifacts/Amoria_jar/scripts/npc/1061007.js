/* Crumbling Statue
	1061007
*/

var status = 0;
var zones = 0;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
        
    if (status == 0) {
	cm.sendNext("破碎的雕像让你感到悲伤 =(");
    } else if (status == 1) {
	cm.sendYesNo("你想逃离这份悲伤吗？");
    } else if (status == 2) {
	cm.warp(105000000);
	cm.dispose();
    }
}	