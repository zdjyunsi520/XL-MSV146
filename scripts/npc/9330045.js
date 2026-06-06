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
	cm.sendSimple("你必须拥有钓鱼椅才能钓鱼！");
    } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.haveItem(5340000) || cm.haveItem(5340001)) {
		if (cm.haveItem(3011000)) {
		    cm.saveLocation("FISHING");
		    cm.warp(741000200);
		    cm.dispose();
		} else {
		    cm.sendNext("你必须拥有钓竿才能钓鱼！");
		    cm.safeDispose();
		}
	    } else {
		cm.sendNext("120个鱼饵需要3000金币。你想购买吗？");
		cm.safeDispose();
	    }
	} else if (sel == 1) {
	    cm.sendYesNo("你已经有一把钓鱼椅了。每个角色只能拥有一把钓鱼椅。");
	} else if (sel == 2) {
	    if (cm.haveItem(3011000)) {
		cm.sendNext("祝你钓鱼愉快~");
	    } else {
		if (cm.canHold(3011000) && cm.getMeso() >= 50000) {
		    cm.gainMeso(-50000);
		    cm.gainItem(3011000, 1);
		    cm.sendNext("请检查你是否有足够的金币或充足的背包空间。");
		} else {
		    cm.sendOk("你已经有鱼饵了。");
		}
	    }
	    cm.safeDispose();
	} else if (sel == 3) {
	    if (cm.canHold(2300001,120) && cm.haveItem(5350000,1)) {
		if (!cm.haveItem(2300001)) {
		    cm.gainItem(2300001, 120);
		    cm.gainItem(5350000,-1);
		    cm.sendNext("请检查你是否有足够的金币或充足的背包空间。");
		} else {
		    cm.sendNext("请检查你是否有足够的背包空间以及是否携带了从商城购买的美味饵罐。");
		}
	    } else {
		cm.sendOk("你需要达到10级以上，并拥有钓竿、鱼饵和钓鱼椅才能进入钓鱼湖。你将每1分钟钓上一条鱼。和钓鱼湖的NPC马德里克交谈查看你的捕获记录！");
	    }
	    cm.safeDispose();
	} else if (sel == 4) {
	    cm.sendOk("哇，看来你一定在钓鱼湖花了不少功夫钓这些鱼卵。来，拿着。这是#b钓鱼王勋章#k！");
	    cm.safeDispose();
	} else if (sel == 5) {
	    if (cm.haveItem(4000518, 500)) {
		if (cm.canHold(1142146)) {
		    cm.gainItem(4000518, -500);
		    cm.gainItemPeriod(1142146, 1, 30);
		    cm.sendOk("请检查你是否有足够的背包空间。")
		} else {
		    cm.sendOk("请给我500个#i4000518:#金鱼卵来换取钓鱼王勋章！");
		}
	    } else {
		cm.sendOk("请给我500个#i4000518:#金鱼卵来换取钓鱼王勋章！")
	    }
	    cm.safeDispose();
	}
    } else if (status == 2) {
	if (sel == 1) {
	    if (cm.canHold(2300000,120) && cm.getMeso() >= 3000) {
		if (!cm.haveItem(2300000)) {
		    cm.gainMeso(-3000);
		    cm.gainItem(2300000, 120);
		    cm.sendNext("请检查你是否有足够的金币或充足的背包空间。");
		} else {
		    cm.sendNext("请检查你是否有足够的背包空间以及是否携带了从商城购买的美味饵罐。");
		}
	    } else {
		cm.sendOk("你已经有鱼饵了。");
	    }
	    cm.safeDispose();
	}
    }
}