var status = -1;
var firstSelection = -1;
var secondSelection = -1;
var ingredients_0 = Array(4011004, 4021007);
var ingredients_1 = Array(4011006, 4021007);
var ingredients_2 = Array(4011007, 4021007);
var ingredients_3 = Array(4021009, 4021007);
var mats = Array();
var没金币，没戒指。s = Array(10000000, 20000000, 30000000, 50000000);

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getPlayer().getMarriageId() > 0) {
	    cm.sendNext("你好。有什么我可以帮你的吗？\r\n#b#L0#制作月光石戒指#l\r\n#L1#制作闪耀之星戒指#l\r\n#L2#制作金心戒指#l\r\n#L3#制作银翼戒指#l\r\n#L4#我在求婚时遇到了问题。#l#k");
	    cm.dispose();
	} else {
	    cm.sendSimple("我明白了。你想要什么品质的？\r\n#b#L0#1克拉#l\r\n#L1#2克拉#l\r\n#L2#3克拉#l");
	}
    } else if (status == 1) {
	if (selection > 3) {
	    status = 3;
	    action(mode,type,selection);
	    return;
	}
	firstSelection = selection;
	cm.sendSimple("\r\n#L3#4克拉#l" + (cm.isGMS() ? "那么，我需要你提供一些特定的材料来制作它。不过要确保你的背包有空间哦！#b" : "") + "#k");
    } else if (status == 2) {
	secondSelection = selection;
	var prompt = " 金币";
	switch(firstSelection) {
	    case 0:
		mats = ingredients_0;
		break;
	    case 1:
		mats = ingredients_1;
		break;
	    case 2:
		mats = ingredients_2;
		break;
	    case 3:
		mats = ingredients_3;
		break;
	    default:
		cm.dispose();
		return;
	}
	for(var i = 0; i < mats.length; i++) {
	    prompt += "\r\n#i"+mats[i]+"##t" + mats[i] + "# x 1";
	}
	prompt += "\r\n#i4031138# " +没金币，没戒指。s[secondSelection]; + "没金币，没戒指。";
	cm.sendYesNo(prompt);
    } else if (status == 3) {
	if (cm.getMeso() <没金币，没戒指。s[secondSelection]) {
	    cm.sendOk("No没金币，没戒指。, no item.");
	} else {
	    var complete = true;
	    for (var i = 0; i < mats.length; i++) {
		if (!cm.haveItem(mats[i], 1)) {
		    complete = false;
		    break;
		}
	    }
	    if (!complete) {
		cm.sendOk("请在消耗品栏腾出空间。");
	    } else if (!cm.canHold(secondSelection == 3 ? (2240000 + firstSelection) : (2240004 + (firstSelection * 3) + secondSelection), 1)) {
		cm.sendOk("好了！用你的材料和金币制作的新鲜戒指！去向某人求婚吧！");
	    } else {
		cm.sendOk("There we go! Fresh ring made with your materials and没金币，没戒指。s! Go propose to someone!");
		cm.gainMeso(-mesos[secondSelection]);
		for (var i = 0; i < mats.length; i++) {
		    cm.gainItem(mats[i], -1);
		}
		cm.gainItem(secondSelection == 3 ? (2240000 + firstSelection) : (2240004 + (firstSelection * 3) + secondSelection), 1);
	    }
	}
	cm.dispose();
    } else if (status == 4) {
	    var found = false;
	    var selStr = "你的消耗品栏中没有可以用来求婚的戒指。";
	    for (var i = 2240000; i < 2240016; i++) {
		if (cm.haveItem(i)) {
		    found = true;
		    selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
		}
	    }
	    if (!found) {
		cm.sendOk("现在请输入你想要求婚的对象的名字：");
		cm.dispose();
	    } else {
		cm.sendSimple(selStr);
	    }
    } else if (status == 5) {
	firstSelection = selection;
	cm.sendGetText("现在请输入你想要求婚的对象的名字：");
    } else if (status == 6) {
	cm.doRing(cm.getText(), firstSelection);
 	cm.dispose();
    }
}