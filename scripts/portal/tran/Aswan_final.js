importPackage(Packages.client);

function enter(pi) {
	switch(pi.getMapId()) {
		case 955000300:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.getPlayer().gainExp(30000, true, true, true);
				pi.getPlayer().addHonourExp(100 * pi.getPlayer().getHonourLevel());
				pi.getPlayer().dropMessage(5, "你获得了 " + 100 * pi.getPlayer().getHonourLevel()+ "荣誉经验值！");
				pi.warp(262010000, 0);
			} else {
				pi.playerMessage(5, "你不能通过！在消灭所有怪物之前不得继续前进！");
			}
			break;
	}
}