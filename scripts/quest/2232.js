var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getJunior1() > 0) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("干得好！");
	} else {
		qm.sendNext("请找一个后辈！");
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (qm.getPlayer().getJunior1() > 0) {
		qm.forceCompleteQuest();
		qm.gainExp(3000);
		qm.sendNext("干得好！");
	} else {
		qm.sendNext("请找一个后辈！");
	}
	qm.dispose();
}
