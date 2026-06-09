function enter(pi) {
	try {
    var em = pi.getEventManager("Juliet");
    if (em != null && em.getProperty("stage5").equals("2")) {
	pi.warp(926110300,0);
    } else {
	pi.playerMessage(5, "传送门还没有开启。");
    }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "Error: " + e);
 }
}