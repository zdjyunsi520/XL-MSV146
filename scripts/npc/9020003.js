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
	cm.sendSimple("#b#L2#组队保护肯塔。#l\r\n#L3#肯塔护目镜（50个比努斯鳞片）#l\r\n#L4#随机宠物装备卷轴（5个比努斯鳞片）#l#k");
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
			var em = cm.getEventManager("Kenta");
			if (em == null) {
				cm.sendOk("肯塔目前很安全。请稍后再试。");
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
	} else if (selection == 3) {
		if (!cm.canHold(1022123,1)) {
			cm.sendOk("请在装备栏腾出空间。");
		} else if (cm.haveItem(4001535,50)) { //TODO JUMP
			cm.gainItem(1022123, 1);
			cm.gainItem(4001535, -50);
		} else {
			cm.sendOk("请带50个比努斯鳞片再来。");
		}
	} else if (selection == 4) {
		if (!cm.canHold(2048010,1) || !cm.canHold(2048011,1) || !cm.canHold(2048012,1) || !cm.canHold(2048013,1)) {
			cm.sendOk("请在消耗栏腾出空间。");
		} else if (cm.haveItem(4001535,5)) { //TODO JUMP
			cm.gainItem(2048010 + java.lang.Math.floor(java.lang.Math.random() * 4) | 0, 1);
			cm.gainItem(4001535, -5);
		} else {
			cm.sendOk("请带5个比努斯鳞片再来。");
		}
	}
	cm.dispose();
    }
}