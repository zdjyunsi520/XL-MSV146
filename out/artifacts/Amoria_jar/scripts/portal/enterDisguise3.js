function enter(pi) {
    if (pi.getQuestStatus(20301) == 1 ||
	pi.getQuestStatus(20302) == 1 ||
	pi.getQuestStatus(20303) == 1 ||
	pi.getQuestStatus(20304) == 1 ||
	pi.getQuestStatus(20305) == 1) {
	if (pi.getPlayerCount(913002200) == 0) {
	    if (pi.haveItem(4032179, 1)) {
		pi.removeNpc(913002200, 1104100);
		var map = pi.getMap(913002200);
		map.killAllMonsters(false);
		map.spawnNpc(1104100, new java.awt.Point(263, 88));
		pi.warp(913002200, 0);
	    } else {
		pi.playerMessage("你没有艾利温搜查令，请从奈因哈特那里获取。");
	    }
	} else {
	    pi.playerMessage("这片森林已经有其他人在搜索了，请稍后再来。");
	}
    } else {
	pi.warp(130010110, 0);
    }
}