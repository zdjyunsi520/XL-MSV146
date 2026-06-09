function enter(pi) {
try {
	var em = pi.getEventManager("AswanOffSeason");
	switch(pi.getMapId()) {
		case 955000100:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.prepareAswanMob(955000200, em);
				pi.warp(955000200,0);
				pi.showEffect(false, "aswan/stageEff/stage");
				pi.showEffect(false, "aswan/stageEff/number/2");
			 } else {
				pi.playerMessage(5, "你不能通过！在消灭所有怪物之前不得继续前进！");
			}
			break;
		case 955000200:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.prepareAswanMob(955000300, em);
				pi.warp(955000300,0);
				pi.showEffect(false, "aswan/stageEff/final");
			} else {
				pi.playerMessage(5, "你不能通过！在消灭所有怪物之前不得继续前进！");
			}
			break;
}
} catch (e) {
	pi.playerMessage(5, "Error: " + e);
}
}