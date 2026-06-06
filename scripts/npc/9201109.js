/* @Author SharpAceX
*/

function start() {
if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("一个永远被铭记的名字，拉斐尔是一位技艺超群的术士，也是精神魔法力量——念力和心灵感应的大师。此外，他还是掌握了所有元素的"精英法师"之一。他最后一次出现是在寻找"元素神殿"以扭转入侵的克拉基亚军队的局势...");
	cm.dispose();
} else if (cm.getPlayer().getMap().getId() == 610030000) {
	cm.sendOk("消灭所有怪物。");
	cm.dispose();
} else if (cm.getPlayer().getMapId() == 610030521) {
	if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.warp(610030522,0);
	} else {
		cm.sendOk("消灭所有怪物。");
	}
	cm.dispose();
} else if (cm.getPlayer().getMapId() == 610030522) {
	if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
		if (!cm.haveItem(4001257,1)) {
			cm.gainItem(4001257,1);
		}
		cm.warp(610030500,0);
	} else {
		cm.sendOk("消灭所有怪物。");
	}
	cm.dispose();
}
}