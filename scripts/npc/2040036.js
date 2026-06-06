/*
	Red Balloon - LudiPQ 1st stage NPC
**/

var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage1status = eim.getProperty("stage1status");

    if (stage1status == null) {
	if (cm.isLeader()) { // Leader
	    var stage1leader = eim.getProperty("stage1leader");
	    if (stage1leader == "done") {

		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) { // Clear stage
		    cm.sendNext("恭喜！你已通过第1阶段。快去吧，前往第2阶段。");
		    cm.removeAll(4001022);
		    clear(1, eim, cm);
		    cm.givePartyExp(2100, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("你确定已经消灭了所有的老鼠吗？");
		}
		cm.dispose();
	    } else {
		cm.sendOk("欢迎来到第1阶段。在地图中四处寻找，从#b老鼠#k和#b黑老鼠#k身上收集#r次元通行证#k。完成后，让所有队员将#r通行证#k交给你，然后再和我说话。");
		eim.setProperty("stage1leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第1阶段。在地图中四处寻找，从#b老鼠#k和#b黑老鼠#k身上收集#r次元通行证#k。完成后，将所有#r通行证#k交给你们的队长。");
	    cm.dispose();
	}
    } else {
	cm.sendNext("恭喜！你已通过第1阶段。快去吧，前往第2阶段。");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}