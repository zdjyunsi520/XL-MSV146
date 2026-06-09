function enter(pi) {
    if (pi.isQuestActive(3164)) {
	pi.forceCompleteQuest(3164);
	pi.playerMessage("任务完成。");
    }
    pi.warp(211060201,0);
}