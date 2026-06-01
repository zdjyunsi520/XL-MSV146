function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 100) {
	pi.warp(610030510,0);
    } else {
	pi.playerMessage(5, "只有战士才能进入这个传送门。");
	//pi.playerMessage(5, "你的职业： " + (((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)));
    }
}