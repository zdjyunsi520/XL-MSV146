function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810130, 71, 260);
    rm.mapMessage("洞穴开始震动，混沌暗黑龙王被召唤出来了。");
	//rm.scheduleWarp(43200, 240000000);
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}