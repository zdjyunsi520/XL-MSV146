function start() {
    cm.sendYesNoS("那么，你真的想离开？", 4);
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(262010000,0);
    }
    cm.dispose();
}