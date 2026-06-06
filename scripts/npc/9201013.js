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
	cm.sendYesNo("你还没有订婚。");
    } else if (status == 1) {
	if (cm.getPlayer().getMarriageId() <= 0) {
	    cm.sendOk("请在其他栏腾出一些空间。");
	} else if (!cm.canHold(4150000,60)) {
	    cm.sendOk("请从商城购买婚礼入场券。");
	} else if (!cm.haveItem(5251004,1) && !cm.haveItem(5251005,1) && !cm.haveItem(5251006,1)) {
	    cm.sendOk("请确保你的伴侣在同一个地图上。");
	} else {
	    var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
	    if (chr == null) {
		cm.sendOk("你现在可以进行婚礼了。这是婚礼邀请函——你想邀请的所有宾客都需要它们。");
		cm.dispose();
		return;
	    }
	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    if (data.equals("0")) {
		marr.setCustomData("1");
		cm.setQuestRecord(chr, 160001, "1");
		var num = 0;
		if (cm.haveItem(5251006,1)) {
		    cm.gainItem(5251006,-1);
		    num = 60;
		} else if (cm.haveItem(5251005,1)) {
		    cm.gainItem(5251005,-1);
		    num = 30;
		} else if (cm.haveItem(5251004,1)) {
		    cm.gainItem(5251004,-1);
		    num = 10;
		}
		cm.setQuestRecord(cm.getPlayer(), 160002, num + "");
		cm.setQuestRecord(chr, 160002, num + "");
		cm.sendNext("我觉得你已经结过婚或者已经预约过了。");
		cm.gainItemPeriod(4150000,num,1);
	    } else {
		cm.sendOk("我觉得你已经结过婚或者已经预约过了。");
	    }
	}
	cm.dispose();
    }
}