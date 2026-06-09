function enter(pi) {
	if (pi.isQuestActive(22583)) {
	    pi.forceCompleteQuest(22583);
	    pi.playerMessage(5, "自由精灵已释放。");
	}
	if (pi.isQuestActive(22584)) {
	    pi.forceCompleteQuest(22584);
	    pi.playerMessage(5, "门锁已被破坏。");
	}
	pi.warp(220011001,0);
 	pi.playPortalSE();
}