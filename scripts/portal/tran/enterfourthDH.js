function enter(pi) {
    if (pi.getQuestStatus(20611) == 1 || pi.getQuestStatus(20612) == 1 || pi.getQuestStatus(20613) == 1 || pi.getQuestStatus(20614) == 1 || pi.getQuestStatus(20615) == 1) {
	if (pi.getPlayerCount(913020300) == 0) {
	    var map = pi.getMap(913020300);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913020300, 0);
	} else {
	    pi.playerMessage("已经有人在挑战BOSS了，请稍后再来。");
	}
    } else {
	pi.playerMessage("大厅#4只对修炼110级技能的人开放。");
    }
}