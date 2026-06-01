function enter(pi) {
    if (!pi.haveItem(4032246)) {
	pi.playerMessage(5, "你没有幻想主题公园之灵。");
    } else {
	pi.openNpc(9270047);
    }
}