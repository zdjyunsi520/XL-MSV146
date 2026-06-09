var baseid = 221040000;
var dungeonid = 221040001;

function enter(pi) {
try {
    if (pi.getMapId() == baseid) {
		if (pi.getParty() != null) {
			if (pi.isLeader()) {
				if (pi.getPlayerCount(dungeonid) == 0) {
					pi.warpParty(dungeonid);
					return;
				}
			} else {
				pi.playerMessage(5, "你不是队伍的队长。");
			}
		} else {
			if (pi.getPlayerCount(dungeonid) == 0) {
				pi.warp(dungeonid);
				return;
			}
		}
		pi.playerMessage(5, "所有迷你地下城目前都在使用中，请稍后再试。");
    } else {
		pi.playPortalSE();
		pi.warp(baseid, "MD00");
    }
} catch (e) {
    pi.playerMessage("Error: " + e);
}
}