function action(mode, type, selection) {
    if (cm.isQuestActive(2166)) {
	cm.forceCompleteQuest(2166);
	cm.sendOk("你感受到了石头中蕴含的力量。");
    }
    cm.dispose();
}