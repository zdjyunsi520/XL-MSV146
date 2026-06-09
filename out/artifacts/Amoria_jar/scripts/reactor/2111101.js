/*
Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnChaosZakum(-10, -215);
    rm.mapMessage("混沌扎昆被火焰之眼的力量召唤出来了。");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
