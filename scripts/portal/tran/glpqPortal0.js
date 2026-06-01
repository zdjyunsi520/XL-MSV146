function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (em.getProperty("glpq1").equals("1")) {
	    em.setProperty("glpq1", "2");
	    pi.warp(pi.getMapId(), 0);
	    pi.mapMessage("[远征队]一名冒险者穿过了传送门！");
	} else if (em.getProperty("glpq1").equals("2")){
	    pi.warp(610030200, 0);
	} else {
	    pi.playerMessage(5, "请确保队长已向杰克说明情况！");
	}
    }
}