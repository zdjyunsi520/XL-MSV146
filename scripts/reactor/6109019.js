function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "飞侠封印已被激活！");
		em.setProperty("glpq4", parseInt(em.getProperty("glpq4")) + 1);
		if (em.getProperty("glpq4").equals("5")) { //all 5 done
			rm.mapMessage(6, "蚁祖授予你进入下一个传送门的权限！前进！");
			rm.getMap().changeEnvironment("4pt", 2);
		}
	}
}