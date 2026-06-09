function enter(pi) {
    var em = pi.getEventManager("QueenBattle");
	var em = pi.getEventManager("PierreBattle");
	var em = pi.getEventManager("QueenEasy");
	var em = pi.getEventManager("PierreEasy");
	

    if (em != null) {
	var map = pi.getMapId();
    
	if (map == 105200310) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
				pi.warp(105200000,0);
			    pi.playerMessage("你这个逃兵...从战斗中逃跑了...");
			 } else { 
		//	 pi.gainExp(12500000);
		     pi.playerMessage("恭喜击败了女王！");
		     pi.warp(105200000,0);
	         }
	} else if (map == 105200210) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
				pi.warp(105200000,0);
				pi.playerMessage("你从战斗中逃跑了");
			 } else {
	  //       pi.gainExp(12500000);
	      	pi.playerMessage("恭喜击败了疯子皮埃尔！");
	    	pi.warp(105200000,0);
	        }
    }
}
}