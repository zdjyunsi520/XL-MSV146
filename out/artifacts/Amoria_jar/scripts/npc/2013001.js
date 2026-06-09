function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 920011200) { //exit
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	cm.warp(200080101);
	cm.dispose();
	return;
    }
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
	cm.sendOk("请稍后再试。");
	cm.dispose();
	return;
    }
    if (!cm.isLeader()) {
	cm.sendOk("我只想和你们的队长说话！");
	cm.dispose();
	return;
    }
    if (em.getProperty("pre").equals("0")) {
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	cm.sendNext("请救救我，我被小精灵帕帕——我们塔中的恐怖存在——困在了封印中！他把我们弥涅尔瓦雕像的所有部件都弄丢了，我们必须全部找回来！哦，失礼了，我是这座塔的管家伊克。我是弥涅尔瓦的皇家仆人。请帮帮忙，将20个云朵碎片放入你看到的宝珠中！");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 920010000:
	    cm.warpParty(920010000, 2);
	    break;
	case 920010100:
	    if (em.getProperty("stage").equals("4")) {
		if (em.getProperty("finished").equals("0")) {
		    cm.warpParty(920010800); //GARDEN.	
		} else {
		    cm.sendOk("感谢你救了弥涅尔瓦！请和她说话！");
		}
	    } else {
		cm.sendOk("请拯救弥涅尔瓦！收集她雕像的六块碎片，然后和我对话以获取最后一块！");
	    } 
	    break;
	case 920010200: //walkway
	    if (!cm.haveItem(4001050,30)) {
		cm.sendOk("从本关怪物身上收集30个雕像碎片，然后带给我，让我把它们拼起来！");
	    } else {
		cm.removeAll(4001050);
		cm.gainItem(4001044,1); //first piece
		cm.givePartyExp(3500);
		clear();
	    }
	    break;
	case 920010300: //storage
	    if (!cm.haveItem(4001051,15)) {
		cm.sendOk("从本关怪物身上收集15个雕像碎片，然后带给我，让我把它们拼起来！");
	    } else {
		cm.removeAll(4001051);
		cm.gainItem(4001045,1); //second piece
		cm.givePartyExp(3500);
		clear();
	    }
	    break;
	case 920010400: //lobby
	    if (em.getProperty("stage3").equals("0")) {
		cm.sendOk("请找到对应今天星期几的LP唱片，放到音乐播放器上。\r\n#v4001056#星期日\r\n#v4001057#星期一\r\n#v4001058#星期二\r\n#v4001059#星期三\r\n#v4001060#星期四\r\n#v4001061#星期五\r\n#v4001062#星期六\r\n");
	    } else if (em.getProperty("stage3").equals("1")) {
		if (cm.canHold(4001046,1)) {
		    cm.gainItem(4001046,1); //third piece
		    cm.givePartyExp(3500);
		    clear();
		    em.setProperty("stage3", "2");
		} else {
		    cm.sendOk("请腾出空间！");
		}
	    } else {
		cm.sendOk("非常感谢你！");
	    }
	    break;
	case 920010500: //sealed
	    if (em.getProperty("stage4").equals("0")) {
		var players = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
		    var z = cm.getMap().getNumPlayersItemsInArea(i);
		    players.push(z);
		    total += z;
		}
		if (total != 3) {
		    cm.sendOk("平台上需要有3名玩家或物品。");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage4_" + i).equals("" + players[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			if (cm.canHold(4001047,1)) {
	    		    clear();
			    cm.gainItem(4001047,1); //fourth
			    cm.givePartyExp(3500);
	    		    em.setProperty("stage4", "1");
			} else {
			    cm.sendOk("请腾出空间！");
			}
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct > 0) {
			    cm.sendOk("有一个平台是正确的。");
			} else {
			    cm.sendOk("所有平台都不对。");
			}
		    }
		}
	    } else {
		cm.sendOk("传送门已开启！走吧！");
	    }
	    cm.dispose();
	    break;
	case 920010600: //lounge
	    if (!cm.haveItem(4001052,30)) {
		cm.sendOk("从本关怪物身上收集30个雕像碎片，然后带给我，让我把它们拼起来！");
	    } else {
		cm.removeAll(4001052);
		cm.gainItem(4001048,1); //fifth piece
		cm.givePartyExp(3500);
		clear();
	    }
	    break;
	case 920010700: //on the way up
	    if (em.getProperty("stage6").equals("0")) {
		var react = Array();
		var total = 0;
	    	for(var i = 0; i < 3; i++) {
		    if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
			react.push("1");
			total += 1;
		    } else {
			react.push("0");
		    }
	    	}
		if (total != 2) {
		    cm.sendOk("地图顶部的两个拉杆需要有2个被拉下。");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage62_" + i).equals("" + react[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			if (cm.canHold(4001049,1)) {
	    		    clear();
			    cm.gainItem(4001049,1); //sixth
			    cm.givePartyExp(3500);
	    		    em.setProperty("stage6", "1");
			} else {
			    cm.sendOk("请腾出空间！");
			}
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct >= 1) { //this should always be true
			    cm.sendOk("有一个拉杆是正确的。");
			} else {
			    cm.sendOk("两个拉杆都不对。");
			}
		    }
		}
	    } else {
		cm.sendOk("谢谢你们！！");
	    }
	    break;
	case 920010800:
	    cm.sendNext("请想办法打败小精灵帕帕！通过种植种子找到暗黑奈佩图斯，你就找到了帕帕！打败它，获得生命之根来拯救弥涅尔瓦！！！"); 
	    break;
	case 920010900:
	    cm.sendNext("这是塔中的牢房。你可能会在这里找到一些好东西，但除此之外我觉得我们这里没有什么碎片。"); 
	    break;
	case 920011000:
	    cm.sendNext("这是塔中的密室。你可能会在这里找到一些好东西，但除此之外我觉得我们这里没有什么碎片。"); 
	    break;
    }
    cm.dispose();
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}