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
    if (cm.getMapId() != 680000200) {
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendYesNo("出了点问题：你还没有和任何人订婚。");
    } else if (status == 1) {

	    var marr = cm.getQuestRecord(160001);
	    var data = marr.getCustomData();
	    if (data == null) {
		marr.setCustomData("0");
	        data = "0";
	    }
	    if (data.equals("1")) {
		if (cm.getPlayer().getMarriageId() <= 0) {
		    cm.sendOk("请确保你的伴侣在同一个地图上。");
		    cm.dispose();
		    return;
		}
	    	var chr = cm.getMap().getCharacterById(cm.getPlayer().getMarriageId());
	    	if (chr == null) {
		    cm.sendOk("已经有人正在举办婚礼，请稍后再来。");
		    cm.dispose();
		    return;
	    	}
		var maps = Array(680000210, 680000300, 680000401);
		for (var i = 0; i < maps.length; i++) {
		    if (cm.getMap(maps[i]).getCharactersSize() > 0) {
			cm.sendNext("<频道");
			cm.dispose();
			return;
		    }
		}
		var map = cm.getMap(680000210);
		cm.getPlayer().changeMap(map, map.getPortal(0));
		chr.changeMap(map, map.getPortal(0));
		cm.worldMessage(5, " 和 " + cm.getClient().getChannel() + "> " + cm.getPlayer().getName() + "的婚礼即将开始。 " + chr.getName() + "目前没有人正在举办婚礼，请稍后再来。");
	    } else {
		if (cm.getMap(680000210).getCharactersSize() == 0) {
		    cm.sendNext("你没有婚礼邀请函。");
		    cm.dispose();
		    return;
		}
		if (cm.haveItem(4150000)) {
		    cm.warp(680000210,0);
		} else {
		    cm.sendOk("你没有婚礼邀请函。");
		}
	    }
	cm.dispose();
    }
}