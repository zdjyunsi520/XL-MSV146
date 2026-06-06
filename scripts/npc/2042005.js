var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "报名参加怪物嘉年华！\r\n#L100#兑换枫叶金币。#l";
	var found = false;
        for (var i = 0; i < 3; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("你还没有组队。\r\n#L100#兑换枫叶金币。#l");
        } else {
            if (cm.isLeader()) {
		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("目前没有空闲的房间。\r\n#L100#兑换枫叶金币。#l");
		}
            } else {
                cm.sendSimple("请让你们的队长来和我说话。\r\n#L100#兑换枫叶金币。#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("#b#L0#50个枫叶金币 = 施皮格尔曼项链#l\r\n#L1#30个枫叶金币 = 施皮格尔曼弹珠#l\r\n#L2#50个闪耀枫叶金币 = 混沌施皮格尔曼项链#l#k");
	} else if (selection >= 0 && selection < 3) {
	    var mapid = 980030000+((selection+1)*1000);
            if (cm.getEventManager("cpq2").getInstance("cpq"+mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 1 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap(50, 255) == 1) {
                        cm.sendOk("你的队伍中有玩家等级不符合要求。");
                        cm.dispose();
                    } else if (checkLevelsAndMap(50, 255) == 2) {
                        cm.sendOk("你的队伍中有人不在当前地图。");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq2").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("你的队伍人数不符合要求。");
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap(50, 255) == 1) {
                    cm.sendOk("你的队伍中有玩家等级不符合要求。");
                    cm.dispose();
                } else if (checkLevelsAndMap(50, 255) == 2) {
                    cm.sendOk("你的队伍中有人不在当前地图。");
                    cm.dispose();
                } else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq2").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042006);
                    //}
                    cm.sendOk("你的挑战已发送。");
                    cm.dispose();
                }
            } else {
                cm.sendOk("参加怪物嘉年华的两支队伍必须有相同数量的队员");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("你没有任何物品。");
		} else if (!cm.canHold(1122007,1)) {
		    cm.sendOk("请腾出空间");
		} else {
		    cm.gainItem(1122007,1);
		    cm.gainItem(4001129,-50);
		}
		cm.dispose();
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("你没有任何物品。");
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("请腾出空间");
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
		}
		cm.dispose();
	    } else if (selection == 2) {
		if (!cm.haveItem(4001254,50)) {
		    cm.sendOk("你没有任何物品。");
		} else if (!cm.canHold(1122058,1)) {
		    cm.sendOk("请腾出空间");
		} else {
		    cm.gainItem(1122058,1);
		    cm.gainItem(4001254,-50);
		}
		cm.dispose();
	    }
        }
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

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq2");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980030000+(fieldnumber*1000)));
        if (event == null && fieldnumber < 1) {
            status = "嘉年华场地 "+fieldnumber+"(2v2)";
        } else if (event == null) {
            status = "嘉年华场地 "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
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
