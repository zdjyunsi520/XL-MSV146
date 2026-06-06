var status = -1;
var minLevel = 20; // 35
var maxLevel = 255; // 65

var minPartySize = 2;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
        /*  }
    if (cm.getPlayer().getMapId() != 910010500) {
	if (status == 0) {
	    cm.sendYesNo("你和你的队员们想一起完成任务吗？这里有各种障碍和谜题，没有出色的团队合作是无法通过的。如果你想尝试，请让 #b你的队长#k 来和我对话。\r\n\r\n#r要求：");
	} else {
	    cm.saveLocation("MULUNG_TC");
	    cm.warp(910010500,0);
	    cm.dispose();
	}
	return;
    }*/
        if (status == 0) {
            if (cm.getParty() == null) { // No Party
                cm.sendSimple(" 名队员，全部等级在 " + minPartySize + " 到等级 " + minLevel + "如果你想尝试任务，请让 #b你的队长#k 来和我对话。 " + maxLevel + ".");
            } else if (!cm.isLeader()) { // Not Party Leader
                cm.sendSimple("组队任务遇到了错误。请在论坛上报告此问题并附上截图。");
            } else {
                // Check if all party members are within PQ levels
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;
                var it = party.iterator();

                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                        levelValid += 1;
                    } else {
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                    }
                }
                if (party.size() > maxPartySize || inMap < minPartySize) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager("HenesysPQ");
                    if (em == null) {
                        cm.sendSimple("另一个队伍已经进入了该频道的 #r希拉任务#k。请尝试其他频道，或等待当前队伍完成。");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop.equals("0") || prop == null) {
                            em.startInstance(cm.getParty(), cm.getMap(), 70);
                            cm.removeAll(4001101);
                            cm.dispose();
                            return;
                        } else {
                            cm.sendSimple("你的队伍不符合要求。请遵守以下条件：\r\n\r\n#r要求：");
                        }
                    }
                } else {
                    cm.sendSimple(".#b\r\n#L0#我想要年糕帽。#l " + minPartySize + " 到等级 " + minLevel + "如果你想尝试任务，请让 #b你的队长#k 来和我对话。 " + maxLevel + "请为这顶帽子腾出空间。");
                }
            }
        } else { //broken glass
            if (cm.haveItem(1002798,1)) {
                if (!cm.canHold(1003266,1)) {
                    cm.sendOk("带着20个年糕再来吧。");
                } else if (cm.haveItem(4001101,20) && cm.isGMS()) { //TODO JUMP
                    cm.gainItem(1003266, 1);
                    cm.gainItem(4001101, -20);
                } else {
                    cm.sendOk("带着10个年糕再来吧。");
                }
            } else if (!cm.canHold(1002798,1)) {
                cm.sendOk("带着20个年糕再来吧。");
            } else if (cm.haveItem(4001101,10)) {
                cm.gainItem(4001101,-10); //should handle automatically for "have"
                cm.gainItem(1002798,1);
            } else {
                cm.sendOk("带着10个年糕再来吧。");
            }
            cm.dispose();

        }
    }
}