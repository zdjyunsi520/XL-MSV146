function action(mode, type, selection) {
    cm.sendNext("这就是被封印的雷克斯。");
    if (cm.isQuestActive(3122)) {
	cm.forceStartQuest(3122, "1");
    }
    cm.dispose();
}