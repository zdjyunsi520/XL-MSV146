function action(mode, type, selection) {
	if (cm.getMap().getAllMonstersThreadsafe().size() != 0) {
		cm.sendNext("求求你！摧毁冰骑士！");
	} else {
		cm.warpParty(932000400,0);
	}
    cm.dispose();
}