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
	cm.sendSimple("#b#L2#组队越狱。#l\r\n#L3#马克思·冯·雷昂腰带（50个守卫钥匙）（力量/敏捷）#l\r\n#L4#阿尔玛·冯·雷昂腰带（50个守卫钥匙）（智力/运气）#l\r\n#L5#福克斯·冯·雷昂腰带（50个守卫钥匙）（力量/敏捷）#l\r\n#L6#诺克斯·冯·雷昂腰带（50个守卫钥匙）（敏捷/运气）#l\r\n#L7#科拉·冯·雷昂腰带（50个守卫钥匙）（力量/敏捷）#l#k");
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
			if (ccPlayer == null || ccPlayer.getLevel() < 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Prison");
			if (em == null) {
				cm.sendOk("监狱目前没有问题。请稍后再试。");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
		    } else {
			cm.sendOk("此频道已经有一个队伍任务在进行中。");
		    }
			}
		} else {
			cm.sendOk("你的队伍必须有2名以上成员在此且等级达到120级以上。");
		}
	    }
	} else if (selection == 3 || selection == 4 || selection == 5 || selection == 6 || selection == 7) {
		if (!cm.canHold(1132091 + selection,1)) {
			cm.sendOk("请在装备栏腾出空间。");
		} else if (cm.haveItem(4001534,50)) { //TODO JUMP
			cm.gainItem(1132091 + selection, 1);
			cm.gainItem(4001534, -50);
		} else {
			cm.sendOk("请带50个守卫钥匙再来。");
		}
	}
	cm.dispose();
    }
}