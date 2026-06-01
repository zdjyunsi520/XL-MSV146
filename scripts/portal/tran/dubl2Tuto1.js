function enter(pi) {

    if (pi.getQuestStatus(2601) == 2) {

	pi.playPortalSE();

	pi.warp(103050920, 1);

    } else {

	pi.playerMessage(5, "在前往下一个地图之前，你必须先接受任务。");
    }

}