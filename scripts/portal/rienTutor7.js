function enter(pi) {
    if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
	pi.playPortalSE();
	pi.warp(140010100, 2);
    } else {
	pi.playerMessage(5, "利恩镇在右边。走右边的传送门进入镇子去找莉莉。");
    }
}