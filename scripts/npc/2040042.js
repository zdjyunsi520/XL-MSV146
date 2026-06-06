/*
	Sky-Blue Balloon - LudiPQ 7th stage NPC
**/

var status;
var exp = 4620;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage7status = eim.getProperty("stage7status");

    if (stage7status == null) {
	if (cm.isLeader()) { // Leader
	    var stage7leader = eim.getProperty("stage7leader");
	    if (stage7leader == "done") {

		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) { // Clear stage
		    cm.sendNext("恭喜！你已通过第4阶段。快去吧，前往第5阶段。");
		    cm.removeAll(4001022);
		    clear(7, eim, cm);
		    cm.givePartyExp(exp, eim.getPlayers());
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("你确定已经消灭了所有的隆波机器人吗？请再检查一遍。");
		}
		cm.dispose();
	    } else {
		cm.sendOk("欢迎来到第4阶段。在地图中四处寻找，消灭#b隆波机器人#k。完成后，让所有队员将#r通行证#k交给你，然后再和我说话。");
		eim.setProperty("stage7leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第4阶段。在地图中四处寻找，召唤并消灭#b隆波机器人#k来收集#r次元通行证#k。完成后，将所有#r通行证#k交给你们的队长。");
	    cm.dispose();
	}
    } else {
	cm.sendNext("恭喜！你已通过第4阶段。快去吧，前往第5阶段。");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}