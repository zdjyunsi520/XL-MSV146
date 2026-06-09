function enter(pi) {
    if (pi.getQuestStatus(20601) == 1 || pi.getQuestStatus(20602) == 1 || pi.getQuestStatus(20603) == 1 || pi.getQuestStatus(20604) == 1 || pi.getQuestStatus(20605) == 1) {
	if (pi.getPlayerCount(913010200) == 0) {
	    var map = pi.getMap(913010200);
	    map.killAllMonsters(false);
	    map.respawn(true);
	    pi.warp(913010200, 0);
	} else {
	    pi.playerMessage("已经有人在挑战BOSS了，请稍后再来。");
	}
    } else {
	pi.playerMessage("只有修炼100级技能的人才能进入大厅#3。");
    }
}