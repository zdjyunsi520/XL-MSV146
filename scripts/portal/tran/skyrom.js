function enter(pi) {
    if (pi.isQuestActive(3935)) {
	pi.forceCompleteQuest(3935);
	pi.playerMessage("任务完成。");
    }
}