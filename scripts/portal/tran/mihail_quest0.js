function enter(pi) {
    var map = 0;
    if (pi.getQuestStatus(20774) == 1) {
        map = 913070330;
    } else if (pi.getQuestStatus(20775) == 1 || pi.getQuestStatus(20776) == 1) {
        map = 913070340;
    }
    if (map > 0) {
        if (pi.getPlayerCount(map) == 0) {
            var mapp = pi.getMap(map);
            mapp.resetFully();
            mapp.respawn(true);
            pi.warp(map, 0);
        } else {
            pi.playerMessage("已经有人在这个地图里了。");
        }
    } else {
        pi.playerMessage("你现在还不能进入。");
    }
}