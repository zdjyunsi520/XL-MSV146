var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    var em = cm.getEventManager("Amoria");
    if (em == null) {
	cm.dispose();
	return;
    }
    switch(cm.getMapId()) {
	case 670010200:
	    if (em.getProperty("apq1").equals("2")) {
		cm.removeAll(4031595);
		cm.removeAll(4031594);
		cm.removeAll(4031597);
	    	cm.warp(670010300,0);
	    } else {
		if (!cm.isLeader()) {
		    cm.sendOk("大门已开启。");
		    cm.dispose();
		    return;
		}
		cm.getMap().getPortal("go01").setPortalState(true); //just middle one.
	    	cm.getMap().changeEnvironment("gate0", 2);
	    	cm.getMap().changeEnvironment("gate1", 2);
	    	cm.getMap().changeEnvironment("gate2", 2);
	    	cm.sendOk("需要有3名玩家站在绳子上。");
	    }
	    cm.dispose();
	    break;
	case 670010300:
	    if (em.getProperty("apq2").equals("0")) {
		if (!cm.isLeader()) {
		    cm.sendOk("大门已开启。");
		    cm.dispose();
		    return;
		}
		var players = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
		    var z = cm.getMap().getNumPlayersInArea(i);
		    players.push(z);
		    total += z;
		}
		if (total != 3) {
		    cm.sendOk("已经尝试了7次错误的组合。");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("apq2_" + i).equals("" + players[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			cm.getMap().getPortal("next00").setPortalState(true);
	    		cm.getMap().changeEnvironment("gate", 2);
    	    		cm.showEffect(true, "quest/party/clear");
    	    		cm.playSound(true, "Party1/Clear");
	    		em.setProperty("apq2", "1");
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			em.setProperty("apq2_tries", "" + (parseInt(em.getProperty("apq2_tries")) + 1));
			if (em.getProperty("apq2_tries").equals("7")) {
			    cm.mapMessage(6, "其中一根绳子是正确的。");
			    for (var i = 0; i < 7; i++) {
			        cm.spawnMonster(9400523 + i,10);
			    }
			    em.setProperty("apq2_tries", "0");
			}
			if (num_correct > 0) {
			    cm.sendOk("所有绳子都是错的。");
			} else {
			    cm.sendOk("传送门已开启！快走！");
			}
		    }
		}
	    } else {
		cm.sendOk("需要3名玩家或物品站在平台上，且必须站在不同的平台上。");
	    }
	    cm.dispose();
	    break;
	case 670010400:
	    if (em.getProperty("apq3").equals("0")) {
		if (!cm.isLeader()) {
		    cm.sendOk("大门已开启。");
		    cm.dispose();
		    return;
		}
		var players = Array();
		var total = 0;
		for (var i = 0; i < 9; i++) {
		    var z = cm.getMap().getNumPlayersItemsInArea(i);
		    if (z > 1) {
			z = 1; //z
		    }
		    players.push(z);
		    total += z;
		}
		if (total != 3) {
		    cm.sendOk("根据正确平台的数量生成了相应数量的史莱姆。");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 9; i++) {
			if (em.getProperty("apq3_" + i).equals("" + players[i])) {
			    num_correct += players[i]; //0 or 1 :D
			}
		    }
		    if (num_correct == 3) {
			cm.getMap().getPortal("next00").setPortalState(true);
	    		cm.getMap().changeEnvironment("gate", 2);
    	    		cm.showEffect(true, "quest/party/clear");
    	    		cm.playSound(true, "Party1/Clear");
	    		em.setProperty("apq3", "1");
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			em.setProperty("apq3_tries", "" + (parseInt(em.getProperty("apq3_tries")) + 1));
			if (em.getProperty("apq3_tries").equals("7")) {
			    cm.mapMessage(6, "其中一根绳子是正确的。");
			    for (var i = 0; i < 7; i++) {
			        cm.spawnMonster(9400523 + i,10);
			    }
			    em.setProperty("apq3_tries", "0");
			} else {
			    cm.sendOk("根据正确平台的数量生成了相应数量的史莱姆。");
			    var rand = java.lang.Math.floor(java.lang.Math.random() * 4);
			    cm.spawnMob(9400519 + rand, num_correct, 1663, 196);
			}
		    }
		}
	    } else {
		cm.sendOk("需要3名玩家或物品站在平台上，且必须站在不同的平台上。");
	    }
	    cm.dispose();
	    break;
    }
}