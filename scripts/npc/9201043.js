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
		cm.removeAll(4031595);
		cm.removeAll(4031594);
		cm.removeAll(4031597);
    if (status == 0) {
	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	if (cm.getPlayer().getLevel() < 40 || cm.getPlayer().getMarriageId() <= 0 || !data.equals("3")) {
	    cm.sendNext("我可以让你进去。要继续吗？你的入场券将立即被扣除。");
	    cm.dispose();
	} else {
	    if (cm.haveItem(4031592)) {
		cm.sendNext("给你。我已经记录了你现在的时间。");
		return;
	    }
	    var apq = cm.getQuestRecord(160000);
	    var data = apq.getCustomData();
	    if (data == null) {
		apq.setCustomData("0");
		data = "0";
	    }
	    var time = parseInt(data);
	    if (time + (3 * 3600000) < cm.getCurrentTime()) { //6 hours 
		if (!cm.haveItem(4031592) && cm.haveItem(4031593, 10)) {
		    cm.gainItem(4031593, -10);
		    cm.gainItem(4031592, 1);
		    cm.sendOk("从怪物身上收集10个唇锁钥匙。你一次只能持有一张入场券。");
		    apq.setCustomData("" + cm.getCurrentTime());
		} else {
		    cm.sendOk("哦哦，看来你在过去3小时内已经进去过了。请稍后再来。");
		}
	    } else {
		cm.sendNext("哦哦，看来你在过去3小时内已经进去过了。请稍后再来。");
	    }
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4031592, -1);
	cm.warp(670010100,0);
	cm.dispose();
    }
}