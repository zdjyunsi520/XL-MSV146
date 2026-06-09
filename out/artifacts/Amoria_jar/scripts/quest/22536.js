var status = -1;
//this quest is NELLA INVESTIGATION
function start(mode, type, selection) {
	qm.sendNext("去和废弃都市的内拉谈谈。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(4000);
	qm.forceCompleteQuest();
	qm.dispose();
}