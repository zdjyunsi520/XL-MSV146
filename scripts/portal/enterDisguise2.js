function enter(pi) {
    if (pi.getQuestStatus(20301) == 1 ||
	pi.getQuestStatus(20302) == 1 ||
	pi.getQuestStatus(20303) == 1 ||
	pi.getQuestStatus(20304) == 1 ||
	pi.getQuestStatus(20305) == 1) {
	if (pi.getPlayerCount(913002100) == 0) {
	    if (pi.haveItem(4032179, 1)) {
		pi.removeNpc(913002100, 1104102);
		var map = pi.getMap(913002100);
		map.killAllMonsters(false);
		map.spawnNpc(1104102, new java.awt.Point(3307, 88));
		pi.warp(913002100, 0);
	    } else {
		pi.playerMessage("你没有艾利温搜查令，请从奈因哈特那里获取。");
	    }
	} else {
	    pi.playerMessage("这片森林已经有其他人在搜索了，请稍后再来。");
	}
    } else {
	pi.warp(130010020, "out00");
    }
}