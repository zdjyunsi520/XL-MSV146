function enter(pi) {
    if (pi.isQuestActive(22556)) {
	pi.playerMessage(5, "调查完成！");
	pi.forceCompleteQuest(22556);
    }
    pi.warp(910600010,0);
}