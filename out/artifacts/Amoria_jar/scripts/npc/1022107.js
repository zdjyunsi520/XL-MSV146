function action(mode, type, selection) {
	if (cm.isQuestActive(22530)) {
		if (!cm.canHold(1952000,1)) {
			cm.sendOk("你需要背包空间……");
		} else {
			cm.forceCompleteQuest(22530);
			cm.gainExp(710);
			cm.gainItem(1952000,1);
			cm.getPlayer().gainSP(1, 1);
			cm.sendOk("你检查了标牌。完成了卫兵的请求。");
		}
	} else {
		cm.sendOk("这是一块标牌。");
	}
	cm.dispose();
}