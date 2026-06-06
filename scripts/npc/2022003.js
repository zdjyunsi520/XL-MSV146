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
	cm.sendSimple("#b#L2#和队伍一起前往冰之峡谷。#l\r\n#L1#独自前往冰之峡谷。（任务）#l\r\n\r\n#L3#升级红色雷克斯耳环#l\r\n#L4#升级蓝色雷克斯耳环#l\r\n#L5#升级绿色雷克斯耳环#l#k");
    } else if (status == 1) {
	if (selection == 1) {
		cm.warp(921120000, 0);
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
			if (ccPlayer == null || ccPlayer.getLevel() < 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Rex");
			if (em == null) {
				cm.sendOk("我现在不想见到雷克斯。请稍后再试。");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
		    } else {
			cm.sendOk("已经有其他队伍进入了这个频道。");
		    }
			}
		} else {
			cm.sendOk("你的队伍必须有2名或以上成员在此，且等级达到120或以上。");
		}
	    }
	} else if (selection == 3) {
	if (cm.haveItem(1032078,1)) {
		if (!cm.canHold(1032103,1)) {
			cm.sendOk("请在装备栏腾出空间。");
		} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
			cm.gainItem(1032103, 1);
			cm.gainItem(4001530, -20);
		} else {
			cm.sendOk("带上20个霍布勇士的证明后再来。");
		}
	} else {
	    cm.sendOk("带上红色雷克斯耳环后再来。");
	}
	} else if (selection == 4) {
	if (cm.haveItem(1032079,1)) {
		if (!cm.canHold(1032104,1)) {
			cm.sendOk("请在装备栏腾出空间。");
		} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
			cm.gainItem(1032104, 1);
			cm.gainItem(4001530, -20);
		} else {
			cm.sendOk("带上20个霍布勇士的证明后再来。");
		}
	} else {
	    cm.sendOk("带上蓝色雷克斯耳环后再来。");
	}
	} else if (selection == 5) {
	if (cm.haveItem(1032077,1)) {
		if (!cm.canHold(1032102,1)) {
			cm.sendOk("请在装备栏腾出空间。");
		} else if (cm.haveItem(4001530,20) && cm.isGMS()) { //TODO JUMP
			cm.gainItem(1032102, 1);
			cm.gainItem(4001530, -20);
		} else {
			cm.sendOk("带上20个霍布勇士的证明后再来。");
		}
	} else {
	    cm.sendOk("带上绿色雷克斯耳环后再来。");
	}
	}
	cm.dispose();
    }
}