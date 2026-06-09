var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.getPlayer().getMarriageId() > 0 && qm.getPlayer().getGuildId() > 0 && qm.getPlayer().getJunior1() > 0 && qm.canHold(1142081,1)) {
		qm.sendNext("哇。你来了！");
		qm.forceCompleteQuest();
		qm.gainItem(1142081,1);
	} else {
		qm.sendNext("我觉得你不符合要求。先加入一个婚礼、家族和公会吧。");
	}
	qm.dispose();
}
