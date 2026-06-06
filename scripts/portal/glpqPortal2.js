function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	pi.warpS(610030300, 0);
	if (!em.getProperty("glpq3").equals("10")){
	    em.setProperty("glpq3", parseInt(em.getProperty("glpq3")) + 1);
	    pi.mapMessage(6, "一名冒险者通过了！");
	    if (em.getProperty("glpq3").equals("10")) {
		pi.mapMessage(6, "蚁祖授予你进入下一个传送门的权限！前进！");
		pi.getMap().changeEnvironment("3pt", 2);
	    }
	}
    }
}