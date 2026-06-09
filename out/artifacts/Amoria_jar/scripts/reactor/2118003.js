function act() {
	rm.getReactor().forceTrigger();
	rm.getReactor().delayedDestroyReactor(1000);
	rm.mapMessage("雷克斯已被召唤。");
	rm.spawnMonster(9300281);
}