var status = -1;

function start() {
	if (cm.getPlayer().getMapId() == 271040100) {
		cm.sendYesNo("你想出去吗？");
		status = 1;
		return;
	}
		if (cm.getPlayer().getLevel() < 170) {
			cm.sendOk("挑战女皇席格纳斯需要达到170级。");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 2) {
			cm.sendOk("席格纳斯只能在2频道挑战。");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("CygnusBattle");

    if (em == null) {
	cm.sendOk("活动尚未开始，请联系管理员。");
	cm.dispose();
	return;
    }
    var eim_status = em.getProperty("state");
	    var marr = cm.getQuestRecord(160109);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (eim_status == null || eim_status.equals("0")) {
    var squadAvailability = cm.getSquadAvailability("Cygnus");
    if (squadAvailability == -1) {
	status = 0;
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去24小时内已经挑战过席格纳斯了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
	cm.sendYesNo("你有兴趣成为远征队的队长吗？");

    } else if (squadAvailability == 1) {
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去24小时内已经挑战过席格纳斯了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
	// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("Cygnus");
	if (type == -1) {
	    cm.sendOk("远征队已解散，请重新注册。");
	    cm.dispose();
	} else if (type == 0) {
	    var memberType = cm.isSquadMember("Cygnus");
	    if (memberType == 2) {
		cm.sendOk("你已被远征队禁止加入。");
		cm.dispose();
	    } else if (memberType == 1) {
		status = 5;
		cm.sendSimple("你想做什么？\r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员名单#l");
	    } else if (memberType == -1) {
		cm.sendOk("远征队已解散，请重新注册。");
		cm.dispose();
	    } else {
		status = 5;
		cm.sendSimple("你想做什么？\r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员名单#l");
	    }
	} else { // Is leader
	    status = 10;
	    cm.sendSimple("你想做什么，远征队队长？\r\n#b#L0#查看远征队名单#l \r\n#b#L1#踢出远征队成员#l \r\n#b#L2#从禁止名单中移除#l \r\n#r#L3#选择远征队并进入#l");
	// TODO viewing!
	}
	    } else {
			var eim = cm.getDisconnected("CygnusBattle");
			if (eim == null) {
				var squd = cm.getSquad("Cygnus");
				if (squd != null) {
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去24小时内已经挑战过席格纳斯了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征队的BOSS战斗已经开始。\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("远征队的BOSS战斗已经开始。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。你想重新加入你的远征队继续战斗吗？");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("CygnusBattle");
			if (eim == null) {
				var squd = cm.getSquad("Cygnus");
				if (squd != null) {
	    if (time + (24 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去24小时内已经挑战过席格纳斯了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (24 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征队的BOSS战斗已经开始。\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("远征队的BOSS战斗已经开始。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。你想重新加入你的远征队继续战斗吗？");
				status = 2;
			}
	}
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("Cygnus", 5, " 已被任命为远征队队长。如果你想加入，请在规定时间内注册远征队。")) {
				cm.sendOk("你已被任命为远征队队长。在接下来的5分钟内，你可以添加远征队的成员。");
			} else {
				cm.sendOk("添加远征队时发生了错误。");
			}
	    }
	    cm.dispose();
	    break;
	case 1:
	    if (mode == 1) {
		cm.warp(cm.getMap().getAllMonstersThreadsafe().size() == 0 ? 271040200 : 271030000, 0);
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("CygnusBattle", "Cygnus")) {
			cm.sendOk("出错了……请重试。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("Cygnus");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已成功预约名额。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) { // join
		var ba = cm.addMember("Cygnus", true);
		if (ba == 2) {
		    cm.sendOk("远征队目前已满，请稍后再试。");
		} else if (ba == 1) {
		    cm.sendOk("你已成功加入远征队。");
		} else {
		    cm.sendOk("你已经是远征队的成员了。");
		}
	    } else if (selection == 1) {// withdraw
		var baa = cm.addMember("Cygnus", false);
		if (baa == 1) {
		    cm.sendOk("你已成功退出远征队。");
		} else {
		    cm.sendOk("你不是远征队的成员。");
		}
	    } else if (selection == 2) {
		if (!cm.getSquadList("Cygnus", 0)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("Cygnus", 0)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("Cygnus", 1)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("Cygnus", 2)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("Cygnus") != null) {
			var dd = cm.getEventManager("CygnusBattle");
			dd.startInstance(cm.getSquad("Cygnus"), cm.getMap(), 160109);
		    } else {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("Cygnus", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("Cygnus", selection);
	    }
	    cm.dispose();
	    break;
    }
}