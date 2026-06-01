function enter(pi) {
    if (pi.getQuestStatus(6242) == 1 || pi.getQuestStatus(6243) == 1) {
	if (!pi.haveItem(4001114)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
		pi.warp(921100210, 0);
		return true;
	    } else {
		pi.playerMessage("其他角色正在执行任务，你无法进入。");
	    }
	} else {
	    pi.playerMessage("你没有冰鹰之蛋，无法进入。");
	}
    } else if (pi.getQuestStatus(6242) == 2 && pi.getQuestStatus(6243) == 0) {
	if (!pi.haveItem(4001114)) {
	    pi.playPortalSE();
	    pi.warp(921100210, 0);
	    return true;
	} else {
	    pi.playerMessage("你没有冰鹰之蛋，无法进入。" );
	}
    } else {
	pi.playerMessage("你不能进入被封印的地方。");
    }
    return false;
}