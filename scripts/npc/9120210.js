var status = -1;
var coin = 4310018;
var baseid = 1142321;
var points = Array(500, 350, 250, 200, 150, 100, 75, 50, 30, 20, 10, 1);  

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	if (cm.haveItem(baseid, 1, true, true)) { //grand champion
	    cm.sendNext("你目前的等级是 #i");
	    cm.dispose();
	} else {
	    for (var i = 0; i < (points.length - 1); i++) {
		if (cm.haveItem(baseid - (i+1), 1, true, true)) {
		    cm.sendYesNo("#。 \r\n你想要升级到下一等级吗？ #i" + (baseid - (i+1)) + "#\r\n费用:" + (baseid - i) + " 枚硬币 " + points[i] + "你没有勋章。 \r\n你想要获得一个吗？ #i");
		    return;
		}
	    } 
	    cm.sendYesNo("你没有" + (baseid - (points.length - 1)) + " 枚硬币 " + points[points.length - 1] + "你没有勋章。 \r\n你想要获得一个吗？ #i");
 	}
    } else if (status == 1) {
	for (var i = 0; i < (points.length - 1); i++) {
	    if (cm.haveItem(baseid - (i+1), 1, true, true)) {
		giveItem(i);
		return;
	    }
	} 
	giveItem(points.length - 1);
    }
}

function giveItem(stat) {
     if (!cm.haveItem(coin, points[stat])) {
	cm.sendOk(" 枚硬币。 " + points[stat] + "你没有勋章。 \r\n你想要获得一个吗？ #i.");
     } else if (!cm.canHold(baseid - stat, 1)) {
	cm.sendOk("请先取下你的勋章。");
     } else if (cm.getPlayer().hasEquipped(baseid - (stat+1))) {
	cm.sendOk("请先取下你的勋章。");
     } else {
	cm.gainItem(coin, -points[stat]);
	cm.gainItem(baseid - stat, 1);
	if (cm.haveItem(baseid - (stat+1))) {
	    cm.gainItem(baseid - (stat+1), -1);
	}
     }
     cm.dispose();
}