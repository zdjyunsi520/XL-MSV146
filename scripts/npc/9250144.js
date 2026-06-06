/* Author: Xterminator
	NPC Name: 		Heena
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Takes you outside of Training Camp
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.sendOk("你想前往过去吗？");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("Booting...");
	} else if (status == 1) {
	cm.sendYesNo("正在传送至过去..");
    } else if (status == 2) {
	cm.sendNext("正在传送至过去..");
	//cm.showWZEffect("Effect/DirectionVisitor.img/effect/TimeTravel");
    } else if (status == 3) {
	cm.warp(502021010, 0);
	cm.dispose();
    }
}