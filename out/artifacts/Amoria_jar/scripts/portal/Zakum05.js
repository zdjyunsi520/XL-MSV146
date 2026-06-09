/*
    Zakum Entrance
*/

function enter(pi) {
    if (pi.getQuestStatus(100200) != 2) {
	pi.playerMessage(5, "你还没有准备好面对BOSS。");
	return false;

    } else if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "你没有火焰之眼，无法面对BOSS。");
	return false;
    }
    
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}