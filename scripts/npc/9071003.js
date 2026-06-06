var status = 0;
var m;

function start() {
    if (cm.getMapId() == 951000000) {
        cm.sendYesNo("想要回去吗？");
        m = 1;
        return;
    }
    cm.sendYesNo("aaa想要去怪物公园吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
        if (m == 1) {
            cm.warp(cm.getSavedLocation("MONSTER_PARK"));
        } else {
            cm.saveReturnLocation("MONSTER_PARK");
            cm.warp(951000000);
        }
    }
    cm.dispose();
}