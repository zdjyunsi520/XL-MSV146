var status = 0;
var section = 0;
importPackage(java.lang);
//questid 29932, infoquest 7760
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 99) {
		cm.dispose();
		return;
	}
	status--;
    }
    if (status == 1) {
	if (cm.getMapId() >= 926020001 && cm.getMapId() <= 926020004) {
		var itemid = 4001321 + (cm.getMapId() % 10);
		if (!cm.canHold(itemid)) {
			cm.sendOk("请腾出1个其他栏空位。");
		} else {
			cm.gainItem(itemid,1);
			cm.warp(cm.getMapId() - 10000, 0);
		}
		cm.dispose();
	} else if (cm.getMapId() >= 926010001 && cm.getMapId() <= 926010004) {
		cm.warp(926010000,0);
		cm.dispose();
	} else if (cm.getMapId() >= 926010100 && cm.getMapId() <= 926013504) {
		cm.sendYesNo("你想离开这个地方吗？");
		status = 99;
	} else {
		cm.sendSimple("我的名字叫杜阿尔特。\r\n#b#e#L1#进入金字塔。#l#n\r\n#L2#前往雪人法老之墓。#l\r\n#L3#听一个关于雪人法老珠宝的故事。#l\r\n#L4#领取<法老守护者>勋章。#l#k");
	}
    } else if (status == 2) {
		section = selection;
		if (selection == 1) {
			cm.sendSimple("你这个对领主之怒一无所知的无知之徒，选择你的命运吧！\r\n#L0# #v3994115# #l#L1# #v3994116# #l#L2# #v3994117# #l#L3# #v3994118# #l");
		} else if (selection == 2) {
			cm.sendSimple("你带来了什么宝石？\r\n#L0##i4001322##t4001322##l\r\n#L1##i4001323##t4001323##l\r\n#L2##i4001324##t4001324##l\r\n#L3##i4001325##t4001325##l");
		} else if (selection == 3) {
			cm.sendOk("在雪人法老之墓中，只要你能击败法老的克隆体#b小雪人法老#k来证明自己的实力，就可以获得一个#e#b#t2022613##k#n。那个箱子里藏着一件非常特别的宝物，那就是#b#b#t1132012##k#n。\r\n#i1132012# #t1132012#\r\n\r\n如果你能在地狱模式中存活下来，你将获得#b#b#t1132013##k#n。\r\n#i1132013# #t1132013#\r\n当然，内特是不会让你得逞的。");
			cm.dispose();
		} else if (selection == 4) {
			var record = cm.getQuestRecord(7760);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
			}
			var mons = parseInt(data);
			if (mons < 50000) {
				cm.sendOk("请在金字塔中击败至少50000只怪物后再来找我。击杀数： " + mons);
			} else if (cm.canHold(1142142) && !cm.haveItem(1142142)){
				cm.gainItem(1142142,1);
				cm.forceStartQuest(29932);
				cm.forceCompleteQuest(29932);
			} else {
				cm.sendOk("请腾出背包空间。");
			}
			cm.dispose();
		}
	} else if (status == 3) {
		if (section == 1) {
			var cont_ = false;
			if (selection == 0) { //easy; 40-45
				if (cm.getPlayer().getLevel() < 40) {
					cm.sendOk("你至少需要达到40级。");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("你最多不能超过60级。");
				} else {
					cont_ = true;
				}
			} else if (selection == 1) { //normal; 46-50
				if (cm.getPlayer().getLevel() < 45) {
					cm.sendOk("你至少需要达到45级。");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("你最多不能超过60级。");
				} else {	
					cont_ = true;
				}
			} else if (selection == 2) { //hard; 51-60
				if (cm.getPlayer().getLevel() < 50) {
					cm.sendOk("你至少需要达到50级。");
				} else if (cm.getPlayer().getLevel() > 60) {
					cm.sendOk("你最多不能超过60级。");
				} else {
					cont_ = true;
				}
			} else if (selection == 3) { //hell; 61+
				if (cm.getPlayer().getLevel() < 61) {
					cm.sendOk("你至少需要达到61级。");
				} else {
						cont_ = true;
				}
			}
			if (cont_ && cm.isLeader()) {//todo
				if (!cm.start_PyramidSubway(selection)) {
					cm.sendOk("金字塔目前人数已满。");
				}
			} else if (cont_ && !cm.isLeader()) {
				cm.sendOk("你必须是队伍队长。");
			}
		} else if (section == 2) {
			var itemid = 4001322 + selection;
			if (!cm.haveItem(itemid,1)) {
				cm.sendOk("你没有该物品。");
			} else {
				if (cm.bonus_PyramidSubway(selection)) {
					cm.gainItem(itemid, -1);
				} else {
					cm.sendOk("金字塔目前人数已满。");
				}
			}
		}
		cm.dispose(); //todo
	} else if (status == 100) {
		cm.warp(926010000,0);
		cm.dispose();
	}
}