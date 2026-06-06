function enter(pi) {
    if (pi.getPlayer().getIntNoRecord(251003) == 1) {
        pi.warp(915010001, "out00");
    } else {
        pi.playerMessage("我必须先通过那个锁。");
    }
    return true;
}