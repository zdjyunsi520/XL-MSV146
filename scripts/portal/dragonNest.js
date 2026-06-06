function enter(pi) {
    if (pi.haveItem(4001094)) {
	if (pi.getQuestStatus(3706) > 0) {
	    if (pi.getPlayerCount(240040611) == 0) {
		pi.removeNpc(240040611, 2081008);
		pi.resetMap(240040611);
		pi.playPortalSE();
		pi.warp(240040611, "sp");
	    } else {
		pi.playerMessage(5, "已经有其他人在里面尝试完成任务了，请稍后再试。");
	    }
	} else {
	    pi.playerMessage(5, "你还没有开始这个任务，请稍后再试。");
	}
    } else {
	pi.playerMessage(5, "要进入该区域，你需要持有九灵之蛋。");
    }
}