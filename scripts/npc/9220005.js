/* Roudolph Happyville Warp NPC
   By Moogra
*/

function start() {
    cm.sendYesNo("你想前往超级冰雪区域吗？");
}

function action(mode, type, selection) {
    if (mode > 0)
        cm.warp(209080000, 0);
    cm.dispose();
}