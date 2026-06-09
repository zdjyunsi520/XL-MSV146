
/*
	Yellow Balloon - LudiPQ 3rd stage NPC
*/

var status = -1;
var exp = 2940;
			
function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage3status = eim.getProperty("stage3status");

    if (stage3status == null) {
	if (cm.isLeader()) { // Leader
	    var stage3leader = eim.getProperty("stage3leader");
	    if (stage3leader == "done") {

		if (cm.haveItem(4001022, 32)) { // Clear stage
		    cm.sendNext("恭喜！你已通过第3阶段。快去吧，前往第4阶段。");
		    cm.removeAll(4001022);
		    clear(3,eim,cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		} else { // Not done yet
		    cm.sendNext("你确定带来了#r32张次元通行证#k吗？请再检查一遍。");
		}
	    } else {
		cm.sendOk("欢迎来到第3阶段。在地图中四处寻找，打破箱子后从出现的#b方块章鱼#k身上收集#r次元通行证#k。完成后，让所有队员将#r通行证#k交给你，然后再和我说话。");
		eim.setProperty("stage3leader","done");
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第3阶段。在地图中四处寻找，打破箱子后从出现的#b方块章鱼#k身上收集#r次元通行证#k。完成后，将所有#r通行证#k交给你们的队长。");
	}
    } else {
	cm.sendNext("恭喜！你已通过第3阶段。快去吧，前往第4阶段。");
    }
    cm.safeDispose();
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}