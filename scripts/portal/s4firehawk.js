function enter(pi) {
    if (pi.getQuestStatus(6240) == 1 || pi.getQuestStatus(6241) == 1) {
	if (!pi.haveItem(4001113)) {
	    if (pi.getPlayerCount(921100200) == 0) {
		pi.playPortalSE();
		pi.warp(921100200, 0);
		return true;
	    } else {
		pi.playerMessage("其他角色正在执行任务，你无法进入。");
	    }
	} else {
	    pi.playerMessage("你已经有凤凰之蛋了，无法进入。");
	}
    } else if (pi.getQuestStatus(6240) == 2 && pi.getQuestStatus(6241) == 0) {
	if (!pi.haveItem(4001113)) {
	    pi.playPortalSE();
	    pi.warp(921100200, 0);
	    return true;
	} else {
	    pi.playerMessage("你已经有凤凰之蛋了，无法进入。" );
	}
    } else {
	pi.playerMessage("你不能进入被封印的地方。");
    }
    return false;
}