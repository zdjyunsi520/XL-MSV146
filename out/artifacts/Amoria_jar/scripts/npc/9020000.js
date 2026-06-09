/*
	Lakelis - Victoria Road: Kerning City (103000000)
**/

function start() {
    cm.removeAll(4001007);
    cm.removeAll(4001008);
    if (cm.getParty() == null) { // No Party
	cm.sendSimple("你想和你的队伍成员一起完成一个任务吗？在这里你会遇到各种障碍和问题，没有良好的团队合作是无法完成的。如果你想尝试，请让#b你的队伍队长#k来和我说话。#b\r\n#L0#我想要毛绒鞋子。#l");
    } else if (!cm.isLeader()) { // Not Party Leader
	cm.sendSimple("如果你想尝试任务，请让#b你的队伍队长#k来和我说话。#b\r\n#L0#我想要毛绒鞋子。#l");
    } else {
	// Check if all party members are within Levels 21-30
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
	    var cPlayer = it.next();
	    if ((cPlayer.getLevel() >= 20 && cPlayer.getLevel() <= 255) || cPlayer.getJobId() == 900) {
		levelValid += 1;
	    } else {
		next = false;
	    }
	    if (cPlayer.getMapid() == mapId) {
		inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
	    }
	}
	if (party.size() > 6 || inMap < 2) {
	    next = false;
	}
	if (next) {
	    var em = cm.getEventManager("KerningPQ");
	    if (em == null) {
		cm.sendSimple("此组队任务目前不可用。#b\r\n#L0#我想要毛绒鞋子。#l");
	    } else {
		var prop = em.getProperty("state");
		if (prop == null || prop.equals("0")) {
		    em.startInstance(cm.getParty(),cm.getMap(), 70);
			cm.dispose();
		} else {
		    cm.sendSimple("已经有人在尝试此任务了。#b\r\n#L0#我想要毛绒鞋子。#l");
		}
		cm.removeAll(4001008);
		cm.removeAll(4001007);
	    }
	} else {
	    cm.sendSimple("你的队伍人数不足两人。请确保所有成员都在场且符合参加条件。我看到有 #b" + levelValid.toString() + "#k 名成员在正确等级范围内，有 #b" + inMap.toString() + "#k 名在废弃都市。如果这看起来不对，请#b登出后重新登录，#k或重新组建队伍。#b\r\n#L0#我想要毛绒鞋子。#l");
	}
    }
    
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() != 910340700) {
	    cm.saveLocation("MULUNG_TC");
	    cm.warp(910340700,0);
	} else {
	if (!cm.canHold(1072533,1)) {
	    cm.sendOk("请为这些鞋子腾出空间。");
	} else if (cm.haveItem(4001531,10)) {
	    cm.gainItem(4001531,-10); //should handle automatically for "have"
	    cm.gainItem(1072533,1);
	} else {
	    cm.sendOk("等你收集了10个黏糊液体再来。");
	}
	}
	    cm.dispose();
}