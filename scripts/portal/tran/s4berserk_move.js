function enter(pi) {
    var num = pi.getMap(910500200).getSpawnedMonstersOnMap();

    if (num <= 0) {
	pi.playPortalSE();
	pi.warp(910500200, "pt00");
	return true;
    }
    pi.playerMessage("传送门现在被封印了。");
    return true;
}