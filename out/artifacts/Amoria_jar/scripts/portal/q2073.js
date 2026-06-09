function enter(pi) {
	if (pi.getQuestStatus(2073) == 1) {
		pi.warp(900000000,0);
		return true;
	} else {
		pi.playerMessage(5,"你似乎无法进去...");
		return false;
	}
}