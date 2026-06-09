
var status = -1;

function start(mode, type, selection) {
        if (mode == -1) {
            qm.dispose();
        } else {
            if (mode == 1)
                status++;
            else
                status--;

            if (status == 0) {
                qm.sendNext("幻影！是你吗！");
            } else if (status == 1) {
                qm.sendNextPrev("你看起来相当强大。");
            } else if (status == 2) {
                qm.sendNextPrev("但想要进去，先踏过我的尸体再说");
            } else if (status == 3) {
                qm.sendSimple("过来吧，宝贝。哈哈哈哈哈");
            } else if (status == 4) {
                qm.forceStartQuest();
                qm.dispose();
            } 
        }
}

function end(mode, type, selection) {
}