/*
	Red Sign - 101st Floor Eos Tower (221024500)
*/

var status = -1;
var minLevel = 20; // 35
var maxLevel = 255; // 65

var minPartySize = 2; //CHANGE after BB
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
	cm.removeAll(4001022);
	cm.removeAll(4001023);
	if (cm.getParty() == null) { // No Party
	    cm.sendOk("要不要和你的组队成员一起挑战一个任务？在这里你会遇到各种障碍和难题，没有出色的团队合作是无法通过的。如果你想尝试，请让你们的#b队长#k来找我谈话。\r\n\r\n#r要求： " + minPartySize + " 组队成员，等级在 " + minLevel + " 和 " + maxLevel + ".#b");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendOk("如果你想尝试任务，请让你们的#b队长#k来找我谈话。");
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
		var em = cm.getEventManager("LudiPQ");
		if (em == null) {
		    cm.sendOk("玩具城组队任务出现错误。请在论坛上提交截图报告此问题。");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap(), 70);
			cm.removeAll(4001022);
			cm.removeAll(4001023);
			cm.dispose();
			return;
		    } else {
			cm.sendOk("另一个队伍已经在此频道进入了#r组队任务#k。请尝试其他频道，或等待当前队伍完成。");
		    }
		}
	    } else {
		cm.sendOk("你的队伍不符合要求。请遵守以下条件：\r\n\r\n#r要求： " + minPartySize + " 组队成员，等级在 " + minLevel + " 和 " + maxLevel + ".");
	    }
	}
	cm.dispose();
}