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
	cm.sendOk("你还没完成修炼课程吗？如果你想离开这里，请不要犹豫告诉我。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("你完成修炼了吗？如果你愿意，我将送你离开这个修炼营。");
    } else if (status == 1) {
	cm.sendNext("那么，我将从这里送你出去。做得好。");
    } else if (status == 2) {
	cm.warp(3, 0);
	cm.dispose();
    }
}