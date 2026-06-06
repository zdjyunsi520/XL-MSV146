/**
	Chief Tatamo - Leafre(240000000)
**/

var section;
var temp;
var cost;
var count;
var menu = "";
var itemID = new Array(4000226,4000229,4000236,4000237,4000261,4000231,4000238,4000239,4000241,4000242,4000234,4000232,4000233,4000235,4000243);
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status > 2) {
	    if(section == 0) {
		cm.sendOk("请仔细考虑。做出决定后，请告诉我。");
	    } else {
		cm.sendOk("好好考虑，然后告诉我你的决定。");
	    }
	    cm.safeDispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("……有什么可以帮你的？\r\n#L0##b购买魔法种子#k#l\r\n#L1##b为神木村做点什么#k#l\r\n#L2##b我想要龙苔提取物#k#l");
    } else if(status == 1) {
	section = selection;
	if(section == 0) {
	    cm.sendSimple("你看起来不是本镇的人。有什么可以帮你的？#L0##b我想要一些#t4031346#。#k#l");
	} else if (section == 1) {
	    cm.sendNext("让城镇更适合人们居住是村长的职责，而履行职责需要大量的物品。如果你在神木村周围收集了物品，有兴趣捐赠吗？");
	} else {
		if (cm.isQuestActive(3759)) {
			if (cm.haveItem(4032531)) {
				cm.sendNext("龙苔提取物……？我已经给过你了！");
			} else {
				cm.sendNext("龙苔提取物……啊，我明白了。在这种情况下我会给你的。");
				cm.gainItem(4032531,1);
			}
		} else {
			cm.sendNext("你在说什么？龙苔提取物……？");
		}
		cm.dispose();
	}
    } else if(status == 2) {
	if(section == 0) {
	    cm.sendGetNumber("#b#t4031346##k是珍贵的物品！我不能就这样给你。帮我做点小事怎么样？然后我就给你。我将以#b30,000金币#k每个的价格卖给你#b#t4031346##k。你愿意购买吗？那么，你想要多少个？",0,0,99);
	} else {
	    for (var i=0; i < itemID.length; i++) {
		menu += "\r\n#L"+i+"##b#t"+itemID[i]+"##k#l";
	    }
	    cm.sendNext("你想捐赠哪个物品？"+menu);
	    cm.safeDispose();
	}
    } else if(status == 3) {
	if(section == 0) {
	    if(selection == 0) {
		cm.sendOk("我不能卖给你0个。");
		cm.safeDispose();
	    } else {
		temp = selection;
		cost = temp * 30000;
		cm.sendYesNo("购买#b"+temp+" 个#t4031346##k将花费你#b"+cost+" 金币#k。你确定要购买吗？");
	    }
	} else {
	    temp = selection;
	    if(!cm.haveItem(itemID[temp])) {
		cm.sendNext("我觉得你没有这个物品。");
		cm.safeDispose();
	    } else {
		cm.sendGetNumber("你想捐赠多少个#b#t"+itemID[temp]+"#k？\r\n#b< 持有数量：#c"+itemID[temp]+"# >#k",0,0,"#c"+itemID[temp]+"#");
	    }
	}
    } else if(status == 4) {
	if(section == 0) {
	    if(cm.getMeso() < cost || !cm.canHold(4031346)) {
		cm.sendOk("请检查你是否有足够的金币购买。另外，我建议你检查其他背包是否有足够的空间来完成购买。");
	    } else {
		cm.sendOk("再见~");
		cm.gainItem(4031346, temp);
		cm.gainMeso(-cost);
	    }
	    cm.safeDispose();
	} else {
	    count = selection;
	    cm.sendYesNo("你确定要捐赠#b"+count+" #t"+itemID[temp]+"##k?");
	}
    } else if(status == 5) {
	if (count == 0 || !cm.haveItem(itemID[temp],count)) {
	    cm.sendNext("请检查你是否有足够的该物品。");
	} else {
	    cm.gainItem(itemID[temp],-count);
	    cm.sendNext("非常感谢。");
	}
	cm.safeDispose();
    }
}
