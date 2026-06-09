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
    var marr = cm.getQuestRecord(160160);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
	var time = parseInt(data);
		        if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer()) {
                cm.sendOk("你在过去12小时内已经挑战过女皇了。剩余时间： " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            } else {
        cm.sendSimple("#b#L100#Magnus#l");
		}
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("MagnusBattle") != null) {
                            cm.getDisconnected("MagnusBattle").registerPlayer(cm.getPlayer());
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
                                    cm.sendOk("发生了未知错误。");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getParty(), cm.getMap());
								//	cm.spawnMonster(8880010,1,1400,-1348);
									cm.dispose();
                                }
                            } else {
                                cm.sendOk("所有玩家必须在地图中且等级达到150以上。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("你不是队长，请让你的队长来和我交谈。");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("请先组建一个队伍。");
                        cm.dispose();
                    }
                    break;
            }
        }
    }
}