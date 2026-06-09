function enter(pi) {
    pi.warp(100040000,0);
    pi.playPortalSE();
    if (pi.isQuestActive(22557)) {
	pi.forceCompleteQuest(22557);
	pi.playerMessage(5, "卡米拉已获救！");
	pi.getPlayer().gainSP(1);
    }
}