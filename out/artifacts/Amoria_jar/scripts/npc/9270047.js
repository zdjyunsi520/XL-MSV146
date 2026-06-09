var status = -1;

function start() {
	if (cm.getPlayer().getMapId() == 551030200) {
		cm.sendYesNo("挑战狮蝎/塔加需要达到90级。");
		status = 1;
		return;
	}
		if (cm.getPlayer().getLevel() < 90) {
			cm.sendOk("狮蝎/塔加只能在频道6、7、8、9挑战。");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 6 && cm.getPlayer().getClient().getChannel() != 7 && cm.getPlayer().getClient().getChannel() != 8 && cm.getPlayer().getClient().getChannel() != 9) {
			cm.sendOk("活动尚未开始，请联系GM。");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("ScarTarBattle");

    if (em == null) {
	cm.sendOk("你在过去3小时内已经去过狮蝎/塔加了。剩余时间：");
	cm.dispose();
	return;
    }
    var eim_status = em.getProperty("state");
	    var marr = cm.getQuestRecord(160108);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (eim_status == null || eim_status.equals("0")) {
    var squadAvailability = cm.getSquadAvailability("ScarTar");
    if (squadAvailability == -1) {
	status = 0;
	    if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
		cm.dispose();
		return;
	    }
	cm.sendYesNo("远征队已结束，请重新注册。");

    } else if (squadAvailability == 1) {
	    if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
		cm.dispose();
		return;
	    }
	// -1 = Cancelled, 0 = not, 1 = true
	var type = cm.isSquadLeader("ScarTar");
	if (type == -1) {
	    cm.sendOk("你已被禁止加入远征队。");
	    cm.dispose();
	} else if (type == 0) {
	    var memberType = cm.isSquadMember("ScarTar");
	    if (memberType == 2) {
		cm.sendOk("你想做什么？\r\n#b#L0#加入远征队#l \r\n#b#L1#离开远征队#l \r\n#b#L2#查看远征队成员列表#l");
		cm.dispose();
	    } else if (memberType == 1) {
		status = 5;
		cm.sendSimple("远征队长，你想做什么？\r\n#b#L0#查看远征队列表#l \r\n#b#L1#踢出远征队#l \r\n#b#L2#从封禁名单中移除#l \r\n#r#L3#选择远征队并进入#l");
	    } else if (memberType == -1) {
		cm.sendOk("你已被禁止加入远征队。");
		cm.dispose();
	    } else {
		status = 5;
		cm.sendSimple("远征队长，你想做什么？\r\n#b#L0#查看远征队列表#l \r\n#b#L1#踢出远征队#l \r\n#b#L2#从封禁名单中移除#l \r\n#r#L3#选择远征队并进入#l");
	    }
	} else { // Is leader
	    status = 10;
	    cm.sendSimple("远征队与BOSS的战斗已经开始了。\r\n");
	// TODO viewing!
	}
	    } else {
			var eim = cm.getDisconnected("ScarTarBattle");
			if (eim == null) {
				var squd = cm.getSquad("ScarTar");
				if (squd != null) {
	    if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征队与BOSS的战斗已经开始了。" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的远征队继续战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("被任命为远征队队长。如果你想加入，请在规定时间内注册加入远征队。");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ScarTarBattle");
			if (eim == null) {
				var squd = cm.getSquad("ScarTar");
				if (squd != null) {
	    if (time + (3 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你有兴趣成为远征队的队长吗？ " + cm.getReadableMillis(cm.getCurrentTime(), time + (3 * 360000)));
		cm.dispose();
		return;
	    }
					cm.sendYesNo("远征队与BOSS的战斗已经开始了。" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的远征队继续战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("被任命为远征队队长。如果你想加入，请在规定时间内注册加入远征队。");
				status = 2;
			}
	}
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("ScarTar", 5, "你已被任命为远征队队长。在接下来的5分钟内，你可以添加远征队的成员。")) {
				cm.sendOk("添加你的远征队时发生了错误。");
			} else {
				cm.sendOk("错误...请重试。");
			}
	    }
	    cm.dispose();
	    break;
	case 1:
	    if (mode == 1) {
		cm.warp(551030100, 0);
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("ScarTarBattle", "ScarTar")) {
			cm.sendOk("你已预约了位置。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("ScarTar");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("远征队目前已满，请稍后再试。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) { // join
		var ba = cm.addMember("ScarTar", true);
		if (ba == 2) {
		    cm.sendOk("你已成功加入远征队");
		} else if (ba == 1) {
		    cm.sendOk("你已经在这个远征队中了。");
		} else {
		    cm.sendOk("你已成功退出远征队");
		}
	    } else if (selection == 1) {// withdraw
		var baa = cm.addMember("ScarTar", false);
		if (baa == 1) {
		    cm.sendOk("你不在这个远征队中。");
		} else {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
	    } else if (selection == 2) {
		if (!cm.getSquadList("ScarTar", 0)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("ScarTar", 0)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("ScarTar", 1)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("ScarTar", 2)) {
			cm.sendOk("由于未知错误，远征队请求被拒绝。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    if (cm.getSquad("ScarTar") != null) {
			var dd = cm.getEventManager("ScarTarBattle");
			dd.startInstance(cm.getSquad("ScarTar"), cm.getMap(), 160108);
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
	    cm.banMember("ScarTar", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ScarTar", selection);
	    }
	    cm.dispose();
	    break;
    }
}