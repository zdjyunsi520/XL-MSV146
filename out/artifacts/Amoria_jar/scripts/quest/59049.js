/* Return to Masteria
    Finding King Kobold
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    qm.sendOk("我们的城镇有危险。如果有位伟大的英雄能帮助我们就好了……");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNext("只有一件事可以做：猎杀#o9390915#！");
	} else if (status == 1) {
	   qm.sendYesNo("除掉首领后其他的就会四散。你能做到吗？\r\n（如果你接受，将被传送到附近的地图。）");
	} else if (status == 2) {
	   qm.sendNext("击败#o9390915#可不容易。");
	} else if (status == 3) {
	    qm.forceStartQuest();
		qm.warp(866000150,0);
	    qm.dispose();	
	}
}