var status = -1;
var minLevel = 20; // 35
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
    if (status == 0) {
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("和你的队员们一起挑战任务怎么样？这里有各种障碍和难题，除非有很好的团队配合，否则是无法通过的。如果你想尝试，请让你的#b队长#k来和我对话。\r\n\r\n#r要求： " + minPartySize + " 队伍成员，全部在等级 " + minLevel + " 和等级 " + maxLevel + " 之间。#b\r\n#L0#我想要年糕帽子。#l");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("If you want to try the quest, please tell the #bleader of your party#k to talk to me 之间。#b\r\n#L0#我想要年糕帽子。#l");
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
		var em = cm.getEventManager("HenesysPQ");
		if (em == null) {
		    cm.sendSimple("The PQ has encountered an error. Please report this on the forums, with a screenshot 之间。#b\r\n#L0#我想要年糕帽子。#l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap(), 70);
			cm.removeAll(4001101);
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("另一个队伍已经进入了此频道的#r组队任务#k。请尝试其他频道，或等待当前队伍完成。#b\r\n#L0#我想要年糕帽子。#");
		    }
		}
	    } else {
		cm.sendSimple("你的队伍无效。请遵守以下要求：\r\n\r\n#r要求： " + minPartySize + " 队伍成员，全部在等级 " + minLevel + " 和等级 " + maxLevel + " 之间。#b\r\n#L0#我想要年糕帽子。#l");
	    }
	}
    } else { //broken glass
	if (cm.haveItem(1002798,1)) {
		if (!cm.canHold(1003266,1)) {
			cm.sendOk("请为这顶帽子腾出空间。");
		} else if (cm.haveItem(4001101,20) && cm.isGMS()) { //TODO JUMP
			cm.gainItem(1003266, 1);
			cm.gainItem(4001101, -20);
		} else {
			cm.sendOk("请带20个年糕回来。");
		}
	} else if (!cm.canHold(1002798,1)) {
	    cm.sendOk("请为这顶帽子腾出空间。");
	} else if (cm.haveItem(4001101,10)) {
	    cm.gainItem(4001101,-10); //should handle automatically for "have"
	    cm.gainItem(1002798,1);
	} else {
	    cm.sendOk("请带10个年糕回来。");
	}
	cm.dispose();

    }
}