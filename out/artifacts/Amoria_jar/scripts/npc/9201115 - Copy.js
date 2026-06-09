var status = -1;function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (!cm.isLeader()) {
	cm.sendNext("欢迎来到扭曲大师要塞。今晚我将是你的向导...");
	cm.dispose();
	return;
    }
	var em = cm.getEventManager("CWKPQ");
	if (em != null) {
		if (em.getProperty("glpq6").equals("0")) {
			if (status == 0) {
				cm.sendNext("今晚，我们要享用一队枫之谷冒险家的大餐..哈哈哈...");
			} else if (status == 1) {
				cm.sendNext("让我们特别训练的守护者领主来护送你吧！");
			} else if (status == 2) {
				cm.sendNext("准备迎战！守护者领主来了！");
				cm.mapMessage(6, "呃，这是什么？你已经打败他们了？");
				for (var i = 0; i < 10; i++) {
					var mob = em.getMonster(9400594);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1337 + (java.lang.Math.random() * 1337), 276));
				}
				for (var i = 0; i < 20; i++) {
					var mob = em.getMonster(9400582);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1337 + (java.lang.Math.random() * 1337), 276));
				}
				em.setProperty("glpq6", "1");
				cm.dispose();
			}
		} else if (em.getProperty("glpq6").equals("1")) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				if (status == 0) {
					cm.sendOk("没关系！扭曲大师会很乐意迎接你的。");
				} else if (status == 1) {
					cm.sendNext("扭曲大师来了！");
					cm.mapMessage(6, "别管我。守护者领主会护送你的！");

					//MV or Heron
					var mob = em.getMonster(9400589);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1000, 276));

					//Margana
					var mob = em.getMonster(9400590);
					cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-22, 1));

					//Red Nirg
					var mob2 = em.getMonster(9400591);
					cm.getMap().spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-22, 276));

					//Hsalf
					var mob4 = em.getMonster(9400593);
					cm.getMap().spawnMonsterOnGroundBelow(mob4, new java.awt.Point(496, 276));

					//Rellik
					var mob3 = em.getMonster(9400592);
					cm.getMap().spawnMonsterOnGroundBelow(mob3, new java.awt.Point(-496, 276));

					em.setProperty("glpq6", "2");
					cm.dispose();
				}
			} else {
				cm.sendOk("什么？呃...这不可能。");
				cm.dispose();
			}
		} else if (em.getProperty("glpq6").equals("2")) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				cm.sendOk("通往下一阶段的传送门已经打开了！");
				cm.mapMessage(5, "别管我。扭曲大师会护送你的！");
				cm.dispose();
				em.setProperty("glpq6", "3");
			} else {
				cm.sendOk("别管我。扭曲大师会护送你的！");
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	} else {
		cm.dispose();
	}

}