/* RED 1st impact
    [Smart Mount] Lend a Hand
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("切，好吧。你有空的时候再来吧。");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendYesNo("终于！我需要帮助！你能来见我吗？\r\n#r（点击是传送到维多利亚树平台，教官欧文在那里。）#k");
	} else if (status == 1) {
        qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.warp(104020100,0);
        qm.dispose();
    }
}