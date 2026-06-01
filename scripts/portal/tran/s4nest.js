function enter(pi) {
    if (pi.getQuestStatus(6241) == 1 || pi.getQuestStatus(6243) == 1) {
	if (pi.getJob() == 312) {
	    if (pi.haveItem(4001113)) {
		if (pi.getPlayerCount(924000100) > 0) {
		    pi.playerMessage("其他角色正在执行任务，你无法进入。");
		    return false;
		}
		var em = pi.getEventManager("s4nest");
		if (em == null) {
		    pi.playerMessage("由于未知原因你无法进入，请重试。" );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    } else {
		pi.playerMessage("你没有凤凰之蛋，无法进入。" );
	    }
	} else if (pi.getJob() == 322) {
	    if (pi.haveItem(4001114)) {
		if (pi.getPlayerCount(924000100) > 0) {
		    pi.playerMessage("其他角色正在执行任务，你无法进入。");
		    return false;
		}
		var em = pi.getEventManager("s4nest");
		if (em == null) {
		    pi.playerMessage("由于未知原因你无法进入，请重试。" );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    } else {
		pi.playerMessage("你没有冰鹰之蛋，无法进入。" );
	    }
	}
    } else {
	pi.playerMessage("你不能进入被封印的地方。");
    }
    return false;
}