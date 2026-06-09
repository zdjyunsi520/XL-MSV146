/**
	Orange Balloon - LudiPQ 2nd stage NPC
**/

var status;
var exp = 2520;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    var stage2status = eim.getProperty("stage2status");
    
    if (stage2status == null) {
	if (cm.isLeader()) { // Leader
	    var stage2leader = eim.getProperty("stage2leader");
	    if (stage2leader == "done") {

		if (eim.getProperty("stage2").equals("10")) { // Clear stage
		    cm.sendNext("恭喜！你已通过第2阶段。快去吧，前往第3阶段。");
		    cm.removeAll(4001022);
		    clear(2, eim, cm);
		    cm.givePartyExp(2520);
		    cm.dispose();
		} else { // Not done yet
		    cm.sendNext("你确定带来了#r10张次元通行证#k吗？请再检查一遍。");
		}
		cm.dispose();
	    } else {
		cm.sendOk("欢迎来到第2阶段。在地图中四处寻找，从箱子中收集#r次元通行证#k。小心，其中一个箱子会将你引入陷阱。完成后，让所有队员将#r通行证#k交给你，然后再和我说话。");
		eim.setProperty("stage2leader","done");
		cm.dispose();
	    }
	} else { // Members
	    cm.sendNext("欢迎来到第2阶段。在地图中四处寻找，从箱子中收集#r次元通行证#k。小心，其中一个箱子会将你引入陷阱。完成后，将所有#r通行证#k交给你们的队长。");
	    cm.dispose();
	}
    } else {
	cm.sendNext("恭喜！你已通过第2阶段。快去吧，前往第3阶段。");
	cm.dispose();
    }
}

function clear(stage, eim, cm) {
    eim.setProperty("stage" + stage.toString() + "status","clear");
    
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
    cm.environmentChange(true, "gate");
}