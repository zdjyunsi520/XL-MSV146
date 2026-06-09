var status = -1;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        var mapid = cm.getPlayer().getMapId();
        cm.sendYesNo("距离你最近的城镇车站是 #m" + mapid + "#。你想移动到 #b#m" + mapid + "##k?");
    } else if (status == 1) {
        cm.warp(104020100);
        cm.dispose();
    }
}

function getMap(mapid) {
    switch (mapid / 10000000) {
        case 10:
            return 104020100;
        default:
            return 104020100;
    }
}