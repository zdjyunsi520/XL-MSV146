/* Author: Xterminator
	NPC Name: 		Peter
	Map(s): 		Maple Road: Entrance - Mushroom Town Training Camp (3)
	Description: 	Takes you out of Entrace of Mushroom Town Training Camp
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNext("但是请记住，一旦离开这里，你就会进入一个满是怪物的村庄。那么，再见了！");
    } else if (status == 1) {
	cm.sendNextPrev("但是请记住，一旦离开这里，你就会进入一个满是怪物的村庄。那么，再见了！");
    } else if (status == 2) {
	cm.warp(40000, 0);
	cm.gainExp(3);
	cm.dispose();
    }
}