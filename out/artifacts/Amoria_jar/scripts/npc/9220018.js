

function action(mode, type, selection) {
	cm.removeAll(4032248);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("请稍后再试。");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 8) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 2 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("MV");
			if (em == null) {
				cm.sendOk("已有其他队伍在此频道进入了组队任务。");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		    } else {
			cm.sendOk("你的队伍必须有2名以上成员在场且等级在8级以上。");
		    }
			}
		} else {
			cm.sendOk("你的队伍必须有2名以上成员在场且等级在8级以上。");
		}
	    }
	cm.dispose();
}