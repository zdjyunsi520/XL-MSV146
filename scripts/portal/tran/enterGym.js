function enter(pi) {
    if (pi.getQuestStatus(21701) == 1) {
	pi.playPortalSE();
	pi.warp(914010000, 1);
    } else if (pi.getQuestStatus(21702) == 1) {
	pi.playPortalSE();
	pi.warp(914010100, 1);
    } else if (pi.getQuestStatus(21703) == 1) {
	pi.playPortalSE();
	pi.warp(914010200, 1);
    } else {
	pi.playerMessage(5, "只有接受普奥的课程时，才能进入企鹅训练场。");
    }
}