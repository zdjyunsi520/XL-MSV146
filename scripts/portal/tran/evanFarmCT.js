function enter(pi) {
	if(pi.isQuestActive(22010) || pi.getPlayer().getJob() != 2001) {
		pi.warp(100030310);
	} else {
		pi.playerMessage("没有理由不能进入茂密的森林。");
	}
	return true;
}