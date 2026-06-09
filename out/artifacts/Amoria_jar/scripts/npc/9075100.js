function start() {
    if (cm.getPlayer().getMapId() == 401060200) {
		cm.warp(401060000);
		cm.dispose();
        status = 1;
        return;
    }
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
    }

    if (mode == 1) 
        status++;

    else 
        status--;
    if (status == 0) { 
    var marr = cm.getQuestRecord(260160);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
	var time = parseInt(data);
		if(cm.getEvoEntry() <= 0) {
			cm.sendOk("#d欢迎来到进化系统，你可以独自进入或与组队一起进入#k\r\n\r\n#b#L100#进化实验室 #r-单人#k\r\n#b#L101#进化实验室 #r-组队#k#l\r\n\r\n #r你还剩#k #b");
			cm.dispose();
		} else {
        cm.sendSimple("#k#r 次进入机会" + cm.getEvoEntry() + "发生了未知错误。");
		}
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("EvolutionLab") != null) {
                            cm.getDisconnected("EvolutionLab").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            if (next) {
                                var q = cm.getEventManager("EvolutionLab");
                                if (q == null) {
                                    cm.sendOk("所有玩家必须在地图中且等级达到150级以上。");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getPlayer(), cm.getMap());
									cm.setEvoEntry(1);
								//	cm.spawnMonster(8880010,1,1400,-1348);
									cm.dispose();
                                }
                            } else {
                                cm.sendOk("你不是队伍的队长，请让你们的队长来和我对话。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("请先组建一支队伍。");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("已经有人在里面了。");
                        cm.dispose();
                    }
                    break;
   case 101:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("EvolutionLab") != null) {
                            cm.getDisconnected("EvolutionLab").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer().getParty().getMembers();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            var it = party.iterator();
                            while (it.hasNext()) {
										    var i = 0;
        var full = true;
        if (cm.getMap(401060200 + i).getCharactersSize() == 0 && cm.getMap(401060200 + i)) {
								            i;
            if (cm.getMap(401060200 + i).getCharactersSize())
                full = true;
				else
				full = false;
        }
		    if (full) {
            cm.sendOk("已经有人在里面了。");
            cm.dispose();
            return;
			}
                                var cPlayer = it.next();
                                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                                if (ccPlayer == null || ccPlayer.getLevel() < 110) {
                                    next = false;
                                    break;
                                }
                            }	
                            if (next) {
                                var q = cm.getEventManager("MagnusBattle");
                                if (q == null) {
                                    cm.sendOk("所有玩家必须在地图中且等级达到150级以上。");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getParty(), cm.getMap());
								//	cm.spawnMonster(8880010,1,1400,-1348);
									cm.dispose();
                                }
                            } else {
                                cm.sendOk("你不是队伍的队长，请让你们的队长来和我对话。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("请先组建一支队伍。");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("已经有人在里面了。");
                        cm.dispose();
                    }
                    break;
            }
        }
    }
}