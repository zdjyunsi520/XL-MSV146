var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0)
        cm.sendNextS("这个传送门直通耶雷弗。那里肯定到处都是骑士。听起来正合我意。", 17);
    else if (status == 1) {
        cm.warp(915000300, 0);
        cm.dispose();
    }
}