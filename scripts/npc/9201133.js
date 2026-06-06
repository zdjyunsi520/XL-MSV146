function action(mode, type, selection) {
    if (mode != 1) {
	cm.dispose();
	return;
    }
	if (cm.getPlayer().getMapId() == 677000011) { //warp to another astaroth map.
		cm.warp(677000013,0);
		cm.dispose();
	} else if (cm.getPlayer().getMapId() == 677000013) { //warp to another astaroth map.
			if (cm.getParty() == null) {
				cm.sendOk("已经有人在尝试击败亚斯塔罗了。");
			} else {
				var party = cm.getParty().getMembers();
				var mapId = cm.getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				while (it.hasNext()) {
	    				var cPlayer = it.next();
				    	if (cPlayer.getMapid() == mapId) {
						inMap += 1;
				    	}
				}
				if (party.size() < 2 || inMap < 2) {
				    next = false;
				}
				if (next) {
					if (cm.getMap(677000012).getCharactersSize() > 0) {
						cm.sendOk("你需要至少两名在同一地图的队伍成员。");
					} else {
						cm.warpParty(677000012);
					}
				} else {
					cm.sendOk("你需要至少两名在同一地图的队伍成员。");
				}
			}
		cm.dispose();
	} else {
		if (cm.getParty() != null) {
			cm.warpParty(677000011);
		} else {
			cm.warp(677000011,0);
		}
		cm.dispose();
	}
}