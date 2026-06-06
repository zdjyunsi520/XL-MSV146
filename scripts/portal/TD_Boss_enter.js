function enter(pi) {
	    if (pi.getPlayer().getParty() == null || !pi.isLeader()) {
		pi.playerMessage("队伍队长必须在这里。");
	    } else {
		var party = pi.getPlayer().getParty().getMembers();
		var mapId = pi.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = pi.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (pi.getPlayer().isGM() || size >= 2)) {
	    	    for(var i = 0; i < 7; i++) {
			if (pi.getMap(pi.getMapId() + 1 + i) != null && pi.getMap(pi.getMapId() + 1 + i).getCharactersSize() == 0) {
		    		pi.warpParty(pi.getMapId() + 1 + i);
				pi.dispose();
		    		return;
			}
	    	    }
			pi.playerMessage("已经有其他队伍进入了该频道。");
		} else {
			pi.playerMessage("所有2名以上队员必须在这里。");
		}
	    }
}