var points;
var one;
var status = -1;
var returnmap = 502029000;
var menu = ["Useables","Ores","你在过去12小时内已经去找过女皇了。剩余时间："]; 
var talk = "你在过去12小时内已经去找过女皇了。剩余时间："; 
var rewards = [
[[2070018,400000,1],[2070016,350000,1],[2340000,150000,5],[2530000,150000,4],[2531000,300000,3],[2049300,300000,3],[2049116,150000,1],[5750000,300000,8],[2049701,200000,1]],//Useables
[[4011008,30000,1],[4005001,30000,1],[4005003,30000,1]],//Ores
[[1402112,300000,1],[1412072,300000,1],[1422074,300000,1],[1432100,300000,1],[1442137,300000,1],[1452130,300000,1],[1472142,300000,1],[1482103,300000,1],[1492102,300000,1],[1522021,300000,1],[1532038,300000,1],[1342041,300000,1],[1362023,300000,1]]//Fearless weapons
];

function start() {
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
    var marr = cm.getQuestRecord(160150);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
	var time = parseInt(data);
			      if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer()) {
                cm.sendOk("#b#L100#终极访客BOSS#l " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
        cm.sendSimple("已经有人在里面了。");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                    if (cm.getParty() != null) {
                        if (cm.getDisconnected("VisitorBoss") != null) {
                            cm.getDisconnected("VisitorBoss").registerPlayer(cm.getPlayer());
                        } else if (cm.isLeader()) {
                            var party = cm.getPlayer().getParty().getMembers();
                            var mapId = cm.getPlayer().getMapId();
                            var next = true;
                            var it = party.iterator();
                            while (it.hasNext()) {
										    var i = 0;
        var full = true;
        if (cm.getMap(502030073 + i).getCharactersSize() == 0 && cm.getMap(502030073 + i) !=null) {
								            i++;
            if (cm.getMap(502030073 + i).getCharactersSize())
                full = true;
				else
				full = false;
        }
		        if (full) {
            cm.sendOk("发生未知错误");
            cm.dispose();
            return;
			}
                                var cPlayer = it.next();
                                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                                if (ccPlayer == null || ccPlayer.getLevel() < 150) {
                                    next = false;
                                    break;
                                }
                            }	
                            if (next) {
                                var q = cm.getEventManager("VisitorBoss");
                                if (q == null) {
                                    cm.sendOk("所有玩家必须在地图内且等级在150级以上。");
									cm.dispose();
                                } else {
                                    q.startInstance(cm.getParty(), cm.getMap());
									cm.dispose();
                                }
                            } else {
                                cm.sendOk("你不是队伍的队长，请让你的队长来和我交谈。");
                                cm.dispose();
                            }
                        } else {
                            cm.sendOk("请先组建一个队伍。");
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("你可以用积分兑换这些");
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
            cm.sendSimple("物品\r\n#r#e你必须点击其中任何一个物品才能获得。#k#n\r\n "+rewards[c].length+"价格"+talk);
            one = false;
        }
    }else if (status == 3) {
        var record = cm.getQuestRecord(160150);
        var intPoints = parseInt(points);
        var id = rewards[c][selection];
		
        if (intPoints >= id[1]) {
            if (cm.canHold(id[0])) {
                intPoints -= id[1];
                record.setCustomData(""+intPoints+"");
                cm.gainItem(id[0], id[2]);
                //cm.sendOk("id "+id[0]+"数量 "+id[1]+"享受你的奖励吧 "+id[2]);         
                cm.sendOk("请检查你是否有足够的背包空间。");
                cm.dispose();
            } else {
                cm.sendOk("你没有足够的#rBossPQ积分#k，\r\n#b#t");
                cm.dispose();
            }
        } else {
		        	    var Error = "##k需要#b"+id[0]+"#kBossPQ积分"+id[1]+"#kBossPQ积分";
	
            cm.sendOk(Error);
            cm.dispose();
        }              
    }
}