function enter(pi) {
	try {
    if (pi.getMap().getReactorByName("jnr3_out2").getState() > 0) {
	pi.warp(926110202,0);
    } else {
	pi.playerMessage(5, "传送门还没有开启。");
    }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "Error: " + e);
 }
}