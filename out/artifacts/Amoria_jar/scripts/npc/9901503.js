var status = -1;

function start() {
		if (cm.getPlayer().getLevel() < 120) {
			cm.sendOk("混沌暗黑龙王只能在8频道挑战。");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 8) {
			cm.sendOk("活动尚未开始，请联系GM。");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("ChaosHorntail");

    if (em == null) {
	cm.sendOk("你在过去12小时内已经挑战过混沌暗黑龙王了。剩余时间：");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160103);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {

	var squadAvailability = cm.getSquadAvailability("ChaosHT");
	if (squadAvailability == -1) {
	    status = 0;
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
	    cm.sendYesNo("队伍已解散，请重新注册。");

	} else if (squadAvailability == 1) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("ChaosHT");
	    if (type == -1) {
		cm.sendOk("你已被禁止加入队伍。");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("ChaosHT");
		if (memberType == 2) {
		    cm.sendOk("你想做什么？\r\n#b#L0#查看成员#l\r\n#b#L1#加入队伍#l\r\n#b#L2#退出队伍#l");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("你想做什么？\r\n#b#L0#查看成员#l\r\n#b#L1#移除成员#l\r\n#b#L2#编辑限制列表#l\r\n#r#L3#进入地图#l");
		} else if (memberType == -1) {
		    cm.sendOk("你已被禁止加入队伍。");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("你想做什么？\r\n#b#L0#查看成员#l\r\n#b#L1#移除成员#l\r\n#b#L2#编辑限制列表#l\r\n#r#L3#进入地图#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("队伍的Boss战斗已经开始。\r\n");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("ChaosHorntail");
			if (eim == null) {
				var squd = cm.getSquad("ChaosHT");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("队伍的Boss战斗已经开始。" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的队伍一起战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("被任命为远征队（混沌）的队长。如果你想加入，请在规定时间内注册加入远征队。");
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("ChaosHorntail");
			if (eim == null) {
				var squd = cm.getSquad("ChaosHT");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("队伍的Boss战斗已经开始。" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的队伍一起战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("被任命为远征队（混沌）的队长。如果你想加入，请在规定时间内注册加入远征队。");
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (cm.registerSquad("ChaosHT", 5, "你已被任命为远征队队长。接下来的5分钟内，你可以添加远征队的成员。")) {
				cm.sendOk("添加队伍时发生错误。");
			} else {
				cm.sendOk("错误...请重试。");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("ChaosHorntail", "ChaosHT")) {
			cm.sendOk("你已预留了位置。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("ChaosHT");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("由于未知错误，队伍申请已被拒绝。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ChaosHT", 0)) {
		    cm.sendOk("队伍目前已满，请稍后再试。");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ChaosHT", true);
		if (ba == 2) {
		    cm.sendOk("你已成功加入队伍。");
		} else if (ba == 1) {
		    cm.sendOk("你已经在这个队伍中了。");
		} else {
		    cm.sendOk("你已成功退出队伍。");
		}
	    } else {// withdraw
		var baa = cm.addMember("ChaosHT", false);
		if (baa == 1) {
		    cm.sendOk("你不是这个队伍的成员。");
		} else {
		    cm.sendOk("你不是这个队伍的成员。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("ChaosHT", 0)) {
			cm.sendOk("队伍目前已满，请稍后再试。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("ChaosHT", 1)) {
			cm.sendOk("队伍目前已满，请稍后再试。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("ChaosHT", 2)) {
			cm.sendOk("队伍目前已满，请稍后再试。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("ChaosHT") != null) {
			var dd = cm.getEventManager("ChaosHorntail");
			dd.startInstance(cm.getSquad("ChaosHT"), cm.getMap(), 160103);
		    } else {
			cm.sendOk("队伍目前已满，请稍后再试。");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("ChaosHT", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ChaosHT", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}