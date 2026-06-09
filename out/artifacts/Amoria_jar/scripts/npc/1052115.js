var status = 0;
var section = 0;
importPackage(java.lang);
//questid 29931, infoquest 7662
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 1) {
	if (cm.getMapId() == 910320001) {
		cm.warp(910320000, 0);
		cm.dispose();
	} else if (cm.getMapId() == 910330001) {
		var itemid = 4001321;
		if (!cm.canHold(itemid)) {
			cm.sendOk("请在其他物品栏腾出1个空位。");
		} else {
			cm.gainItem(itemid,1);
			cm.warp(910320000, 0);
		}
		cm.dispose();
	} else if (cm.getMapId() >= 910320100 && cm.getMapId() <= 910320304) {
		cm.sendYesNo("你想离开这里吗？");
		status = 99;
	} else {
		cm.sendSimple("我叫林先生。\r\n#b#e#L1#进入布满灰尘的月台。#l#n\r\n#L2#前往999号列车。#l\r\n#L3#领取<荣誉员工>勋章。#l#k");
	}
    } else if (status == 2) {
		section = selection;
		if (selection == 1) {
			if (cm.getPlayer().getLevel() < 25 || cm.getPlayer().getLevel() > 30 || !cm.isLeader()) {
				cm.sendOk("你的等级必须在25-30之间，并且是队伍队长。");
			} else {
				if (!cm.start_PyramidSubway(-1)) {
					cm.sendOk("布满灰尘的月台目前已满。");
				}
			}
			//todo
		} else if (selection == 2) {
			if (cm.haveItem(4001321)) {
				if (cm.bonus_PyramidSubway(-1)) {
					cm.gainItem(4001321, -1);
				} else {
					cm.sendOk("999号列车目前已满。");
				}
			} else {
				cm.sendOk("你没有登车证。");
			}
		} else if (selection == 3) {
			var record = cm.getQuestRecord(7662);
			var data = record.getCustomData();
			if (data == null) {
				record.setCustomData("0");
				data = record.getCustomData();
			}
			var mons = parseInt(data);
			if (mons < 10000) {
				cm.sendOk("请在车站中至少击败10,000只怪物后再来找我。击杀数： " + mons);
			} else if (cm.canHold(1142141) && !cm.haveItem(1142141)){
				cm.gainItem(1142141,1);
				cm.forceStartQuest(29931);
				cm.forceCompleteQuest(29931);
			} else {
				cm.sendOk("请腾出空间。");
			}
		}
		cm.dispose();
	} else if (status == 100) {
		cm.warp(910320000,0);
		cm.dispose();
	}
}