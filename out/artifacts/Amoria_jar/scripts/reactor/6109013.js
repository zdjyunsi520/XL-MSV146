function act() {
	rm.mapMessage(6, "所有蝙蝠已消失。");
	rm.getMap().killAllMonsters(true);
}