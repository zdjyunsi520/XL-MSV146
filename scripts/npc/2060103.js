var status = 0;
var request;
function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    var em = cm.getEventManager("Ghost");
    if (em == null) {
	cm.sendOk("请稍后再试。");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 923020000:
    if (status == 0 && mode == 1) {
        var selStr = "报名参加双人突袭！";
	var found = false;
        for (var i = 0; i < 5; i++){
            if (getCPQField(i) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendNext("你还没有组队。");
	    cm.dispose();
        } else {
            if (cm.isLeader()) {
		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendNext("目前没有空闲的房间。");
		    cm.dispose();
		}
            } else {
                cm.sendNext("请让你们的队长来和我说话。");
		cm.dispose();
            }
        }
    } else if (status == 1) {
	if (selection >= 0 && selection < 5) {
            if (cm.getEventManager("Ghost").getInstance("Ghost"+selection) == null) {
                if ((cm.getParty() != null && cm.getParty().getMembers().size() == 3) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(60, 200) == 1) {
                        cm.sendOk("你的队伍中有玩家等级不符合要求。");
                        cm.dispose();
                    } else if (checkLevelsAndMap(60, 200) == 2) {
                        cm.sendOk("你的队伍中有人不在当前地图。");
                        cm.dispose();
                    } else {
                        cm.getEventManager("Ghost").startInstance(""+selection, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("你的队伍人数不符合要求。");
                }
            } else if (cm.getParty() != null && cm.getEventManager("Ghost").getInstance("Ghost"+selection).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(60, 200) == 1) {
                    cm.sendOk("你的队伍中有玩家等级不符合要求。");
                    cm.dispose();
                } else if (checkLevelsAndMap(60, 200) == 2) {
                    cm.sendOk("你的队伍中有人不在当前地图。");
                    cm.dispose();
                } else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("Ghost").getInstance("Ghost"+selection).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2060103);
                    //}
                    cm.sendOk("你的挑战已发送。");
                    cm.dispose();
                }
            } else {
                cm.sendOk("参加双人突袭的两支队伍必须有相同数量的队员");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
    }
	    break;
	case 923020100:
	case 923020200:
	case 923020300:
	case 923020400:
	case 923020500:
    if (status == 0) {
        request = cm.getNextCarnivalRequest();
        if (request != null) {
            cm.sendYesNo(request.getChallengeInfo() + "\r\n你要在双人突袭上挑战这支队伍吗？");
        } else {
            cm.sendYesNo("你想出去吗？");
        }
    } else {
	if (request == null) {
	    cm.warp(923020001,0);
	    cm.dispose();
	    break;
	}
        try {
            cm.getChar().getEventInstance().registerCarnivalParty(request.getChallenger(), request.getChallenger().getMap(), 1);
            cm.dispose();
        } catch (e) {
            cm.sendOk("挑战已失效。");
        }
        status = -1;
    }
	    break;
	default:
	    if (status == 0) {
	    	cm.sendYesNo("你想出去吗？");
	    } else {
		cm.warp(923020001,0);
	    }
	    break;
    }
}

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("Ghost");
    if (event1 != null) {
        var event = event1.getInstance("Ghost"+fieldnumber);
        if (event == null) {
            status = "双人突袭场地 "+(fieldnumber+1)+"(3v3)";
        } else if (event != null && (event.getProperty("started") == null || event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"玩家数/平均等级 "+averagelevel;
        }
    }
    return status;
}

function checkLevelsAndMap(lowestlevel, highestlevel) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel) && cPlayer.getJobId() != 900) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid;
}