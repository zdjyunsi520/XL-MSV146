function enter(pi) {
    if (pi.haveItem(4001094)) {
	pi.getMap().getReactorByName("dragonBaby").hitReactor(pi.getClient());
	pi.getMap().getReactorByName("dragonBaby2").hitReactor(pi.getClient());
	pi.playerMessage(5, "九灵之蛋舒适地窝在巢中，发出了神秘的光芒，然后回到了它的巢穴。");
	pi.gainItem(4001094, -1);
    }
}