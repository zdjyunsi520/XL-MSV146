mob2 = [[[9400014,20],[9400549,20],[9500100,20],[8500001,20],[9400121,9],[9600001,20],[9500124,20]]];
status = 0;

var type = null;

function start() {
    if (cm.getPlayer().getMapId() == 913010000) {
	    //Spawner
            talk = "我会召唤怪物来帮助你训练。\r\n\r\n";
            for (var i = 0; i < mob2[0].length; i++)
                talk += "#b#L"+i+"##o"+mob2[0][i]+"##l\r\n#k";
			
            cm.sendSimple(talk + "#r#L100#清除掉落物#l\r\n#L101#消灭所有怪物#l#k");
        type = true;
    }else {
        if (type != false) {
            if (cm.getParty() != null) {//Party Warp
                if (cm.getDisconnected("SpawnRoom") != null) {
                    cm.getDisconnected("SpawnRoom").registerPlayer(cm.getPlayer());
                } else if (cm.isLeader()) {
                    var party = cm.getPlayer().getParty().getMembers();
                    var next = true;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                        if (ccPlayer == null || ccPlayer.getLevel() < 10) {
                            next = false;
                            break;
                        }
                    }	
                    if (next) {
                        var q = cm.getEventManager("SpawnRoom");
                        if (q == null) {
                            cm.sendOk("发生了未知错误");
                        } else {
                            q.startInstance(cm.getParty(), cm.getMap());
                            cm.dispose();
                        }
                    } else {
                        cm.sendOk("所有玩家必须在地图中且等级在10级以上。");
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("你不是队伍的队长，请让你的队长来和我说话。");
                    cm.dispose();
                }
            } else {// Solo Warp
                if (cm.getPlayer().getLevel() >= 10) {
                    var q = cm.getEventManager("SpawnRoom");
                    if (q == null) {
                        cm.sendOk("发生了未知错误");
                    } else {
                        q.startInstance(cm.getPlayer(), cm.getMap());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("你必须达到10级以上。");
                    cm.dispose();
                }
            }
        }
    }
}

function action(m,t,s) {
    if (m > 0)
        status++;
    else{
        cm.dispose();
        return;
    }
    if (status == 1) {
        //Spawner
        if (type == true) {
            if (s == 100) {
                cm.cleardrops();
                cm.dispose();
            } else if (s == 101) {
                cm.killAllMonsters();
                cm.dispose();
            }else{
                if (cm.getPlayer().getMap().getMonsterCount() > 0) {
                    cm.sendOk("抱歉，已经有一些怪物被召唤出来了。请先消灭它们。");
                    cm.dispose();
                }else{
				var spawn = mob2[0][s];
				cm.summonMob(spawn[0], spawn[1]);
				}
                cm.dispose();
            }
        }
    }
}