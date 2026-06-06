var state;

function start() {
    state = -1;
    cm.sendNextS("看看我的轻蔑名单里有谁……啊，兰花！我们去参观她的农场吧。", 5);
}

function action(mode, type, selection) {
    state++;
    switch (state) {
        case 0:
            cm.sendNextS("当窗口弹出时，按确定即可移动。", 5);
            break;
        case 1:
            cm.enter_931060120();
            break;
        case 2:
            cm.sendNextS("如果你按否，那我想我们的关系就到此为止了。", 5);
            break;
        case 3:
            cm.sendNextPrevS("你都听清楚了吗？我讨厌重复解释。\r\n（按是返回你原来的位置。）", 5);
            break;
        case 4:
            cm.sendYesNoS("你都听清楚了吗？我讨厌重复解释。\r\n（按是返回你原来的位置。）", 5);
            break;
        case 5:
            if (mode == 1) {
                cm.warp(getSavedLocation("TUTORIAL"));
            } else {
                cm.warp(931060120);
            }
            break;
    }
}