/* @Author SharpAceX
*/

function start() {
if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("传奇英雄家族——德弗里斯家族是暴风铸造者的最初创始人。这个家族非常独特，因为每个子女都会继承祖先的全部战斗技巧。这种能力已被证明是非常有用的；因为它允许几乎无限的战略、即兴发挥和战术来击败所有敌人。一个名副其实的世代英雄家族。");
cm.dispose();
} else if (cm.getPlayer().getMap().getId() == 610030000) {
cm.sendOk("消灭所有深红色守护者。");
cm.dispose();
} else if (cm.getPlayer().getMapId() == 610030510) {
	if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
		if (!cm.haveItem(4001259,1)) {
			cm.gainItem(4001259,1);
		}
		cm.warp(610030500,0);
	} else {
		cm.sendOk("消灭所有深红色守护者。");
	}
	cm.dispose();
}
}