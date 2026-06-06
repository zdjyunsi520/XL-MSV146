function start() {
    var status = cm.getQuestStatus(20706);
    
    if (status == 0) {
        cm.sendNext("看起来这片区域没有什么可疑的东西。");
    } else if (status == 1) {
        cm.forceCompleteQuest(20706);
        cm.sendNext("你发现了影子！最好去报告给#p1103001#。");
    } else if (status == 2) {
        cm.sendNext("影子已经被发现了。最好去报告给#p1103001#。");
    }
    cm.dispose();
}
function action(mode, type, selection) {
    cm.dispose();
}