var status = 0;

function complete(mode, type, selection) {
    status++;
    switch (status) {
        case 1:
            qm.forceCompleteQuest();
            qm.introEnableUI(1);
            qm.sendNextS("飞船应该在传送门那边。那是我们离开这里的票……如果我们能进去的话。", 9);
            break;
        case 2:
            qm.sendNextPrevS("没有#r主钥匙#k的话，封锁协议是不可能通过的……", 9);
            break;
        case 3:
            qm.sendNextPrevS("主钥匙？！", 3);
            break;
        case 4:
            qm.sendNextPrevS("#b守钥人#k应该有。快在守卫来之前拿到#r主钥匙#k！", 9);
            break;
        case 5:
            qm.topMsg("跟着箭头去守钥人的房间。");
            qm.introEnableUI(0);
            qm.dispose();
            break;
    }
}