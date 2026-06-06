/*
 * Cygnus 2nd Job advancement
 */

var status = -1;

function start(mode, type, selection) {
    qm.sendNext("你确定你准备好进行第二次转职了吗？");
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}