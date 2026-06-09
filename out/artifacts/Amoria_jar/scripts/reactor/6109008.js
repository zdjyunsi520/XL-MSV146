function act() {
	var em = rm.getEventManager("CWKPQ");
	if (em != null) {
		rm.mapMessage(6, "一把武器已被归还到精通遗物！");
		em.setProperty("glpq5", parseInt(em.getProperty("glpq5")) + 1);
		if (em.getProperty("glpq5").equals("5")) { //all 5 done
			rm.mapMessage(6, "蚁祖授予你进入下一个传送门的权限！前进！");
			rm.getMap().changeEnvironment("5pt", 2);
		}
	}
}