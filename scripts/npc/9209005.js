/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("120张渔网需要300000金币。你想购买吗？");
    } else if (status == 1) {
		if (selection == 0) {
			cm.warp(cm.getMapId() == 970020000 ? 970020005 : 970020000, 0);
			cm.dispose();
		} else {
			cm.sendYesNo("祝你钓鱼愉快~");
		}
    } else if (status == 2) {
	    if (cm.canHold(2270008,120) && cm.getMeso() >= 300000) {
		if (!cm.haveItem(2270008)) {
		    cm.gainMeso(-300000);
		    cm.gainItem(2270008, 120);
		    cm.sendNext("你已经有鱼饵了。");
		} else {
		    cm.sendNext("请检查你是否有足够的金币或充足的背包空间。");
		}
	    } else {
		cm.sendOk("请检查你是否有足够的金币或充足的背包空间。");
	    }
	    cm.safeDispose();
    }
}