function enter(pi) {
	switch(pi.getMapId()) {
		case 930000000:
			pi.warp(930000100,0);
			break;
		case 930000100:
			if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
				pi.warp(930000200,0);
			} else {
				pi.playerMessage(5, "消灭所有怪物。");
			}
			break;
		case 930000200:
			if (pi.getMap().getReactorByName("spine") != null && pi.getMap().getReactorByName("spine").getState() < 4) {
				pi.playerMessage(5, "脊骨挡住了去路。");
			} else {
				pi.warp(930000300,0); //assuming they cant get past reactor without it being gone
			}
			break;
	}
}