var status = -1;

function action(mode, type, selection) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.playerMessage("队伍队长必须在这里。");
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
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size >= 2)) {
	    	    for(var i = 0; i < 10; i++) {
			if (cm.getMap(200101500 + i) != null && cm.getMap(200101500 + i).getCharactersSize() == 0) {
		    		cm.warpParty(200101500 + i);
				cm.dispose();
		    		return;
			}
	    	    }
			cm.playerMessage("另一个队伍已经进入了此频道。");
		} else {
			cm.playerMessage("你的队伍必须有2名以上成员在场。");
		}
	    }
	cm.dispose();
}