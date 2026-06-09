var status = -1;
//var items = Array(5062000, 5062001, 5062002, 5750000, 5750001, 5050000, 2049100, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2045301, 2045201, 2040317, 2040817, 5610000, 5610001, 3011000, 5640000, 1122121, 2531000, 2530000, 5030000, 5030001, 5030006, 5534000, 5220084, 5220092, 5510000, 1812008);
//var itemsa = Array(2550, 20000, 30000, 5000, 4100, 2550, 4100, 5000, 50000, 2000, 5000, 6000, 7500, 7500, 8000, 8000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 9000, 6000, 9000, 4500, 80000, 150000, 100000, 35000, 3400, 11800, 19800, 20000, 20000, 40000, 1000, 7000);
//var itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, -1, 30, -1, -1, 1, 7, 14, -1, -1, -1, -1);
var items = [
/*Cubes*/ [[5062009, 25000, -1], [5062500, 50000, -1]],
/*Scrolls*/ [[2049100, 5100, -1], [2040804, 9000, -1], [2040301, 9000, -1], [2046223, 7000, -1], [2046224, 7000, -1], [2046225, 7000, -1], [2046226, 7000, -1], [2046314, 7000, -1], [2046315, 7000, -1], [2046316, 7000, -1], [2046317, 7000, -1], [2040817, 9000, -1]],
/*Scrolling Tools*/ [/*[2340000, 50000, -1], */[5610000, 10000, -1], [5610001, 12000, -1], [5640000, 80000, -1], [2531000, 100000, -1], [2530000, 35000, -1], [5534000, 20000, -1]],
/*Game Enhancing*/ [[5050000, 2050, -1], [5510000, 1000, -1], [5521000, 10000, -1], [5062200, 5000, -1], [5062201, 10000, -1], [5133000, 1000, -1], [5520001, 8000, -1]],
/*Hired Merchants*/ [[5030000, 3400, 1], [5030001, 11800, 7], [5030006, 19800, 7], [5470000, 50000, -1]],
/*ETC*/ [[4020009, 2000, -1], [3011000, 4500, 14], [1122121, 300000, 14], [5155000, 10000, -1]/*, [5062400, 10000, -1]*/, [5700000, 10000, -1]/*, [1342069, 20000, 90]*/, [1112909, 70000, -1], [2022032, 100, -1], [5450005, 5000, -1], [5040004, 100000, -1], [5220000, 16000, -1]],
/*Mastery Books*/ [[2290448, 40000, -1], [2290449, 40000, -1], [2290450, 40000, -1], [2290451, 40000, -1], [2290452, 40000, -1], [2290453, 40000, -1], [2290454, 40000, -1], [2290455, 40000, -1], [2290456, 40000, -1], [2290457, 40000, -1], [2290458, 40000, -1], [2290459, 40000, -1], [2290460, 40000, -1], [2290461, 40000, -1], [2290462, 40000, -1], [2290463, 40000, -1], [2290464, 40000, -1], [2290465, 40000, -1], [2290466, 40000, -1], [2290467, 40000, -1], [2290468, 40000, -1], [2290571, 40000, -1]/*, [2290602, 40000, -1]*/, [2290714, 40000, -1], [2290715, 40000, -1], [2290721, 40000, -1]]
];
var select, select2;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 0) {
        //cm.sendSimple("你好，我用点券兑换物品。看来你有 #r#e" + cm.getPlayer().getCSPoints(1) + "#n#k #r点券#k。你可以花一些...\r\n\r\n#b#L0#给我 #r点券#b 我给你物品。#l#k");
        cm.sendSimple("你好，我喜欢 #r点券#k。也许你可以用一些你的 #r" + cm.getPlayer().getMaplePoints() + " 点券#k 和我交易？我有很多好东西给你...#b\r\n\r\n#L0#方块#l\r\n#L1#卷轴#l\r\n#L2#卷轴工具#l\r\n#L3#游戏增益#l\r\n#L4#雇佣商人#l\r\n#L5#其他#l\r\n#L6#技能书#l");
    } else if (status == 1) {
        select = selection;
        var selStr = "你想要哪个物品？\r\n#b";
        for (var i = 0; i < items[selection].length; i++) {
            selStr += "#L" + i + "##v" + items[selection][i][0] + "##t" + items[selection][i][0] + "# #r(" + items[selection][i][1] / 2 + " 点券）" + (items[select][selection][2] > 0 ? "（持续 " + items[select][selection][2] + "days)" : "") + "#b#l\r\n";
        }
        cm.sendSimple(selStr + "#k");
    } else if (status == 2) {
        select2 = selection;
        if (items[select][selection][0] / 1000000 == 1) {
            if (cm.getPlayer().getMaplePoints() < items[select2][i][1] / 2) {
                cm.sendOk("看来你的 #r点券#k 不够。");
            } else if (!cm.canHold(items[select][select2][0], 1)) {
                cm.sendOk("你的背包空间不够放。我必须保证这是一次公平交易...所以请赶紧腾出你的背包空间。");
            } else {
                cm.getPlayer().gainMaplePoints(-(items[select][select2][i][1] / 2));
                if (items[select][select2][2] > 0) {
                    cm.gainItemPeriod(items[select][select2][0], 1, items[select][select2][2]);
                } else {
                    cm.gainItem(items[select][select2][0], 1);
                }
                cm.sendOk("你获得了 " + selection + "并失去了 " + items[select][select2][i][1] / 2 * selection + " 点券");
            }
            cm.dispose();
        } else {
            cm.sendGetNumber("你想要多少个？（1个 #v" + items[select][selection][0] + "##t" + items[select][selection][0] + "# = " + items[select][selection][1] / 2 + " 点券） (Current 点券: " + cm.getPlayer().getMaplePoints() + ")", 1, 1, cm.getPlayer().getMaplePoints() / (items[select][selection][1] / 2));
        }
    } else if (status == 3) {
        if ((items[select][select2][0] == 2340000 || items[select][select2][0] == 5610000 || items[select][select2][0] == 5610001 || items[select][select2][0] == 5062001 || items[select][select2][0] == 5640000) && cm.getPlayer().getLevel() < 70) {
            cm.sendOk("抱歉，你必须达到70级以上才能获得此物品。");
        } else if (items[select][select2][0] == 2022179 && cm.getPlayer().getLevel() < 50) {
            cm.sendOk("抱歉，你必须达到50级以上才能获得此物品。");
        } else if (cm.getPlayer().getMaplePoints() < items[select][select2][1] / 2) {
            cm.sendOk("看来你的 #r点券#k 不够。");
        } else if (!cm.canHold(items[select][select2][0], selection)) {
            cm.sendOk("你的背包空间不够放。我必须保证这是一次公平交易...所以请赶紧腾出你的背包空间。");
        } else {
            cm.getPlayer().gainMaplePoints(-(items[select][select2][1] / 2 * selection));
            if (items[select][select2][2] > 0) {
                cm.gainItemPeriod(items[select][select2][0], selection, items[select][select2][2]);
            } else {
                cm.gainItem(items[select][select2][0], selection);
            }
			cm.playerMessage("你失去了 " + (items[select][select2][1] / 2 * selection) + " 点券.");
        //cm.showMessage(7, "你失去了 " + (items[select][select2][1] / 2 * selection) + " 点券.");
            cm.sendOk("你获得了 " + selection + " 并失去了 " + items[select][select2][1] / 2 * selection + " 点券");
        }
        cm.dispose();
    }
}