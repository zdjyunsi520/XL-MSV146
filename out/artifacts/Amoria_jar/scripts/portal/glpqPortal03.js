function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 400) {
	pi.warp(610030530,0);
    } else {
	pi.playerMessage(5, "只有飞侠才能进入这个传送门。");
    }
}