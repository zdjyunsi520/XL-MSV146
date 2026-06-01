function enter(pi) {
    if (!pi.isLeader()) {
	pi.playerMessage(5, "队长必须在这里");
    } else {
	if (pi.getMap().getAllMonstersThreadsafe().size() != 0) {
	    pi.playerMessage(5, "请消灭所有怪物！");
	    return;
	}
	if (((pi.getMapId() % 10) | 0) == 4) { //last stage
	    //if (pi.getMap().getReactorByName("switch0").getState() < 1 || pi.getMap().getReactorByName("switch1").getState() < 1) {
		//pi.playerMessage(5, "两个开关都必须打开。（开关0： " + (pi.getMap().getReactorByName("switch0").getState()) + ") （开关1： " + (pi.getMap().getReactorByName("switch1").getState()) + ")");
		//return;
	    //}
	    var bossroom = pi.getMapId() + 66;//90-14 = 76, 90-24=66
	    if (((bossroom % 100) | 0) != 90) {
		bossroom += 10;
	    }
	    pi.warpParty(bossroom, 0);
	} else {
	    pi.warpParty(pi.getMapId() + 1, ((pi.getMapId() % 10) | 0) == 3 ? 1 : 2);
	}
    }
}