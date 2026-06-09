function enter(pi) {
    if (pi.getQuestStatus(23033) == 1 || pi.getQuestStatus(23034) == 1 || pi.getQuestStatus(23035) == 1) {
	if (pi.getPlayerCount(931000200) == 0) {
		var map = pi.getMap(931000200);
		map.resetFully();
		pi.warp(931000200, 0);
	} else {
	    pi.playerMessage("其他人正在搜索中，请稍后再来。");
	}
    }
}