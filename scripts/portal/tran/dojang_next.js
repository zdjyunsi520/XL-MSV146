function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("还有一些怪物没有被消灭。");
    } else {
	pi.dojoAgent_NextMap(true, false);
    }
}