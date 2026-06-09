function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnEasyZakum(-10, -215);
    rm.mapMessage("扎昆模拟器响应了[火焰之眼碎片]。");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}