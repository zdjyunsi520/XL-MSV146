function enter(pi) {
    var em = pi.getEventManager("CWKPQ");
    if (em != null) {
	if (!em.getProperty("glpq4").equals("5")){
	    pi.playerMessage("传送门还没有开启。");
	} else {
	    pi.warp(610030500, 0);
	}
    }
}