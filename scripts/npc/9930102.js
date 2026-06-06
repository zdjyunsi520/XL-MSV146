/**
 * @author: Eric
 * @npc: Kyun
 * @func: Custom Weapon Seller
*/

var currency = 4000999;
var items = [[1402998, 1100]];

function start() {
    text = "萌币";
    for (var i = 0; i < items.length; text+= "\r\n#L"+i+"#" + "#z" + items[i][0] + "# - " + items[i][1] + "玩得开心~嘻嘻", i++);
		cm.sendSimple(text);
}

function action(m, t, s) {
    if (m > 0) {
		if (cm.haveItem(currency, items[s][1])) {
			if (cm.canHold(items[s][0])) {
				cm.gainItem(currency, -items[s][1]);
				cm.gainItem(items[s][0], 1);
				cm.sendOk("请留一个空位哦小可爱~");
			} else
				cm.sendOk("嘿你这个小鬼，你的不够！");
		} else
			cm.sendOk("嘿你这个小鬼，你的不够！");
		}
    cm.dispose();
}