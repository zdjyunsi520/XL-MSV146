var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.forceStartQuest();
        qm.dispose();
    }
}


function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.dispose();
        return;
    }
    if (status == 0) {
        if (qm.getPlayer().getLevel() <= 3) {
            qm.forceStartQuest();
            qm.dispose();
            return;
        }
        qm.sendNext("你打扫完了没有？我猜这里看起来勉强\r\n还算体面。你在看什么？去整理书架！");
    } else if (status == 1) {
        while (qm.getPlayer().getLevel() < 6)
            qm.getPlayer().levelUp();
        qm.getPlayer().setExp(0);
        qm.gainItem(2000000, 20);
        qm.gainItem(2000003, 20);
        qm.forceCompleteQuest();
        qm.warp(913070003, 0);
        qm.dispose();
    }
}

