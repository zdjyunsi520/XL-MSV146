function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 300) {
	pi.warp(610030540,0);
    } else {
	pi.playerMessage(5, "只有弓箭手才能进入这个传送门。");
    }
}