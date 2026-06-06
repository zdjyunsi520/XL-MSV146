/* Kedrick
	Fishking King NPC
*/

var status = -1;
var sel;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
		if (status == 0) {
			cm.dispose();
			return;
		}
	status--;
    }

    if (status == 0) {
	cm.sendSimple("购买120个鱼饵需要300000金币。你想购买吗？");
    } else if (status == 1) {
	sel = selection;
	if (sel == 1) {
	    cm.sendYesNo("祝你钓鱼愉快~");
	} else if (sel == 3) {
	    if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(2300001, 120);
		    cm.gainItem(5350000,-1);
		    cm.sendNext("你已经拥有鱼饵了。");
		} else {
		    cm.sendNext("请检查你的背包是否有足够的空间，以及是否携带了从现金商城购买的鱼饵罐。");
		}
	    } else {
		cm.sendOk("请检查你是否有足够的金币或背包空间。");
	    }
	    cm.safeDispose();
	}
    } else if (status == 2) {
	if (sel == 1) {
	    if (cm.canHold(2300000,120) && cm.getMeso() >= 300000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-300000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("你已经拥有鱼饵了。");
		} else {
		    cm.sendNext("请检查你的背包是否有足够的空间，以及是否携带了从现金商城购买的鱼饵罐。");
		}
	    } else {
		cm.sendOk("请检查你是否有足够的金币或背包空间。");
	    }
	    cm.safeDispose();
	}
    }
}