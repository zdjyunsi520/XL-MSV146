/* 
 * NPC :      Mihai
 * Map :      Timu's Forest
 */

function start() {
    cm.sendNext("哦...我刚才发现了什么吗？那就只有一条路了！像个#r黑色之翼#k成员一样战斗吧！");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.removeNpc(cm.getMapId(), cm.getNpc());
	cm.spawnMonster(9001031,1); // Transforming
    }
    cm.dispose();
}