function enter(pi) {
    try {
	if (pi.isQuestActive(22596)) {
		pi.forceCompleteQuest(22596);
		pi.getPlayer().gainAp(5);
		pi.playerMessage(5, "伊贝奇逃跑了！获得了5点AP！");
	}
	pi.warp(922030000,0);
    } catch (e) {
	pi.playerMessage(5, "错误，请在论坛报告： " + e);
    }
}