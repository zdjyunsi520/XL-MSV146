function start() {
    cm.getPlayer().changeJob(2410);
    cm.sendOkS("啊，管他呢！我的二转可比一只无聊的#o9001045#重要多了。我又不缺钱！我去买一只新的就好了！", 16);
    cm.forceCompleteQuest(25101);
    cm.forceCompleteQuest(29968);
    cm.dispose();
}

function action(mode, type, selection) {
    cm.warp(200020001, 0);
    cm.dispose();
}