function enter(pi) {
    if (java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 200 || java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)) == 199) {
	pi.warp(610030521,0);
    } else {
	pi.playerMessage(5, "只有魔法师才能进入这个传送门。");
	//pi.playerMessage(5, "你的职业： " + java.lang.Math.floor(((pi.getPlayer().getJob() % 1000) / 100) * 100 - (pi.getPlayer().getJob() % 100)));
    }
}