var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("#b嗯，箱子里有一种药物物质。这是什么？你最好把这个拿去给约翰问问他这是什么。#k");
	} else {
		qm.gainItem(4032423,1);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
