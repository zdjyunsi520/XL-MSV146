function act() {
	var em = rm.getEventManager("Pirate");
	if (em != null) {
		rm.mapMessage(6, "其中一个箱子已被激活。");
		em.setProperty("stage5", parseInt(em.getProperty("stage5")) + 1);
	}
}