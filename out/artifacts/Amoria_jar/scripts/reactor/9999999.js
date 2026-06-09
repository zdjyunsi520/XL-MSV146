/*
Zakum Altar - Summons Zakum. 9999999
*/

function act() {
	rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("粉色扎昆被火焰之眼的力量召唤出来了。");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
