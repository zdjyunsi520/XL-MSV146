var status = -1;

//member of resistance.

function end(mode, type, selection) {
    qm.sendNext("你的第一个任务是消灭巡逻机器人。");
    qm.forceStartQuest(23129, "1");
    qm.forceStartQuest(23110);
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}