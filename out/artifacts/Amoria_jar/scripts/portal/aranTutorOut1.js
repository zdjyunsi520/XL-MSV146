function enter(pi) {
    if (pi.getQuestStatus(21000) == 0) {
	pi.playerMessage(5, "你只能在接受右侧雅典娜·皮尔斯的任务后才能离开。");
    } else {
	pi.teachSkill(20000017, 0, -1);
	pi.teachSkill(20000018, 0, -1);
	pi.teachSkill(20000017, 1, 0);
	pi.teachSkill(20000018, 1, 0);
	pi.playPortalSE();
	pi.warp(914000200, 1);
    }
}