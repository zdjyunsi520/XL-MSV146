/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("哦……我好像发现了什么？那就只有一条出路了！像#r黑翼团#k成员一样战斗吧！");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), cm.getNpc());
	cm.spawnMonster(9001010,1); // Transforming
    }
    cm.dispose();
}