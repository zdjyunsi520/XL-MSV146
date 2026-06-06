/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Ellinia (101000000)
	Description: 		Ellinia Cab
*/
var status = 0;
var maps = Array(104000000, 102000000, 100000000, 103000000, 120000000, 105000000);
var cost = Array(1000, 1000, 1000, 1000, 1000, 1000);
var costBeginner = Array(100, 100, 100, 100, 100, 100);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("这个城镇也有很多值得看的地方。需要去其他城镇的时候再来找我们吧。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你好，我是普通出租车的司机。如果你想安全快速地在城镇之间移动，那就搭乘我们的出租车吧。我们会以实惠的价格送你到目的地。");
    } else if (status == 1) {
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
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000) {
	    sCost = costBeginner[selection];
	    show = costBeginner[selection];
	} else {
	    sCost = cost[selection];
	    show = cost[selection];
	}
	cm.sendYesNo("你在这里没有其他事要做了吧？你真的想去#b#m" + maps[selection] + "##k吗？那要花费你#b" + show + " 金币#k。");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("你没有足够的金币。很抱歉这么说，但没有金币你无法搭乘出租车。");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}