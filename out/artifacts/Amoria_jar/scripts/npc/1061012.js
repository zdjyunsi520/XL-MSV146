/*
	NPC Name: 		Insiginificant Being
	Map(s): 		Dungeon : Another Entrance
	Description: 		Takes you to another Dimension
*/

function start() {
    if (cm.getQuestStatus(6108) == 1) {
	var ret = checkJob();
	if (ret == -1) {
	    cm.sendOk("请先组建队伍再和我对话。");
	} else if (ret == 0) {
	    cm.sendOk("请确保你的队伍人数为2人。");
	} else if (ret == 1) {
	    cm.sendOk("你的队伍中有成员的职业不符合进入异世界的条件。");
	} else if (ret == 2) {
	    cm.sendOk("你的队伍中有成员的等级不符合进入异世界的条件。");
	} else {
	    var em = cm.getEventManager("s4aWorld");
	    if (em == null) {
		cm.sendOk("由于未知原因，你无法进入。请重试。" );
	    } else if (em.getProperty("started").equals("true")) {
		cm.sendOk("已经有人在另一个世界中尝试击败小巴洛古了。" );
	    } else {
		em.startInstance(cm.getParty(), cm.getMap());
	    }
	}
    }
    cm.dispose();
}

function action(mode, type, selection) {
}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
	return -1;
    }
    //    if (party.getMembers().size() != 2) {
    //	return 0;
    //    }
    var it = party.getMembers().iterator();

    while (it.hasNext()) {
	var cPlayer = it.next();

	if (cPlayer.getJobId() == 312 || cPlayer.getJobId() == 322 || cPlayer.getJobId() == 900) {
	    if (cPlayer.getLevel() < 120) {
		return 2;
	    }
	} else {
	    return 1;
	}
    }
    return 3;
}