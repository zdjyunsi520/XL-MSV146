var items = Array(1182000, 1182002, 1182004, 1012270, 1162008);
var coins = Array(10, 30, 50, 30, 50);
var status = 0;

function start() {
    var selStr = "# 个";
    for (var i = 0; i < items.length; i++) {
	selStr += "#L" + i + "##i" + items[i] + " 怪物公园硬币（永久）#l\r\n " + coins[i] + "请腾出空间。";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < items.length) {
	if (!cm.canHold(items[selection])) {
	    cm.sendOk("你的硬币不够。");
	} else if (!cm.haveItem(4310020, coins[selection])) {
	    cm.sendOk("你的硬币不够。");
	} else {
	    cm.gainItem(4310020, -coins[selection]);
	    cm.gainItem(items[selection], 1);
	}
    }
    cm.dispose();
}