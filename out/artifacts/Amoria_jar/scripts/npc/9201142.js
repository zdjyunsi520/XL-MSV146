var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
		return;
	}
	status--;
    }
    	if (status == 0) {
	        cm.sendSimple("请稍后再试。");
    	    } else if (status == 1) {
   		    var em = cm.getEventManager("Olivia");
    		    if (em == null) {
			cm.sendOk("队伍的队长必须在这里。");
			cm.dispose();
			return;
    		    }
		    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("已有其他队伍在此频道进入了组队任务。");
		    } else {
			var s = selection;
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if (ccPlayer == null || ccPlayer.getLevel() < (s == 0 ? 10 : (s == 1 ? 30 : 70))) {
					next = false;
					break;
				}
				size++;
			}	
			if (next && size >= 2) {
		    		if (em.getInstance("Olivia" + s) == null) {
					em.startInstance_Party("" + s, cm.getPlayer());
		    		} else {
					cm.sendOk("你队伍的所有成员必须都在这里。");
		    		}
			} else {
				cm.sendOk("你队伍的所有成员必须都在这里。");
			}
		    }
	        cm.dispose();
            }
			
}