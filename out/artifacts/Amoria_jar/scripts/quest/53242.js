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
            qm.sendNext(qm.getPlayer().getName()+"我需要帮助。快到截止日期了，客户一直在催！");
        } else if (status == 1) {
            qm.sendPlayerToNpc("冷静点#p2111007#，你在做什么？");
        } else if (status == 2) {
            qm.sendNext("没什么大事。但这附近真的一个人都没有。你能帮我吗？");
        } else if (status == 3) {
            qm.sendPlayerToNpc("等我喝口咖啡再想想这件事……");
        } else if (status == 4) {
            qm.sendAcceptDecline("如果你帮我。我会告诉你我所知道的一切。你会帮我的对吧？");
        } else if (status == 5) {
            qm.sendNext("我觉得你肯定无法抵挡这份意外的惊喜。");
        } else if (status == 6) {
            qm.sendNext("两天前，我收到了一个秘密组织的请求。");
        } else if (status == 7) {
            qm.sendPlayerToNpc("而且你不想让任何人知道这件事？");
        } else if (status == 8) {
            qm.sendNext("我想为我的客户保密。他们要我制作#z4033250##i4033250#。而且他们付了很丰厚的报酬~！");
        } else if (status == 9) {
            qm.sendPlayerToNpc("（#z4033250##i4033250#，听这名字就让我觉得有危险……）");
        } else if (status == 10) {
            qm.sendPlayerToNpc("你知道客户是谁吗？");
        } else if (status == 11) {
            qm.sendNext("我不知道他们是谁也不太在乎。他们催我快点做，说几天内会来取。需要的材料是50个#z4000357##i4000357#，50个#z4000358##i4000358#和50个#z4000364##i4000364#。");
        } else if (status == 12) {
            qm.sendPlayerToNpc("（这个客户有些特别。我会在完成之后再问他！）");
        } else if (status == 13) {
            qm.forceStartQuest();
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
            qm.sendNext("你回来了。来，快把它们给我！");
        } else if (status == 1) {
//            qm.gainItem(4000357,-50);
//            qm.gainItem(4000358,-50);
//            qm.gainItem(4000364,-50);
            qm.sendPlayerToNpc("...??!");
        } else if (status == 2) {
            qm.forceCompleteQuest();
            qm.dispose();
        } 
    }
}
