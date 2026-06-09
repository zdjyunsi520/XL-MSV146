/**
	Jake - Victoria Road : Subway Ticketing Booth (103000100)
**/

var meso = new Array(500, 1200, 2000);
var item = new Array(4031036, 4031037, 4031038);
var selector;
var menu = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.dispose();
	return;
    } else if (status == 1 && mode == 0) {
	cm.sendNext("购买门票后即可进入。听说里面到处都是奇怪的装置，但最终会有珍贵的稀有物品等着你。如果你改变主意了，随时来找我。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getPlayerStat("LVL") <= 19) {
	    cm.sendNext("购买门票后即可进入；不过看起来你现在还无法进入。地下的外来装置可能对你来说太危险了，请先锻炼自己，做好准备后再来。");
	    cm.dispose();
	} else {
	    for(var x=0; x < 3; x++) {
		if (cm.getPlayerStat("LVL") >= 20 && cm.getPlayerStat("LVL") <= 29) {
		    menu += "\r\n#L" + x + "##b工地B区" + x + "#k#l";
		    break;
		} else if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayerStat("LVL") <= 39 && x < 2) {
		    menu += "\r\n#L" + x + "##b工地B区" + x + "#k#l";
		} else {
		    menu += "\r\n#L" + x + "##b工地B区" + x + "#k#l";
		}
	    }
	    cm.sendSimple("必须购买门票才能进入。购买后，你可以从右侧的检票口进入。你想买什么？" + menu);
	}
    } else if (status == 1) {
	selector = selection;
	selection += 1;
	cm.sendYesNo("你要购买前往#b工地B区" + selection + "#k的门票吗？需要花费 " + meso[selector] + " 金币。购买前请确保你的其他物品栏有空位。");
    } else if (status == 2) {
	if (cm.getMeso() < meso[selector]) {
	    cm.sendNext("金币不够吗？请检查一下你的其他物品栏是否有空位。");
	    cm.dispose();
	} else {
	    if (selector == 0) {
		cm.sendNext("你可以将门票插入检票口。听说1区有一些珍贵的物品，但到处都是陷阱，大多数人很早就出来了。祝你好运。");
	    } else if (selector == 1) {
		cm.sendNext("你可以将门票插入检票口。听说2区有稀有珍贵的物品，但到处都是陷阱，大多数人很早就出来了。请务必小心。");
	    } else {
		cm.sendNext("你可以将门票插入检票口。听说3区有非常稀有珍贵的物品，但到处都是陷阱，大多数人很早就出来了。祝你好运。");
	    }
	    cm.gainMeso(-meso[selector]);
	    cm.gainItem(item[selector], 1);
	    cm.dispose();
	}
    }
}