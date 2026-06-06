/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("哦……我好像发现了什么？那就只有一条出路了！像#r黑翼团#k成员一样战斗吧！");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), 1104100);
	cm.spawnMob(9001009, 263, 88); // Transforming
    }
    cm.dispose();
}