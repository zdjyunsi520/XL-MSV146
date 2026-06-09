// Portal script for Custom MV PQ
// Removed in ver. 1.9 and replaced with the official GMS portal in 2.0 :o
function enter(pi) {
	try {
	if (pi.isLeader() && pi.haveItem(4032248, 17)) {
	if (pi.getPlayer().getParty() != null) {
		pi.warpParty(674030200, 0);
		pi.mapMessage(5, "敲碎岩石并击败MV！");
		pi.removeAll(4032248);
	} else {
		pi.changeMap(674030200, 0);
		pi.playerMessage(5, "敲碎岩石并击败MV！");
		pi.removeAll(4032248);
	}
	} else {
		pi.playerMessage(5, "确保你是队伍队长并拥有17张地图通往MV的巢穴。");
	}
	} catch (e) {
		pi.playerMessage("Error: " + e);
	}
}