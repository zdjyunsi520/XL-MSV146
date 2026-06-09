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
            qm.sendNext("是你啊 "+qm.getPlayer().getName()+"你给我的那些水晶真好用。");
        } else if (status == 1) {
            qm.sendPlayerToNpc("我需要一把新枪。我已经变强了很多。");
        } else if (status == 2) {
            qm.sendNext("你真不错啊。好吧，帮我找#z4033252##i4033252#，我就帮你。",9270091);
        } else if (status == 3) {
            qm.sendNext("去#m552000073#那些神话被写下的地方……",9270091);
        } else if (status == 4) {
            qm.sendPlayerToNpc("（天哪，不知道这次又会怎样。唉，算了吧）");
        } else if (status == 5) {
            qm.forceStartQuest();
            qm.warp(552000073,1);
            //qm.gainItem(4033252,30);
            qm.dispose();
        } 
    }
}
function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            qm.sendNext("你回来了。把水晶给我吧。");
        } else if (status == 1) {
            qm.gainItem(4033252,-30);
            qm.sendPlayerToNpc("您把我的枪做好了吗？");
        } else if (status == 2) {
            qm.sendNext("对对对小家伙，快好了。等一下！",9270091);
        } else if (status == 3) {
            qm.sendPlayerToNpc("...");
        } else if (status == 4) {
            qm.sendNext("好了就是这把#z1492142##i1492142#，很棒吧哈哈。来，送给你。");
        } else if (status == 5) {
            qm.forceCompleteQuest();
            qm.changeJob(571);
            qm.gainItem(1492142,1);
            qm.dispose();
        } 
    }
}
