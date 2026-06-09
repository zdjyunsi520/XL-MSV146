/*
	Flo - Crossroad of Time(220040200)
**/

function start() {
    if (cm.getQuestStatus(6225) == 1 || cm.getQuestStatus(6315) == 1) {
	var ret = checkJob();
	if (ret == -1) {
	    cm.sendOk("请组建队伍后再来和我说话。");
	} else if (ret == 0) {
	    cm.sendOk("请确保你的队伍人数为2人。");
	} else if (ret == 1) {
	    cm.sendOk("你的队伍中有成员的职业不符合进入异世界的条件。");
	} else if (ret == 2) {
	    cm.sendOk("你的队伍中有成员的等级不符合进入异世界的条件。");
	} else {
	    var dd = cm.getEventManager("ElementThanatos");
	    if (dd != null) {
		dd.startInstance(cm.getParty(), cm.getMap());
	    } else {
		cm.sendOk("发生了未知错误。");
	    }
	}
    } else {
	cm.sendOk("你似乎没有理由去见基于元素的塔纳托斯。");
    }
    cm.dispose();
}

function checkJob() {
    var party = cm.getParty();

    if (party == null) {
	return -1;
    }
    if (party.getMembers().size() != 2) {
	return 0;
    }
    var it = party.getMembers().iterator();

    while (it.hasNext()) {
	var cPlayer = it.next();

	if (cPlayer.getJobId() == 212 || cPlayer.getJobId() == 222 || cPlayer.getJobId() == 900) {
	    if (cPlayer.getLevel() < 120) {
		return 2;
	    }
	} else {
	    return 1;
	}
    }
    return 3;
}