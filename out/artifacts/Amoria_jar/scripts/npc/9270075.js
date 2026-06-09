/* 
	NPC Name: 		Maple Administrator
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("你想前往白色圣诞山丘吗？");
    } else if (status == 1) {
	cm.saveLocation("CHRISTMAS");
	cm.warp(555000000);
	cm.dispose();
    }
}