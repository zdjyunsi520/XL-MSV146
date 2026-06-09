function enter(pi) {
    var em = pi.getEventManager("QueenBattle");
	var em = pi.getEventManager("PierreBattle");

    if (em != null) {
	var map = pi.getMapId();
    
	if (map == 105200110) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
			//	pi.getPlayer().gainExp(30000, true, true, true);
			//	pi.getPlayer().addHonourExp(100 * pi.getPlayer().getHonourLevel());
			//	pi.getPlayer().dropMessage(5, 100 * pi.getPlayer().getHonourLevel()+"荣誉经验值已获得。");
				pi.warp(105200000,0);
			//	pi.spawnMonster(8810025, 1, new java.awt.Point(-303, 230));
			    pi.playerMessage("你还没有准备好挑战地龙贝伦...");
			//	pi.worldMessage(6, "[阿斯旺] " + pi.getPlayer().getName() + "完成了希拉帮派的阿斯旺解放，在频道 "+ pi.getClient().getChannel() +".");
			 } else { 
		//	 pi.gainExp(45000000);
		pi.playerMessage(6, "恭喜击败了[普通]冯·波恩。");
		pi.warp(105200000,0);
	    }
	} else if (map == 105200510) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
			//	pi.getPlayer().gainExp(30000, true, true, true);
			//	pi.getPlayer().addHonourExp(100 * pi.getPlayer().getHonourLevel());
			//	pi.getPlayer().dropMessage(5, 100 * pi.getPlayer().getHonourLevel()+"荣誉经验值已获得。");
				pi.warp(105200000,0);
				pi.playerMessage("没关系，记住整个GM团队才制服了这些家伙");
			//	pi.worldMessage(6, "[阿斯旺] " + pi.getPlayer().getName() + "完成了希拉帮派的阿斯旺解放，在频道 "+ pi.getClient().getChannel() +".");
			 }
	        else {
	//    pi.gainExp(45000000);
		pi.playerMessage(6, "恭喜击败了[普通]冯·波恩。");
		pi.warp(105200000,0);
	    }
    }
}
}