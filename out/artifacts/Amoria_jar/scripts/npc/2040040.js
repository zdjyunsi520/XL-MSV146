/*
	Green Balloon - LudiPQ 5th stage NPC
**/

var exp = 3770;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage5status = eim.getProperty("stage5status");

    if (stage5status == null) {
	if (cm.isLeader()) { // Leader
	    var stage5leader = eim.getProperty("stage5leader");
	    if (stage5leader == "done") {

		if (cm.haveItem(4001022,24)) { // Clear stage
		    cm.sendNext("恭喜！你已通过第5阶段。快去吧，前往第6阶段。");
		    cm.removeAll(4001022);
		    clear(5,eim,cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		} else { // Not done yet
		    cm.sendNext("你确定带来了#r24张次元通行证#k吗？请再检查一遍。");
		}
		cm.safeDispose();
	    } else {
		cm.sendOk("欢迎来到第5阶段。前往其他地图的箱子中收集#r24张次元通行证#k。完成后，让所有队员将#r通行证#k交给你，然后再和我说话。");
		eim.setProperty("stage5leader","done");
		cm.safeDispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第5阶段。前往其他地图的箱子中收集#r次元通行证#k。完成后，将所有#r通行证#k交给你们的队长。");
	    cm.safeDispose();
	}
    } else {
	cm.sendNext("恭喜！你已通过第5阶段。快去吧，前往第6阶段。");
	cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}