var status = -1;

function start() {
	cm.removeAll(4001256);
	cm.removeAll(4001257);
	cm.removeAll(4001258);
	cm.removeAll(4001259);
	cm.removeAll(4001260);
		if (cm.getPlayer().getLevel() < 90) {
			cm.sendOk("绯红木要塞只能在1、9、10、11频道进行挑战。");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 1 && cm.getPlayer().getClient().getChannel() != 10 && cm.getPlayer().getClient().getChannel() != 11 && cm.getPlayer().getClient().getChannel() != 8) {
			cm.sendOk("活动尚未开始，请联系管理员。");
			cm.dispose();
			return;
		}
    var em = cm.getEventManager("CWKPQ");

    if (em == null) {
	cm.sendOk("你有兴趣成为远征队的队长吗？");
	cm.dispose();
	return;
    }
    var prop = em.getProperty("state");

    if (prop == null || prop.equals("0")) {
	var squadAvailability = cm.getSquadAvailability("CWKPQ");
	if (squadAvailability == -1) {
	    status = 0;
	    cm.sendYesNo("远征队已结束，请重新注册。");

	} else if (squadAvailability == 1) {
	    // -1 = Cancelled, 0 = not, 1 = true
	    var type = cm.isSquadLeader("CWKPQ");
	    if (type == -1) {
		cm.sendOk("你已被禁止加入远征队。");
		cm.dispose();
	    } else if (type == 0) {
		var memberType = cm.isSquadMember("CWKPQ");
		if (memberType == 2) {
		    cm.sendOk("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出远征队#l \r\n#b#L3#查看职业#l");
		    cm.dispose();
		} else if (memberType == 1) {
		    status = 5;
		    cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#b#L3#查看职业#l \r\n#r#L4#进入地图#l");
		} else if (memberType == -1) {
		    cm.sendOk("你已被禁止加入远征队。");
		    cm.dispose();
		} else {
		    status = 5;
		    cm.sendSimple("你想做什么？ \r\n#b#L0#查看成员#l \r\n#b#L1#移除成员#l \r\n#b#L2#编辑限制名单#l \r\n#b#L3#查看职业#l \r\n#r#L4#进入地图#l");
		}
	    } else { // Is leader
		status = 10;
		cm.sendSimple("远征队对抗首领的战斗已经开始。下一个预约位置的玩家是");
	    // TODO viewing!
	    }
	} else {
			var eim = cm.getDisconnected("CWKPQ");
			if (eim == null) {
				var squd = cm.getSquad("CWKPQ");
				if (squd != null) {
					if (squd.getNextPlayer() != null) {
						cm.sendOk("远征队对抗首领的战斗已经开始。你想排队预约下一个位置吗？ " + squd.getNextPlayer());
						cm.safeDispose();
					} else {
						cm.sendYesNo("远征队对抗首领的战斗已经开始。");
						status = 3;
					}
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的远征队继续战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你需要1颗绯红之心才能申请。");
				status = 1;
			}
	}
    } else {
			var eim = cm.getDisconnected("CWKPQ");
			if (eim == null) {
				var squd = cm.getSquad("CWKPQ");
				if (squd != null) {
					if (squd.getNextPlayer() != null) {
						cm.sendOk("远征队对抗首领的战斗已经开始。你想排队预约下一个位置吗？ " + squd.getNextPlayer());
						cm.safeDispose();
					} else {
						cm.sendYesNo("远征队对抗首领的战斗已经开始。");
						status = 3;
					}
				} else {
					cm.sendOk("啊，你回来了。你想再次加入你的远征队继续战斗吗？");
					cm.safeDispose();
				}
			} else {
				cm.sendYesNo("你需要1颗绯红之心才能申请。");
				status = 1;
			}
    }
}

function action(mode, type, selection) {
    switch (status) {
	case 0:
	    	if (mode == 1) {
			if (!cm.haveItem(4032012, 1)) {
				cm.sendOk("已被任命为远征队的队长。如果你想加入，请在规定时间内注册加入远征队。");
			} else if (cm.registerSquad("CWKPQ", 5, "你已被任命为远征队队长。在接下来的5分钟内，你可以添加远征队的成员。")) {
				cm.sendOk("添加远征队时发生了错误。");
			} else {
				cm.sendOk("发生错误...请重试。");
			}
	    	}
	    cm.dispose();
	    break;
	case 1:
		if (!cm.reAdd("CWKPQ", "CWKPQ")) {
			cm.sendOk("你已成功预约了位置。");
		}
		cm.safeDispose();
		break;
	case 3:
		if (mode == 1) {
			var squd = cm.getSquad("CWKPQ");
			if (squd != null && squd.getNextPlayer() == null) {
				squd.setNextPlayer(cm.getPlayer().getName());
				cm.sendOk("由于未知错误，远征队申请已被拒绝。");
			}
		}
		cm.dispose();
		break;
	case 5:
	    if (selection == 0 || selection == 3) {
		if (!cm.getSquadList("CWKPQ", selection)) {
		    cm.sendOk("远征队目前人数已满，请稍后再试。");
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("CWKPQ", true);
		if (ba == 2) {
		    cm.sendOk("你已成功加入远征队");
		} else if (ba == 1) {
		    cm.sendOk("你已经在这个远征队中了。");
		} else {
		    cm.sendOk("你已成功退出远征队");
		}
	    } else {// withdraw
		var baa = cm.addMember("CWKPQ", false);
		if (baa == 1) {
		    cm.sendOk("你不是该远征队的成员。");
		} else {
		    cm.sendOk("我的绯红之心呢？");
		}
	    }
	    cm.dispose();
	    break;
	case 10:
	    if (mode == 1) {
		if (selection == 0 || selection == 3) {
		    if (!cm.getSquadList("CWKPQ", selection)) {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
		    }
		    cm.dispose();
		} else if (selection == 1) {
		    status = 11;
		    if (!cm.getSquadList("CWKPQ", 1)) {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
			cm.dispose();
		    }
		} else if (selection == 2) {
		    status = 12;
		    if (!cm.getSquadList("CWKPQ", 2)) {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
			cm.dispose();
		    }
		} else if (selection == 4) { // get insode
		    if (cm.getSquad("CWKPQ") != null) {
			if (cm.haveItem(4032012, 1)) {
			    cm.gainItem(4032012, -1);
			    var dd = cm.getEventManager("CWKPQ");
			    dd.startInstance(cm.getSquad("CWKPQ"), cm.getMap());
			} else {
		 	    cm.sendOk("我的绯红之心呢？");
			}
		    } else {
			cm.sendOk("远征队目前人数已满，请稍后再试。");
		    }
		    cm.dispose();
		}
	    } else {
		cm.dispose();
	    }
	    break;
	case 11:
	    cm.banMember("CWKPQ", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("CWKPQ", selection);
	    }
	    cm.dispose();
	    break;
	default:
	    cm.dispose();
	    break;
    }
}