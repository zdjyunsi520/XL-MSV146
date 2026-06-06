/*
	NPC Name: 		Adobis
	Map(s): 		El Nath : Entrance to Zakum Altar
	Description: 		Zakum battle starter
*/
var status = 0;

function action(mode, type, selection) {
	if (cm.getPlayer().getMapId() == 211042200) {
		if (selection < 100) {
			cm.sendSimple("#r#L100#普通扎昆#l\r\n#L101#混沌扎昆#l");
		} else {
			if (selection == 100) {
				cm.warp(211042300,0);
			} else if (selection == 101) {
				cm.warp(211042301,0);
			}
			cm.dispose();
		}
		return;
	} else if (cm.getPlayer().getMapId() == 211042401) {
    switch (status) {
	case 0:
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("挑战混沌扎昆需要100级以上。");
			cm.dispose();
			return;
		}
	    var em = cm.getEventManager("ChaosZakum");

	    if (em == null) {
		cm.sendOk("活动尚未开始，请联系管理员。");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160102);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
	    var squadAvailability = cm.getSquadAvailability("ChaosZak");
	    if (squadAvailability == -1) {
		status = 1;
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过混沌扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
		cm.sendYesNo("你有兴趣成为远征队的队长吗？");

	    } else if (squadAvailability == 1) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过混沌扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("ChaosZak");
		if (type == -1) {
		    cm.sendOk("队伍已结束，请重新注册。");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("ChaosZak");
		    if (memberType == 2) {
			cm.sendOk("你已被禁止加入队伍。");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出队伍#l");
		    } else if (memberType == -1) {
			cm.sendOk("队伍已结束，请重新注册。");
			cm.safeDispose();
		    } else {
			status = 5;
			cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出队伍#l");
		    }
		} else { // Is leader
		    status = 10;
		    cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#r#L3#进入地图#l");
		// TODO viewing!
		}
	    } else {
			var eim = cm.getDisconnected("ChaosZakum");
			if (eim == null) {
				var squd = cm.getSquad("ChaosZak");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过混沌扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("队伍与BOSS的战斗已经开始了。\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("队伍与BOSS的战斗已经开始了。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。想重新加入你的队伍继续战斗吗？");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ChaosZakum");
			if (eim == null) {
				var squd = cm.getSquad("ChaosZak");
				if (squd != null) {
	    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去12小时内已经挑战过混沌扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("队伍与BOSS的战斗已经开始了。\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("队伍与BOSS的战斗已经开始了。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。想重新加入你的队伍继续战斗吗？");
				status = 2;
			}
	}
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("ChaosZak", 5, " 已被任命为（混沌）队伍的队长。如果你想加入，请在规定时间内注册远征队。")) {
				cm.sendOk("你已被任命为队伍队长。在接下来的5分钟内，你可以添加远征队的成员。");
			} else {
				cm.sendOk("添加队伍时发生错误。");
			}
	    	} else {
			cm.sendOk("如果你想成为远征队的队长，请和我说话。")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("ChaosZakum", "ChaosZak")) {
			cm.sendOk("发生错误……请重试。");
		}
		cm.dispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("ChaosZak");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已预约了名额。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ChaosZak", 0)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ChaosZak", true);
		if (ba == 2) {
		    cm.sendOk("队伍目前已满，请稍后再试。");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("你已成功加入队伍。");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你已经在这个队伍中了。");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("ChaosZak", false);
		if (baa == 1) {
		    cm.sendOk("你已成功退出队伍。");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你不在队伍中。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("ChaosZak", 0)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("ChaosZak", 1)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		cm.safeDispose();
		}

	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("ChaosZak", 2)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		cm.safeDispose();
		}

	    } else if (selection == 3) { // get insode
		if (cm.getSquad("ChaosZak") != null) {
		    var dd = cm.getEventManager("ChaosZakum");
		    dd.startInstance(cm.getSquad("ChaosZak"), cm.getMap(), 160102);
		    cm.dispose();
		} else {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("ChaosZak", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ChaosZak", selection);
	    }
	    cm.dispose();
	    break;
    }
	} else {
    switch (status) {
	case 0:
		if (cm.getPlayer().getLevel() < 50) {
			cm.sendOk("挑战普通扎昆需要50级以上。");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 4) {
			cm.sendOk("普通扎昆只能在2、3和4频道挑战。");
			cm.dispose();
			return;
		}
	    var em = cm.getEventManager("ZakumBattle");

	    if (em == null) {
		cm.sendOk("活动尚未开始，请联系管理员。");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(160101);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
	    var squadAvailability = cm.getSquadAvailability("ZAK");
	    if (squadAvailability == -1) {
		status = 1;
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经挑战过普通扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 360000)));
		cm.dispose();
		return;
	    }
		cm.sendYesNo("你有兴趣成为远征队的队长吗？");

	    } else if (squadAvailability == 1) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经挑战过普通扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 360000)));
		cm.dispose();
		return;
	    }
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("ZAK");
		if (type == -1) {
		    cm.sendOk("队伍已结束，请重新注册。");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("ZAK");
		    if (memberType == 2) {
			cm.sendOk("你已被禁止加入队伍。");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出队伍#l");
		    } else if (memberType == -1) {
			cm.sendOk("队伍已结束，请重新注册。");
			cm.safeDispose();
		    } else {
			status = 5;
			cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出队伍#l");
		    }
		} else { // Is leader
		    status = 10;
		    cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#r#L3#进入地图#l");
		// TODO viewing!
		}
	    } else {
			var eim = cm.getDisconnected("ZakumBattle");
			if (eim == null) {
				var squd = cm.getSquad("ZAK");
				if (squd != null) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经挑战过普通扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 360000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("队伍与BOSS的战斗已经开始了。\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("队伍与BOSS的战斗已经开始了。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。想重新加入你的队伍继续战斗吗？");
				status = 1;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ZakumBattle");
			if (eim == null) {
				var squd = cm.getSquad("ZAK");
				if (squd != null) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经挑战过普通扎昆了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 360000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("队伍与BOSS的战斗已经开始了。\r\n" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("队伍与BOSS的战斗已经开始了。");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("啊，你回来了。想重新加入你的队伍继续战斗吗？");
				status = 1;
			}
	}
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("ZAK", 5, " 已被任命为（普通）队伍的队长。如果你想加入，请在规定时间内注册远征队。")) {
				cm.sendOk("你已被任命为队伍队长。在接下来的5分钟内，你可以添加远征队的成员。");
			} else {
				cm.sendOk("添加队伍时发生错误。");
			}
	    	} else {
			cm.sendOk("如果你想成为远征队的队长，请和我说话。")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("ZakumBattle", "ZAK")) {
			cm.sendOk("发生错误……请重试。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("ZAK");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已预约了名额。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ZAK", 0)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ZAK", true);
		if (ba == 2) {
		    cm.sendOk("队伍目前已满，请稍后再试。");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("你已成功加入队伍。");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你已经在这个队伍中了。");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("ZAK", false);
		if (baa == 1) {
		    cm.sendOk("你已成功退出队伍。");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你不在队伍中。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("ZAK", 0)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("ZAK", 1)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		cm.safeDispose();
		}

	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("ZAK", 2)) {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		cm.safeDispose();
		}

	    } else if (selection == 3) { // get insode
		if (cm.getSquad("ZAK") != null) {
		    var dd = cm.getEventManager("ZakumBattle");
		    dd.startInstance(cm.getSquad("ZAK"), cm.getMap(), 160101);
		    cm.dispose();
		} else {
		    cm.sendOk("由于未知错误，队伍请求被拒绝。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("ZAK", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ZAK", selection);
	    }
	    cm.dispose();
	    break;
    }
	}
}