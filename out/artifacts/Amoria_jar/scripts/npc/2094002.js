var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (cm.getPlayer().getMapId() == 925100700) {
	cm.removeAll(4001117);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.warp(251010404,0);
	cm.dispose();
	return;
    }
    var em = cm.getEventManager("Pirate");
    if (em == null) {
	cm.sendNext("活动尚未开始……");
	cm.dispose();
	return;
    }
    if (!cm.isLeader()) {
	cm.sendNext("我希望你们的队长来和我交谈。");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 925100000:
	   cm.sendNext("我们现在要登上海盗船了！要进入的话，我们必须消灭所有守卫的怪物。");
	   cm.dispose();
	   break;
	case 925100100:
	   var emp = em.getProperty("stage2");
	   if (emp == null) {
		em.setProperty("stage2", "0");
		emp = "0";
	   }
	   if (emp.equals("0")) {
		if (cm.haveItem(4001120,20)) {
		    cm.sendNext("太好了！现在去收集20枚新秀勋章。");
		    cm.gainItem(4001120,-20);
		    em.setProperty("stage2", "1");
		} else {
	   	    cm.sendNext("我们现在要登上海盗船了！要证明我们是高贵的海盗，去收集20枚新手勋章。");
		}
	   } else if (emp.equals("1")) {
		if (cm.haveItem(4001121,20)) {
		    cm.sendNext("太好了！现在去收集20枚精锐勋章。");
		    cm.gainItem(4001121,-20);
		    em.setProperty("stage2", "2");
		} else {
	   	    cm.sendNext("我们现在要登上海盗船了！要证明我们是高贵的海盗，去收集20枚新秀勋章。");
		}
	   } else if (emp.equals("2")) {
		if (cm.haveItem(4001122,20)) {
		    cm.sendNext("太好了！我们现在出发吧。");
		    cm.gainItem(4001122,-20);
		    em.setProperty("stage2", "3");
		} else {
	   	    cm.sendNext("我们现在要登上海盗船了！要证明我们是高贵的海盗，去收集20枚精锐勋章。");
		}
	   } else {
		cm.sendNext("下一阶段已开启。出发！");
	   }
	   cm.dispose();
	   break;
	case 925100200:
	   cm.sendNext("要攻击海盗船，我们必须先消灭守卫。");
	   cm.dispose();
	   break;
	case 925100201:
	   if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendNext("Excellent.");
		if (em.getProperty("stage2a").equals("0")) {
		    cm.getMap().setReactorState();
		    em.setProperty("stage2a", "1");
		}
	   } else {
	   	cm.sendNext("这些桔梗花正在躲藏。我们必须解救它们。");
	   }
	   cm.dispose();
	   break;
	case 925100301:
	   if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendNext("Excellent.");
		if (em.getProperty("stage3a").equals("0")) {
		    cm.getMap().setReactorState();
		    em.setProperty("stage3a", "1");
		}
	   } else {
	   	cm.sendNext("这些桔梗花正在躲藏。我们必须解救它们。");
	   }
	   cm.dispose();
	   break;
	case 925100202:
	case 925100302:
	   cm.sendNext("这些是船长和克鲁，他们一生都在为海盗王效忠。尽情地消灭他们吧。");
	   cm.dispose();
	   break;
	case 925100400:
	   cm.sendNext("这些是船只的动力来源。我们必须用旧金属钥匙封印这些门！");
	   cm.dispose();
	   break;
	case 925100500:
	   if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.warpParty(925100600);
	   } else {
	   	cm.sendNext("消灭所有怪物！连海盗王的爪牙也不放过！");
	   }
	   cm.dispose();
	   break;
    }
}