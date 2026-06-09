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
        if (qm.itemQuantity(4033196) >= 10)
            qm.sendNext("鸡蛋呢？我叫你去拿鸡蛋的。如果你打碎了...等等，你发生了什么事？\r\n\r\n#b#L0#嗯，那个，你知道你叫我别碰比格比的吧？嗯...我有点...它跑出来了。#l");
        else {
            qm.forceStartQuest();
            qm.dispose();
        }
    } else if (status == 1) {	
        qm.sendNext("什么？！我对天发誓，如果你在天黑前没把那条狗弄回院子里，你就饿着吧。");
    } else if (status == 2) {
        qm.gainItem(4033196, -10);
        while (qm.getPlayer().getLevel() < 8)
            qm.getPlayer().levelUp();
        qm.getPlayer().setExp(0);
        qm.forceCompleteQuest();
        qm.warp(913070004, 0);
        qm.dispose();
    }
}