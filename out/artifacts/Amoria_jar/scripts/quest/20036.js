var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("这是一个重要的决定。");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0)
        qm.sendNext("你现在看到了吧，奈因哈特？");
    else if (status == 1)
        qm.sendNextPrevS("我想女皇是对的。你必须学习成为一名真正骑士的方式，店主。你用扫帚的技巧在战场上可帮不了你。", 0, 0, 1106000);
    else if (status == 2)
        qm.sendNextPrevS("我的父亲是光明骑士？那是什么意思？我只是一个普通的孩子...", 2);
    else if (status == 3)
        qm.sendAcceptDecline("选择权在你手中。聆听你内心的声音。命运的声音会引导你走上正确的道路。为了你自己的灵魂，也为了这个世界的利益...\r\n你愿意跟我走吗？");
    else if (status == 4) {
        qm.sendNextS("你需要一个名字。叫什么好呢...#b'米哈逸'#k怎么样？意思是'光之化身'？我觉得最终它会很适合你。我们去埃雷布吧。灿烂的新生活在等着你。", 1);
        qm.gainItem(1302182,1);
        qm.gainItem(1052444,1);
        qm.expandInventory(1, 4);
        qm.expandInventory(2, 4);
        qm.expandInventory(4, 4);
    } else if (status == 5) {
        qm.changeJob(5100);
        qm.forceCompleteQuest();
        qm.warp(913070071);
        qm.dispose();
    }
}