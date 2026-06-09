var rewards = Array(2000005, 1012067, 1012066, 1012064, 1012065, 1012068, 1012069, 1140000, 1141000);
var expires = Array(-1, 30, 30, 30, 30, 30, 30, 60, 60);
var quantity = Array(3, 1, 1, 1, 1, 1, 1, 1, 1);
var needed = Array(10, 20, 20, 20, 20, 35, 35, 50, 50);
var gender = Array(2, 2, 2, 2, 2, 2, 2, 0, 1);
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
    if (status == 0) {
        for (var i = 3994059; i < 3994085; i++) {
	    cm.givePartyItems(i, 0, true);
	}
    }
    switch(cm.getPlayer().getMapId()) {
	case 520000000: //event map
    	    if (status == 0) {
	        cm.sendSimple("也许你可以和我交换一些...\r\n\r\n#b");
    	    } else if (status == 1) {
	        if (selection == 0) {
		    cm.warp(702090400,0); //exit map lobby
		    cm.dispose();
		} else if (selection == 1) {
		    var selStr = "枚勋章)#b#l\r\n";
		    for (var i = 0; i < rewards.length; i++) {
			selStr += "#L" + i + "##v" + rewards[i] + "##t" + rewards[i] + "# x " + quantity[i] + " #r(" + needed[i] + "英语学校是一个1-5人组队任务。有3个不同的测验等级：初级、中级和高级。在10分钟的时间限制内，收集所有需要的字母组成正确的答案！把字母交给你的队长，再传给#r#e大卫#n。#k你可以在时间限制内继续答题或兑换奖励。问题和奖励都是随机的。每答对一次，你将获得一个随机奖励和一个乖孩子勋章。收集并交换乖孩子勋章吧！";
		    }
		    cm.sendSimple(selStr);
		} else if (selection == 2) {
		    cm.sendNext("你没有所需的勋章。");
		    cm.dispose();
		}
	    } else if (status == 2) {
	        if (!cm.haveItem(4001137, needed[selection])) {
		    cm.sendNext("请腾出背包空间。");
		} else if (!cm.canHold(rewards[selection], 1)) {
		    cm.sendNext("你的性别不符合领取条件。");
		} else if (gender[selection] != 2 && gender[selection] != cm.getPlayer().getGender()) {
		    cm.sendNext("你好~我是#b英语学校#k的P博士！\r\n\r\n#L0#前往英语学校 - 简单#l\r\n#L1#前往英语学校 - 普通#l\r\n#L2#前往英语学校 - 困难#l\r\n#L3#返回活动地图#l");	
		} else {
		    cm.gainItem(4001137, -needed[selection]);
		    if (expires[selection] > 0) {
			cm.gainItemPeriod(rewards[selection], quantity[selection], expires[selection]);
		    } else {
			cm.gainItem(rewards[selection], quantity[selection]);
		    }
		}
		cm.dispose();
            }
	    break;
	case 702090400:
    	    if (status == 0) {
	        cm.sendSimple("请稍后再试。");
    	    } else if (status == 1) {
	        if (selection == 0 || selection == 1 || selection == 2) {
   		    var em = cm.getEventManager("English");
    		    if (em == null) {
			cm.sendOk("队伍的队长必须在这里。");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("已有其他队伍在此频道进入了组队任务。");
		    } else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 1) {
		    		if (em.getInstance("English" + selection) == null) {
					em.startInstance_Party("" + selection, cm.getPlayer());
		    		} else {
					cm.sendOk("你队伍的所有成员必须都在这里。");
		    		}
			} else {
				cm.sendOk("你队伍的所有成员必须都在这里。");
			}
		    }
		} else if (selection == 3) {
		    cm.warp(520000000,0);
		}
	        cm.dispose();
            }
	    break;
    }
}