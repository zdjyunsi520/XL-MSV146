var status = -1;

function start(mode, type, selection) {
    cm.sendNext("你必须逃离！");
    cm.forceStartQuest();
    cm.dispose();
}

function end(mode, type, selection) {
}