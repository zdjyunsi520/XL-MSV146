function enter(pi) {
    if (pi.getQuestStatus(6153) == 1) {
	if (!pi.haveItem(4031471)) {
	    if (pi.haveItem(4031475)) {
		var em = pi.getEventManager("4jberserk");
		if (em == null) {
		    pi.playerMessage("由于未知原因你无法进入，请重试。" );
		} else {
		    em.startInstance(pi.getPlayer());
		    return true;
		}
	    // start event here
	    // if ( ret != 0 ) target.message( "其他角色正在进行任务，请稍后再试。" );
	    } else {
		pi.playerMessage("进入需要遗忘神殿的钥匙。");
	    }
	} else {
	    pi.playerMessage("塞拉姆已经有了护盾。");
	}
    } else {
	pi.playerMessage("你不能进入被封印的地方。");
    }
    return false;
}