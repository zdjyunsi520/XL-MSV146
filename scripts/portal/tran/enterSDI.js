function enter(pi) {
    if (pi.isQuestActive(22588)) {
	pi.forceCompleteQuest(22588);
	pi.forceCompleteQuest(22589);
	pi.playerMessage(5, "去和里本港的奥拉夫对话，前往沉睡龙之岛！");
    }
}