function enter(pi) {
	if (pi.haveItem(1002971,1)) {
		pi.warp(980040010,0);
 		pi.playPortalSE();
	} else {
		pi.playerMessage(5, "进入前需要粉色豆子帽子。");
	}
}