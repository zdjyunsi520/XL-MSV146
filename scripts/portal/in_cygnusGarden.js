function enter(pi) {
    if (pi.isQuestActive(31149)) {
	pi.forceCompleteQuest(31149);
	pi.playerMessage("任务完成");
    } else if (pi.haveItem(4032923)) {
	pi.warp(271040000,0);
	pi.gainItem(4032923, -1);
    } else {
	pi.playerMessage("需要梦境之钥才能进入，在@商店购买。");
    }
}