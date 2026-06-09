/*
	Lime Balloon - LudiPQ 4th stage NPC
*/

var exp = 3360;

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage4status = eim.getProperty("stage4status");

    if (stage4status == null) {
	if (cm.isLeader()) { // Leader
	    var stage4leader = eim.getProperty("stage4leader");
	    if (stage4leader == "done") {

		if (cm.getMap(922010401).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010402).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010403).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010404).getAllMonstersThreadsafe().size() == 0 && cm.getMap(922010405).getAllMonstersThreadsafe().size() == 0) { // Clear stage
		    cm.sendNext("恭喜！你已通过第2阶段。快去吧，前往第3阶段。");
		    cm.removeAll(4001022);
		    clear(4,eim,cm);
		    cm.givePartyExp(exp);
		} else { // Not done yet
		    cm.sendNext("你确定已经消灭了所有怪物吗？请再检查一遍。");
		}
		cm.safeDispose();
	    } else {
		cm.sendOk("欢迎来到第2阶段。在地图中四处寻找，从黑暗地图中的怪物身上收集#r次元通行证#k。完成后，让所有队员将#r通行证#k交给你，然后再和我说话。");
		eim.setProperty("stage4leader","done");
		cm.safeDispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第2阶段。在地图中四处寻找，从黑暗地图中的怪物身上收集#r次元通行证#k。完成后，将所有#r通行证#k交给你们的队长。");
	    cm.safeDispose();
	}
    } else {
	cm.sendNext("恭喜！你已通过第2阶段。快去吧，前往第3阶段。");
	cm.safeDispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");

    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}