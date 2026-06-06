function start() {
    cm.sendSimple("快去上学吧！\r\n#L0#去上学#l\r\n#L1#查看我的好感状态#l");
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    switch (selection) {
        case 0:
            //cm.warp();
            cm.dispose();
            break;
        case 1:
            cm.sendRedLeaf(true, false);
            cm.dispose();
            break;
    }
}