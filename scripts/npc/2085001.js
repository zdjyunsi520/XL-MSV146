function start() {
    var eim = cm.getDisconnected("Dragon_Nest");
    if (eim != null && cm.getPlayer().getParty() != null) { //only skip if not null
        eim.registerPlayer(cm.getPlayer());
    }
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
        cm.sendOk("队伍队长必须在这里。");
        cm.dispose();
        return;
    }
    var party = cm.getPlayer().getParty().getMembers();
    var next = true;
    var size = 0;
    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
        if (ccPlayer == null || ccPlayer.getLevel() < 120 || (ccPlayer.getSkillLevel(ccPlayer.getStat().getSkillByJob(1026, ccPlayer.getJob())) <= 0)) {
            next = false;
            break;
        } else if (ccPlayer.isGM()) {
            size += 4;
        } else {
            size++;
        }
    }
    if (next && size >= 2) {
        var em = cm.getEventManager("Dragon_Nest");
        if (em == null) {
            cm.sendOk("该活动目前不可用。");
        } else {
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                em.startInstance(cm.getParty(), cm.getMap(), 200);
            } else {
                cm.sendOk("已经有人在挑战这个BOSS了。");
            }
        }
    } else {
        cm.sendOk("确保所有2名以上的队伍成员都在此地图且等级达到120级以上，并且拥有飞行技能。");
    }
    cm.dispose();
}

function action(a,b,c) {}