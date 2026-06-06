function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		if (rm.getMap().getId() == 610030200) {
			rm.mapMessage(6, "战士封印已被激活！");
			em.setProperty("glpq2", parseInt(em.getProperty("glpq2")) + 1);
			if (em.getProperty("glpq2").equals("5")) { //all 5 done
				rm.mapMessage(6, "蚁祖授予你进入下一个传送门的权限！前进！");
				rm.getMap().changeEnvironment("2pt", 2);
			}
		} else if (rm.getMap().getId() == 610030300) {
			rm.mapMessage(6, "战士封印已被激活！ You hear gears turning! The Menhir Defense System is active! Run!");
	    		em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
			rm.getMap().moveEnvironment("menhir0", 1);
	    		if (em.getProperty("glpq3").equals("9")) {
				rm.mapMessage(6, "蚁祖授予你进入下一个传送门的权限！前进！");
				rm.getMap().changeEnvironment("3pt", 2);
	    		}
		}
	}
}