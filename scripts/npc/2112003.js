function action(mode, type, selection) {
    var em = cm.getEventManager("Juliet");
    if (em == null || !cm.getPlayer().isGM()) {
	cm.sendOk("请稍后再试。");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 261000021:
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
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
			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 255) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size == 4)) {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 120);
		    } else {
			cm.sendOk("此频道已有另一个队伍任务正在进行。");
		    }
		} else {
			cm.sendOk("你队伍中的所有4名成员都必须在这里，且等级达到70级以上。");
		}
	    }
	    break;
	case 926110000:
	    cm.sendOk("你应该在附近调查一下。查看图书馆里的文件，直到找到实验室的入口。");
	    break;
	case 926110001:
	    cm.sendOk("请消灭所有怪物！我紧跟在你后面。");
	    break;
	case 926110100:
	    cm.sendOk("这些烧杯有泄漏。我们必须将可疑液体倒入烧杯至满，才能继续前进。");
	    break;
	case 926110200:
	    if (cm.haveItem(4001131,1)) {
		cm.sendOk("哦，我写的信！谢谢你！");
		cm.gainItem(4001131,-1);
		em.setProperty("stage", "1");
	    } else if (cm.haveItem(4001134,1)) {
		cm.gainItem(4001134,-1);
		cm.sendOk("谢谢！现在请找到泽尼密斯特文件。");
		em.setProperty("stage4", "1");
	    } else if (cm.haveItem(4001135,1) && em.getProperty("stage4").equals("1")) {
		cm.gainItem(4001135,-1);
		cm.sendOk("谢谢！现在请继续前进。");
		em.setProperty("stage4", "2");
		cm.getMap().getReactorByName("jnr3_out3").hitReactor(cm.getClient());
	    } else {
	    	cm.sendOk("我们必须阻止阿尔卡德诺和泽尼密斯特之间的冲突！先找到阿尔卡德诺文件，再找泽尼密斯特文件！");
	    }
	    break;
	case 926110300:
	    cm.sendOk("我们必须到达实验室的顶层，每个队员都要到达。");
	    break;
	case 926110400:
	    cm.sendOk("当你准备好时，我们就去救我的爱人。");
	    break;
	case 926110401:
	    cm.warpParty(926110500); //urete
	    break;
    }
    cm.dispose();
}