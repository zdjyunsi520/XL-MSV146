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
	cm.sendSimple("你需要达到10级以上，并携带钓竿和鱼饵才能进入钓鱼泻湖。你每1分钟就能钓到一条鱼。");
    } else if (status == 1) {
	sel = selection;
	if (sel == 4) {
	    cm.sendOk("哇，看来你在钓鱼泻湖里花了不少功夫才钓到这些卵呢。来，拿着吧。#b钓鱼王勋章#k！");
	    cm.safeDispose();
	} else if (sel == 5) {
	    if (cm.haveItem(4000518, 500)) {
		if (cm.canHold(1142146)) {
		    cm.gainItem(4000518, -500);
		    cm.gainItemPeriod(1142146, 1, 30);
		    cm.sendOk("请检查你的背包是否有足够的空间。")
		} else {
		    cm.sendOk("请给我500个#i4000518:#金鱼卵来兑换钓鱼王勋章！");
		}
	    } else {
		cm.sendOk("请给我500个#i4000518:#金鱼卵来兑换钓鱼王勋章！")
	    }
	    cm.safeDispose();
	}
    }
}