var status = -1;
var minLevel = 70; // 35
var maxLevel = 255; // 65

var minPartySize = 2;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	    return;
	}
	status--;
    }
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("我们必须救出管家伊克！收集20个云朵碎片！");
		cm.dispose();
		return;
	}
    if (status == 0) {
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("你和你的队友一起挑战任务怎么样？在这里你会遇到各种障碍和难题，没有良好的团队合作是无法通过的。如果你想尝试，请让#b你的队伍队长#k来和我对话。\r\n\r\n#r要求： " + minPartySize + " 名队员，等级在 " + minLevel + " 到 " + maxLevel + " 之间。#b\r\n#L0#我想要弥涅尔瓦护腕。#l\r\n#L1#我想要弥涅尔瓦鞋子。#l");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("If you want to try the quest, please tell the #bleader of your party#k to talk to me 之间。#b\r\n#L0#我想要弥涅尔瓦护腕。#l\r\n#L1#我想要弥涅尔瓦鞋子。#l");
	} else {
	    // Check if all party members are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("OrbisPQ");
		if (em == null) {
		    cm.sendSimple("The PQ has encountered an error. Please report this on the forums, with a screenshot 之间。#b\r\n#L0#我想要弥涅尔瓦护腕。#l\r\n#L1#我想要弥涅尔瓦鞋子。#l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap(), 120);
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("Another party has already entered the #rParty Quest#k in this channel. Please try another channel, or wait for the current party to finish 之间。#b\r\n#L0#我想要弥涅尔瓦护腕。#l\r\n#L1#我想要弥涅尔瓦鞋子。#l");
		    }
		}
	    } else {
		cm.sendSimple("你的队伍不符合要求。请确保满足以下条件：\r\n\r\n#r要求： " + minPartySize + " 名队员，等级在 " + minLevel + " 到 " + maxLevel + " 之间。#b\r\n#L0#我想要弥涅尔瓦护腕。#l\r\n#L1#我想要弥涅尔瓦鞋子。#l");
	    }
	}
    } else { //broken glass
	if (selection == 0) {
	if (!cm.isGMS()) { //TODO Jump
		cm.sendOk("暂不可用。");
	} else if (cm.haveItem(1082232, 1)) {
		if (!cm.canHold(1082322,1)) {
			cm.sendOk("请为这个护腕腾出空间。");
		} else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1082322,1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("收集到10个#t4001158#后再来找我。");
		}
	} else if (!cm.canHold(1082232,1)) {
	    cm.sendOk("请为这个护腕腾出空间。");
	} else if (cm.haveItem(4001158,10)) {
	    cm.gainItem(1082232,1);
	    cm.gainItem(4001158,-10); 
	} else {
	    cm.sendOk("收集到10个#t4001158#后再来找我。");
	}
	} else if (selection == 1) {
	if (!cm.isGMS()) { //TODO Jump
		cm.sendOk("暂不可用。");
	} else if (cm.haveItem(1072455, 1)) {
		if (!cm.canHold(1072534,1)) {
			cm.sendOk("请为这双鞋子腾出空间。");
		} else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1072534,1);
			cm.gainItem(4001158,-10); 
		} else {
			cm.sendOk("收集到10个#t4001158#后再来找我。");
		}
	} else if (!cm.canHold(1072455,1)) {
	    cm.sendOk("请为这双鞋子腾出空间。");
	} else if (cm.haveItem(4001158,10)) {
	    cm.gainItem(1072455,1);
	    cm.gainItem(4001158,-10); 
	} else {
	    cm.sendOk("收集到10个#t4001158#后再来找我。");
	}
	}
	cm.dispose();

    }
}