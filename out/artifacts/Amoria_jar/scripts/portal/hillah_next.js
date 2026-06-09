function enter(pi) {
	switch(pi.getMapId()) {
		case 262031100:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.warpParty(262031200, 0);
			 } else {
				pi.playerMessage(5, "传送门被锁住了！消灭所有封锁传送门的希拉守卫！");
			}
			break;
		case 262031200:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.warpParty(262031300, 0);
			} else {
				pi.playerMessage(5, "传送门被锁住了！消灭所有封锁传送门的希拉守卫！");
			}
			break;
	}
}