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
            }
        cm.sendSimple("#b#L100#麦格纳斯模拟器#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("EasyMagnus") != null) {
                            cm.getDisconnected("EasyMagnus").registerPlayer(cm.getPlayer());
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
                                var q = cm.getEventManager("EasyMagnus");
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
    }else if (status == 2) {
        if (one == false) {
            c = selection; 
            for (var i = 0; i < rewards[c].length; i++) 
                talk+="#L"+i+"##e#i"+rewards[c][i]+":##k#l"; 
            cm.sendSimple("你可以用积分兑换以下物品 "+rewards[c].length+" 物品\r\n#r#e你需要点击这些物品中的任意一件来获取它。#k#n\r\n"+talk);
            one = false;
        }
    }else if (status == 3) {
        var record = cm.getQuestRecord(160160);
        var intPoints = parseInt(points);
        var id = rewards[c][selection];
		
        if (intPoints >= id[1]) {
            if (cm.canHold(id[0])) {
                intPoints -= id[1];
                record.setCustomData(""+intPoints+"");
                cm.gainItem(id[0], id[2]);
                //cm.sendOk("id "+id[0]+" 价格 "+id[1]+" 数量 "+id[2]);         
                cm.sendOk("享受你的奖励吧。");
                cm.dispose();
            } else {
                cm.sendOk("请检查你是否有足够的物品栏空间。");
                cm.dispose();
            }
        } else {
		        	    var Error = "你没有足够的#rBossPQ积分#k，\r\n#b#t"+id[0]+"##k 需要#b"+id[1]+"#k BossPQ积分";
	
            cm.sendOk(Error);
            cm.dispose();
        }              
    }
}