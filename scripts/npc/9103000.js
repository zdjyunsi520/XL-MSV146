/*
	Pietri - Ludibirum Maze PQ
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    cm.sendNext("做得好！你收集了#b");

	} else if (status == 1) {
	    if (cm.getParty() != null && isLeader()) {
		if (cm.itemQuantity(4001106) >= 30) {
		    cm.sendOk("个#t4001106#\r\n#k你可以领取奖励了" + cm.itemQuantity(4001106) + "请去收集更多的优惠券。\r\n你至少需要#b30张优惠券");
		} else {
		    cm.sendOk("请告诉#b你们的队长#k，收集完所有队员的优惠券后前来和我对话。");
		    cm.dispose();
		}
	    } else {
		cm.sendPrev("请告诉#b你们的队长#k，收集完所有队员的优惠券后前来和我对话。");
		cm.dispose();
	    }

	} else if (status == 2) {
	    cm.givePartyExp(cm.itemQuantity(4001106)* 50);
	    cm.warpParty(809050016);
	    cm.dispose();
	}
    }
}
     
function isLeader(){
    return cm.isLeader();
}
