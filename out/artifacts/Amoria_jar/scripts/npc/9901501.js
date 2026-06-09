var status = -1;
var items;
var itemsq;
var itemsa;
var itemse;

function start() {
	if (cm.isGMS()) { //- fishing items, + hand cannon scroll
		items = Array(5062000, 5062000, 5062001, 5050000, 5050000, 2022179, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2045301, 2045201, 2040317, 5610000, 5610000, 5610001, 5610001, 3011000, 5640000, 1122121, 2531000, 2530000);
		itemsq = Array(1, 10, 1, 1, 10, 1, 10, 1, 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1);
		itemsa = Array(2550, 25500, 50000, 2050, 20500, 2550, 25500, 50000, 30000, 10000, 12000, 15000, 15000, 16000, 16000, 18000, 18000, 18000, 18000, 18000, 18000, 18000, 6000, 30000, 9000, 45000, 4500, 80000, 150000, 100000, 50000);
		itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,-1,  -1, -1, -1, -1, -1, -1, -1, -1, 14, -1, 30, -1, -1);
	} else {
		items = Array(5062000, 5062000, 5062001, 5050000, 5050000, 2022179, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2040317, 5610000, 5610000, 5610001, 5610001, 5340000, 5340001, 5350000, 5640000, 1122121, 2531000, 2530000);
		itemsq = Array(1, 10, 1, 1, 10, 1, 10, 1, 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1);
		itemsa = Array(2550, 25500, 50000, 2050, 20500, 2550, 25500, 50000, 30000, 10000, 12000, 15000, 15000, 16000, 16000, 18000, 18000, 18000, 18000, 18000, 6000, 30000, 9000, 45000, 4500, 7000, 5000, 80000, 150000, 100000, 50000);
		itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, -1, 30, -1, -1);
	}
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.sendSimple("#n#k#r点券#k。我确实可以用一些...\r\n\r\n#b#L0#给我#r点券#b，我给你物品。#l#k" + cm.getPlayer().getCSPoints(1) + "也许你可以跟我换一些#r点券#k？我有很多好东西给你...#b\r\n\r\n");
	} else if (status == 1) {
		var selStr = "点券）#b#l\r\n";
		for (var i = 0; i < items.length; i++) {
			selStr += "#L" + i + "##v" + items[i] + "##t" + items[i] + "# x " + itemsq[i] + " #r(" + (cm.isGMS() ? (itemsa[i] / 2) : itemsa[i]) + "抱歉，你必须达到70级以上才能获得此物品。";
		}
		cm.sendSimple(selStr + "#k");
	} else if (status == 2) {
		if ((items[selection] == 2340000 || items[selection] == 5610000 || items[selection] == 5610001 || items[selection] == 5062001 || items[selection] == 5640000) && cm.getPlayer().getLevel() < 70) {
			cm.sendOk("抱歉，你必须达到50级以上才能获得此物品。");
		} else if (items[selection] == 2022179 && cm.getPlayer().getLevel() < 50) {
			cm.sendOk("你没有足够的#r点券#k..我需要#r点券#k！");
		} else if (cm.getPlayer().getCSPoints(1) < itemsa[selection]) {
			cm.sendOk("你没有足够的背包空间来放下它。我必须合法地进行公平交易...所以快点腾出背包空间，让我拿到我的#r点券#k！");
		} else if (!cm.canHold(items[selection], itemsq[selection])) {
			cm.sendOk("非常感谢你的#r点券#k！嘿嘿...");
		} else {
			cm.getPlayer().modifyCSPoints(1, -(cm.isGMS() ? (itemsa[selection] / 2) : (itemsa[selection])), true);
			if (itemse[selection] > 0) {
				cm.gainItemPeriod(items[selection], itemsq[selection], itemse[selection]);
			} else {
				cm.gainItem(items[selection], itemsq[selection]);
			}
			cm.sendOk("非常感谢你的#r点券#k！嘿嘿...");
		}
		cm.dispose();
	}
}