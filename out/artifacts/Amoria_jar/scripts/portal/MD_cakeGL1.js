var baseid = 683000000;
var dungeonid = 683000100;
var dungeons = 10;

function enter(pi) {
try {
    if (pi.getMapId() == baseid) {
	if (pi.getParty() != null) {
	    if (pi.isLeader()) {
		for (var i = 0; i < dungeons; i++) {
		    if (pi.getPlayerCount(dungeonid + i) == 0) {
			pi.warpParty(dungeonid + i);
			return;
		    }
		}
	    } else {
		pi.playerMessage(5, "你不是队伍的队长。");
	    }
	} else {
	    for (var i = 0; i < dungeons; i++) {
		if (pi.getPlayerCount(dungeonid + i) == 0) {
		    pi.warp(dungeonid + i);
		    return;
		}
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