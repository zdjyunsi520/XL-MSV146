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
	    cm.removeAll(4001163);
	    cm.removeAll(4001169);
	    cm.removeAll(2270004);
	cm.sendSimple("#b#L0#给我奥泰尔耳环。#l\r\n#L1#给我闪耀奥泰尔耳环。#l\r\n#L3#给我华丽奥泰尔耳环。#l\r\n#L2#挑战剧毒迷雾森林。#l#k");
    } else if (status == 1) {
	if (selection == 0) {
	    if (!cm.haveItem(1032060) && cm.haveItem(4001198, 10)) {
		cm.gainItem(1032060,1);
		cm.gainItem(4001198, -10);
	    } else {
		cm.sendOk("你要么已经拥有奥泰尔耳环，要么没有10个奥泰尔碎片。");
	    }
	} else if (selection == 1){
	    if (cm.haveItem(1032060) && !cm.haveItem(1032061) && cm.haveItem(4001198, 10)) {
		cm.gainItem(1032060,-1);
		cm.gainItem(1032061, 1);
		cm.gainItem(4001198, -10);
	    } else {
		cm.sendOk("你要么还没有奥泰尔耳环，要么没有10个奥泰尔碎片。");
	    }
	} else if (selection == 1){
	    if (cm.haveItem(1032061) && !cm.haveItem(1032101) && cm.haveItem(4001198, 10)) {
		cm.gainItem(1032061,-1);
		cm.gainItem(1032101, 1);
		cm.gainItem(4001198, -10);
	    } else {
		cm.sendOk("你要么还没有闪耀奥泰尔耳环，要么没有10个奥泰尔碎片。");
	    }
	} else if (selection == 2) {
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
			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 255) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Ellin");
			if (em == null) {
				cm.sendOk("请稍后再试。");
			} else {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 120);
			}
		} else {
			cm.sendOk("你队伍中的所有2名以上成员都必须在这里，且等级达到70级以上。");
		}
	    }
	}
	cm.dispose();
    }
}