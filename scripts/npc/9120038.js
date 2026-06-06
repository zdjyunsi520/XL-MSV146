/*
	NPC Name: 		Dida
	Map(s): 		2095 Park
	Description: 		Battle starter
 */
var status = -1;

function start() {
    if (cm.getMapId() == 802000310) {
		if (cm.getPlayer().getClient().getChannel() != 6) {
			cm.sendOk("活动尚未开始，请联系管理员。");
			cm.dispose();
			return;
		}
	var em = cm.getEventManager("2095_tokyo");

	if (em == null) {
	    cm.sendOk("你有兴趣成为远征队的队长吗？");
	    cm.dispose();
	    return;
	}
	var prop = em.getProperty("state");
	if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("tokyo_2095");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("远征队已结束，请重新注册。");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("tokyo_2095");
	    if (type == -1) {
		cm.sendOk("你已被禁止加入远征队。");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("tokyo_2095");
		if (memberType == 2) {
		    cm.sendOk("你想做什么？ \r\n#b#L0#查看成员列表#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("你的任务是收集10个能量传送装置。 \r\n#b#L0#查看成员列表#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#r#L3#进入地图#l \r\n#b#L4#我需要简易电脉冲发射器#l");
		} else if (memberType == -1) {
		    cm.sendOk("你已被禁止加入远征队。");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("你的任务是收集10个能量传送装置。 \r\n#b#L0#查看成员列表#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#r#L3#进入地图#l \r\n#b#L4#我需要简易电脉冲发射器#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("远征队与Boss的战斗已经开始。\r\n");
	    }
    } else {
			var eim = cm.getDisconnected("2095_tokyo");
			if (eim == null) {
				var squd = cm.getSquad("tokyo_2095");
				if (squd != null) {
					cm.sendYesNo("远征队与Boss的战斗已经开始。" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的远征队战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你想现在出去吗？");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("2095_tokyo");
			if (eim == null) {
				var squd = cm.getSquad("tokyo_2095");
				if (squd != null) {
					cm.sendYesNo("远征队与Boss的战斗已经开始。" + squd.getNextPlayer());
					status = 3;
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的远征队战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你想现在出去吗？");
				status = 2;
			}
	}

    } else {
	status = 25;
	cm.sendNext("已被任命为远征队队长。如果你想加入，请在规定时间内注册远征队。");
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    if (mode == 1) {
			if (cm.registerSquad("tokyo_2095", 5, "你已被任命为远征队队长。接下来的5分钟内，你可以添加远征队成员。")) {
				cm.sendOk("添加远征队时发生了错误。");
			} else {
				cm.sendOk("出错了……请重试。");
			}
	    }
	    cm.dispose();
	    break;
	case 2:
		if (!cm.reAdd("2095_tokyo", "tokyo_2095")) {
			cm.sendOk("你已预约了位置。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("tokyo_2095");
			if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("由于未知错误，远征队申请被拒绝。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("tokyo_2095", 0)) {
		    cm.sendOk("远征队目前人数已满，请稍后再试。");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("tokyo_2095", true);
		if (ba == 2) {
		    cm.sendOk("你已成功加入远征队");
		} else if (ba == 1) {
		    cm.sendOk("你已经是远征队的成员了。");
		} else {
		    cm.sendOk("你已成功退出远征队");
		}
	    } else {// withdraw
		var baa = cm.addMember("tokyo_2095", false);
		if (baa == 1) {
		    cm.sendOk("你不是远征队的成员。");
		} else {
		    cm.sendOk("#b#t4032202##k，别忘了把它放在玛尔面前。");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0) {
		    if (!cm.getSquadList("tokyo_2095", 0)) {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("tokyo_2095", 1)) {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("tokyo_2095", 2)) {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
			cm.dispose();
		    }
		} else if (selection == 3) { // get insode
		    status = 13;
		    cm.sendNext("拿着这个，这是爸爸的重要物品，但这应该足以把那个机器人赶跑。你能把它放在玛尔面前吗？")
		} else if (selection == 4) { // Transmitter
		    status = 17;
		    cm.sendNext("你面对的敌人正在使用#b#t4032192##k作为驱动力。你需要消灭敌人并收集它们，然后立即送到玛尔那里，这样她才能逃跑。");
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("tokyo_2095", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("tokyo_2095", selection);
	    }
	    cm.dispose();
	    break;
	case 13:
	    status = 14;
	    cm.sendNextPrev("这应该足够支撑20分钟。我建议你在20分钟内逃离！");
	    break;
	case 14:
	    status = 15;
	    cm.sendNextPrev("你收集的#b#t4032192##k必须由远征队队长交给玛尔！");
	    break;
	case 15:
	    status = 16;
	    cm.sendNextPrev("小心。请在6分钟内将物品放在玛尔面前，否则任务失败。");
	    break;
	case 16:
	    if (cm.getSquad("tokyo_2095") != null) {
		var dd = cm.getEventManager("2095_tokyo");
		dd.startInstance(cm.getSquad("tokyo_2095"), cm.getMap());
	    } else {
		cm.sendOk("远征队目前人数已满，请稍后再试。");
	    }
	    cm.dispose();
	    break;
	case 17:
	    cm.gainItem(4032202, 1);
	    cm.sendNextPrev("小心。请在6分钟内将物品放在玛尔面前，否则任务失败。");
	    cm.dispose();
	    break;
	case 25:
	    cm.warp(802000210, 0);
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}