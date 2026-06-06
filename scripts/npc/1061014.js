/* Mu Young
	Boss Balrog
*/


var status = -1;
var balrogMode; // false = easy, true = hard

function action(mode, type, selection) {
    switch (status) {
	case -1:
	    status = 0;
	    switch (cm.getChannelNumber()) {
		case 5:
		    balrogMode = true;
		    cm.sendNext("你当前所在的频道可用于#b普通巴洛古远征队#k。如果你想参加其他模式，请选择正确的频道。\n\r #b#i3994116# 5频道 / 等级50以上 / 6~15人 \n#b#i3994115# 其他频道 / 等级50~70 / 3~6人。");
		    break;
		default:
		    balrogMode = false;
		    cm.sendNext("你当前所在的频道可用于#b简单巴洛古远征队#k。如果你想参加其他模式，请选择正确的频道。\n\r #b#i3994116# 5频道 / 等级50以上 / 6~15人 \n#b#i3994115# 其他频道 / 等级50~70 / 3~6人。");
		    break;
	    }
	    break;
	case 0:
	    var em = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");

	    if (em == null) {
		cm.sendOk("活动尚未开始，请联系管理员。");
		cm.safeDispose();
		return;
	    }

	    if (cm.getParty() != null) {
	var prop = em.getProperty("state");
	    var marr = cm.getQuestRecord(balrogMode ? 160106 : 160105);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    var time = parseInt(data);
	if (prop == null || prop.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("BossBalrog");
		if (squadAvailability == -1) {
		    status = 1;
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经去过巴洛古了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
	    }
		    cm.sendYesNo("你想成为巴洛古远征队的队长吗？");

		} else if (squadAvailability == 1) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经去过巴洛古了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
		cm.dispose();
		return;
	    }
		    // -1 = Cancelled, 0 = not, 1 = true
		    var type = cm.isSquadLeader("BossBalrog");
		    if (type == -1) {
			cm.sendOk("远征队已结束，请重新注册。");
			cm.safeDispose();
		    } else if (type == 0) {
			var memberType = cm.isSquadMember("BossBalrog");
			if (memberType == 2) {
			    cm.sendOk("你已被禁止加入远征队。");
			    cm.safeDispose();
			} else if (memberType == 1) {
			    status = 5;
			    cm.sendSimple("你想做什么？\r\n#b#L0#查看成员#l\r\n#b#L1#加入远征队#l\r\n#b#L2#退出远征队#l");
			} else if (memberType == -1) {
			    cm.sendOk("远征队已结束，请重新注册。");
			    cm.safeDispose();
			} else {
			    status = 5;
			    cm.sendSimple("你想做什么？\r\n#b#L0#查看成员#l\r\n#b#L1#加入远征队#l\r\n#b#L2#退出远征队#l");
			}
		    } else { // Is leader
			status = 10;
			cm.sendSimple("你想做什么？\r\n#b#L0#查看成员#l\r\n#b#L1#移除成员#l\r\n#b#L2#编辑限制名单#l\r\n#r#L3#进入地图#l");
		    // TODO viewing!
		    }
	    } else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
			if (eim == null) {
				var squd = cm.getSquad("BossBalrog");
				if (squd != null) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经去过巴洛古了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
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
				cm.sendYesNo("啊，你回来了。你想再次加入你的远征队继续战斗吗？");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
			if (eim == null) {
				var squd = cm.getSquad("BossBalrog");
				if (squd != null) {
	    if (time + (6 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
		cm.sendOk("你在过去6小时内已经去过巴洛古了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (6 * 3600000)));
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
				cm.sendYesNo("啊，你回来了。你想再次加入你的远征队继续战斗吗？");
				status = 2;
			}
	}
	    } else {
		cm.sendPrev("你需要组建一个队伍。");
		cm.safeDispose();
	    }
	    break;
	case 1:
	    if (mode == 1) {
		if (!balrogMode) { // Easy Mode
		    var lvl = cm.getPlayerStat("LVL");
		    if (lvl >= 50 && lvl <= 70) {
			if (cm.registerSquad("BossBalrog", 5, " 已被任命为远征队队长。如果你想加入，请在规定时间内注册远征队。")) {
				cm.sendOk("你已被任命为远征队队长。接下来的5分钟内，你可以添加远征队成员。");
			} else {
				cm.sendOk("出错了，请重试。");
			}
		    } else {
			cm.sendNext("队伍中有成员的等级不在50~70级范围内。请调整队伍使所有人符合等级限制。");
		    }
		} else { // Normal Mode
			if (cm.registerSquad("BossBalrog", 5, " 已被任命为远征队队长。如果你想加入，请在规定时间内注册远征队。")) {
				cm.sendOk("你已被任命为远征队队长。接下来的5分钟内，你可以添加远征队成员。");
			} else {
				cm.sendOk("出错了，请重试。");
			}
		}
	    } else {
		cm.sendOk("如果你想成为远征队队长，请跟我谈谈。")
	    }
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY", "BossBalrog")) {
			cm.sendOk("出错了……请重试。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("BossBalrog");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("你已经预约了位置。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("BossBalrog", true);
		if (ba == 2) {
		    cm.sendOk("远征队目前已满，请稍后再试。");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("你已成功加入远征队。");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你已经是远征队的成员了。");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("BossBalrog", false);
		if (baa == 1) {
		    cm.sendOk("你已成功退出远征队。");
		    cm.safeDispose();
		} else {
		    cm.sendOk("你不是远征队的成员。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("BossBalrog", 0)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("BossBalrog", 1)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("BossBalrog", 2)) {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		}
		cm.safeDispose();
	    } else if (selection == 3) { // get insode
		if (cm.getSquad("BossBalrog") != null) {
		    var dd = cm.getEventManager(balrogMode ? "BossBalrog_NORMAL" : "BossBalrog_EASY");
		    dd.startInstance(cm.getSquad("BossBalrog"), cm.getMap(), balrogMode ? 160106 : 160105);
		    cm.dispose();
		} else {
		    cm.sendOk("由于未知错误，远征队请求被拒绝。");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("BossBalrog", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("BossBalrog", selection);
	    }
	    cm.dispose();
	    break;
    }
}