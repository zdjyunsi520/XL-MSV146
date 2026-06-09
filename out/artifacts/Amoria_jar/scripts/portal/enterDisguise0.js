function enter(pi) {
    if (pi.getJob() >= 1000) {
	if (pi.haveItem(4032179)) { // Search warrent
	    pi.playerMessage("艾利温搜索开始了。");
	}
	pi.playPortalSE();
	pi.warp(130010000, 3);
    } else {
	pi.playerMessage("只有女皇骑士才能进入。");
    }
}