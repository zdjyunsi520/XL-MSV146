var status = -1;

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
	cm.sendSimple("#b#L2#组队前往冰骑士。#l\r\n#L3#冰人锁链（10个寒冰）#l\r\n#L4#冰人耳环（20个寒冰）#l#k");
    } else if (status == 1) {
	if (selection == 2) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("队伍队长必须在这里。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 20) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Iceman");
			if (em == null) {
				cm.sendOk("我暂时不想救我的朋友。请稍后再试。");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 70);
		    } else {
			cm.sendOk("另一个队伍已经进入了此频道。");
		    }
			}
		} else {
			cm.sendOk("你的队伍必须有2名以上成员在场，且等级达到20级以上。");
		}
	    }
	} else if (selection == 3) {
		if (!cm.canHold(1072510,1)) {
			cm.sendOk("请腾出装备栏空间。");
		} else if (cm.haveItem(4001529,10)) { //TODO JUMP
			cm.gainItem(1072510, 1);
			cm.gainItem(4001529, -10);
		} else {
			cm.sendOk("请带10个寒冰再来。");
		}
	} else if (selection == 4) {
		if (!cm.canHold(1032100,1)) {
			cm.sendOk("请腾出装备栏空间。");
		} else if (cm.haveItem(4001529,20)) { //TODO JUMP
			cm.gainItem(1032100, 1);
			cm.gainItem(4001529, -20);
		} else {
			cm.sendOk("请带20个寒冰再来。");
		}
	}
	cm.dispose();
    }
}