var status = -1;

function start() {
    cm.askAcceptDecline("你毁掉了我所有的心血，现在居然直接面对我。\r\n\r\n#r我倒应该感谢你。如果不是你费尽心机毁掉了我毕生的杰作，我在毁灭你之前可能还会感到一丝愧疚。#k");
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
        cm.removeNpc(cm.getMapId(), 2144010);
        cm.spawnMob(8860010, 0, -181);
        if (!cm.getPlayer().isGM()) {
            cm.getMap().startSpeedRun();
        }
    }
    cm.dispose();
}