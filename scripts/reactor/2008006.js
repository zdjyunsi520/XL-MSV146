
function act() {
    rm.mapMessage(6, "音乐在空中响起。");
	var em = rm.getEventManager("OrbisPQ");
	if (em != null) {
		em.setProperty("stage3", "1");
	}
}