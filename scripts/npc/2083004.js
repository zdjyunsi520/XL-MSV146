/*
	NPC Name: 		Mark of the Squad
	Map(s): 		Entrance to Horned Tail's Cave
	Description: 		Horntail Battle starter
*/
var status = -1;

function start() {
		if (cm.getPlayer().getLevel() < 80) {
			cm.sendOk("挑战暗黑龙王需要达到80级。");
			cm.dispose();
			return;
		}

    var em = cm.getEventManager("HorntailBattle");

    if (em == null) {
	cm.sendOk("活动尚未开始，请联系管理员。");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");

	    var marr = cm.getQuestRecord(160100);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("Horntail");
	if (squadAvailability == -1) {
	    status = 0;
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过暗黑龙王了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
	    cm.sendYesNo("你有兴趣成为远征队的队长吗？");

	} else if (squadAvailability == 1) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过暗黑龙王了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("Horntail");
	    if (type == -1) {
		cm.sendOk("远征队已解散，请重新注册。");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("Horntail");
		if (memberType == 2) {
		    cm.sendOk("你已被远征队禁止加入。");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("你想做什么？\r\n#b#L0#查看成员名单#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
		} else if (memberType == -1) {
		    cm.sendOk("远征队已解散，请重新注册。");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("你想做什么？\r\n#b#L0#查看成员名单#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("你想做什么？\r\n#b#L0#查看成员名单#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#r#L3#进入地图#l");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				var squd = cm.getSquad("Horntail");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过暗黑龙王了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				var squd = cm.getSquad("Horntail");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过暗黑龙王了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
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
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (cm.registerSquad("Horntail", 5, " 已被任命为远征队（普通）队长。如果你想加入，请在规定时间内注册远征队。")) {
				cm.sendOk("你已被任命为远征队队长。在接下来的5分钟内，你可以添加远征队的成员。");
			} else {
				cm.sendOk("添加远征队时发生了错误。");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("HorntailBattle", "Horntail")) {
			cm.sendOk("出错了……请重试。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("Horntail");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已成功预约名额。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("Horntail", 0)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("Horntail", true);
		if (ba == 2) {
		    cm.sendOk("远征队目前已满，请稍后再试。");
		} else if (ba == 1) {
		    cm.sendOk("你已成功加入远征队。");
		} else {
		    cm.sendOk("你已经是远征队的成员了。");
		}
	    } else {// withdraw
		var baa = cm.addMember("Horntail", false);
		if (baa == 1) {
		    cm.sendOk("你已成功退出远征队。");
		} else {
		    cm.sendOk("你不是远征队的成员。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("Horntail", 0)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("Horntail", 1)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("Horntail", 2)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("Horntail") != null) {
			var dd = cm.getEventManager("HorntailBattle");
			dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
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
	    cm.banMember("Horntail", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("Horntail", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}