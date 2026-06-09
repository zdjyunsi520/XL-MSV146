function enter(pi) {
    if (pi.getQuestStatus(6134) == 1) {
	var em = pi.getEventManager("s4resurrection2");
	if (em == null) {
	    pi.playerMessage("由于未知原因你无法进入，请重试。");
	} else {
	    var prop = em.getProperty("started");
	    if (prop == null || prop.equals("false")) {
		em.startInstance(pi.getPlayer());
		return true;
	    } else {
		pi.playerMessage("已经有人在执行任务了。");
	    }
	}
    } else {
	pi.playerMessage("你不能进入被封印的地方。");
    }
    return false;
}