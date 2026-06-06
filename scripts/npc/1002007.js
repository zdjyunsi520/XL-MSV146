/*
	NPC Name: 		Regular Cab at Lith Habour
	Map(s): 		Victoria Road : Lith Habour (104000000)
	Description: 		Lith Habour
*/
var status = 0;
var maps = Array(120000000, 102000000, 100000000, 103000000);
var rCost = Array(1200, 1000, 1000, 1200);
var costBeginner = Array(120, 100, 100, 120);
var cost = new Array("1,200", "1,000", "1,000", "1,200");
var show;
var sCost;
var selectedMap = -1;


function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status >= 2) {
	    cm.sendNext("这个城镇也有很多值得看的地方。需要去其他城镇的时候再来找我们吧。");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("你好！我是里本港普通出租车的司机。你想去其他城镇吗？如果是的话，试试搭乘我的出租车吧。我可以低价送你去其他城镇。");
    } else if (status == 1) {
	if (!cm.haveItem(4032313)) {
	    var job = cm.getJob();
	    if (job == 0 || job == 1000 || job == 2000) {
		var selStr = "我们对新手有九折优惠。请选择你的目的地，不同地方的收费不同。#b";
		for (var i = 0; i < maps.length; i++) {
		    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " 金币)#l";
		}
	    } else {
		var selStr = "请选择你的目的地，不同地方的收费不同。#b";
		for (var i = 0; i < maps.length; i++) {
		    selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " 金币)#l";
		}
	    }
	    cm.sendSimple(selStr);
	} else {
	    cm.sendNextPrev("嘿，既然你有出租车优惠券，我可以免费送你到券上指定的城镇。看起来你的目的地是#b射手村#k！");
	}
    } else if (status == 2) {
	if (!cm.haveItem(4032313)) {
	    var job = cm.getJob();
	    if (job == 0 || job == 1000 || job == 2000) {
		sCost = costBeginner[selection];
		show = costBeginner[selection];
	    } else {
		sCost = rCost[selection];
		show = cost[selection];
	    }
	    cm.sendYesNo("你在这里没有其他事要做了吧？你真的想去#b#m" + maps[selection] + "##k吗？那要花费你#b" + show + " 金币#k。");
	    selectedMap = selection;
	} else {
	    cm.gainItem(4032313, -1);
	    cm.warp(100000000, 6);
	    cm.dispose();
	}
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("你没有足够的金币。很抱歉这么说，但没有金币你无法搭乘出租车。");
	    cm.safeDispose();
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	    cm.dispose();
	}
    }
}