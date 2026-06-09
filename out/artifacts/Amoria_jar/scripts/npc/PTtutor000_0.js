var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("我的心跳加速了！已经很久没有这么感觉活着了。或者说焦虑。我非常焦虑。", 17);
    else if (status == 1)
        cm.sendNextPrevS("如果再站在这里，我就会失去勇气。机不可失，时不再来！", 17);
    else if (status == 2)
        cm.sendNextPrevS("如果再站在这里，我就会失去勇气。机不可失，时不再来！", 17);
    else if (status == 3) {
        cm.introEnableUI(0);
        cm.dispose();
    }
}