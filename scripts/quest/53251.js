var status = -1;
function start(mode, type, selection) {
//    if (mode == -1) {
//        qm.dispose();
//    } else {
//        if (mode == 1)
//            status++;
//        else
//            status--;
//        if (status == 0) {
//            qm.sendNext("是你啊，有什么事？",2040050);
//        } else if (status == 1) {
//            qm.sendPlayerToNpc("我想知道是谁给你的那封信！");
//        } else if (status == 2) {
//            qm.sendNext("他是一个穿黑色衣服，有两只眼睛，一个鼻子，两只耳朵……的人……废话！",2040050);
//        } else if (status == 3) {
//            qm.sendPlayerToNpc("别再跟我开玩笑了！告诉我他是谁");
//        } else if (status == 4) {
//            qm.sendNext("我真的不知道啊！为什么要帮你呢？",2040050);
//        } else if (status == 5) {
//            qm.sendPlayerToNpc("对不起。这对我来说真的很重要。");
//        } else if (status == 6) {
//            qm.sendNext("你想见他吗？");//,2040050);
//        } else if (status == 7) {
//            //qm.forceStartQuest();
//            qm.warp(552000074);
//            qm.dispose();
//        }
//    }

}
function end(mode, type, selection) {
    qm.dispose();
}
