var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.sendNext("怎么去了这么久？！你最好没在翻我的东西！\r\n\r\n#b#L0#我没有，但我在上面药箱旁边发现了这封信...是一个叫克罗米勒的人写的。#l");
    } else if (status == 1) {	
        qm.sendNext("什么？！谁让你碰那个的？！");
    } else if (status == 2) {
        qm.introEnableUI(1);
        qm.sendPlayerToNpc("又是和老头子在一起的美好一天...");
        while (qm.getPlayer().getLevel() < 4)
            qm.getPlayer().levelUp();
        qm.getPlayer().setExp(0);
    } else if (status == 3) {
        qm.sendPlayerToNpc("嗯？那是什么？");
    } else if (status == 4) {
        qm.forceCompleteQuest();
        qm.dispose();
        qm.mihileSoul();
    }
}