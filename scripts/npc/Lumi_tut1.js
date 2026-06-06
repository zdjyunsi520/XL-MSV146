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
		//cm.sendDirectionStatus(3, 1);
		cm.sendPlayerToNpc("想知道结局如何就去玩枫之谷吧");
    } else if (status == 1) {
		cm.showLumiVid();
		cm.dispose();
    } 
}