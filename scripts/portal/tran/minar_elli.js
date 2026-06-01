function enter(pi) {
try {
    if (pi.haveItem(4031346)) {
	if (pi.getMapId() == 240010100) {
	    pi.playPortalSE();
	    pi.warp(101030100, "minar00");
	} else {
	    pi.playPortalSE();
	    pi.warp(240010100, "elli00");
	}
	pi.gainItem(4031346, -1);
	pi.playerMessage("魔法之种已消耗，你被传送到了某处。");
	return true;
    } else {
	pi.playerMessage("需要魔法之种才能通过传送门。");
	return false;
    }
} catch (e) {
    pi.playerMessage("Error: " + e);
}
}
