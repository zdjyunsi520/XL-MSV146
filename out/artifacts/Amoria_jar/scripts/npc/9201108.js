/* @Author SharpAceX
*/

function start() {
if (cm.getPlayer().getMap().getId() == 610030500) {
        cm.sendOk("洛克伍德是已知仅有的神圣弓箭手之一，也是要塞最著名的英雄之一。特别值得一提的是他定制的白金战弓，据说由一位强大的女神赐福。他的瞄准在远距离上极为精准。以"创世之箭"和"末日凤凰"闻名，他曾一箭击落英雄谷中的六只提丰。");
cm.dispose();
} else if (cm.getPlayer().getMap().getId() == 610030000) {
cm.sendOk("消灭所有大师守护者。");
cm.dispose();
} else if (cm.getPlayer().getMapId() == 610030540) {
	if (cm.getPlayer().getMap().getAllMonstersThreadsafe().size() == 0) {
		if (!cm.haveItem(4001258,1)) {
			cm.gainItem(4001258,1);
		}
		cm.warp(610030500,0);
	} else {
		cm.sendOk("消灭所有大师守护者。");
	}
	cm.dispose();
}
}