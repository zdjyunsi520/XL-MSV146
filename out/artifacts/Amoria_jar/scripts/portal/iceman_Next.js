function enter(pi) {
try {
	if (pi.getPlayer().getParty() != null && pi.getMap().getMonsterById(9300438) == null && pi.isLeader()) {
		//if (pi.getPlayer().getEventInstance() != null) {
		//	pi.warpParty_Instanced(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		//} else {
			pi.warpParty(((pi.getPlayer().getMapId() / 100) + 1) * 100 - (pi.getPlayer().getMapId() % 100));
		//}
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"请让队长进入此传送门，并确保冰骑士在这里。");
	}
} catch (e) {
	pi.playerMessage(5, "Error: " + e);
}
}