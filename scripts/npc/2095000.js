function action(mode, type, selection) {
    if (cm.getQuestStatus(6410) == 1) {
	cm.forceStartQuest(6411, "p2");
	cm.sendNext("谢谢你！");
    } else {
	cm.sendNext("请，解救这些怪物！");
    }
    cm.dispose();
}