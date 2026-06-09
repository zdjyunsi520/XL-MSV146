var status = -1;
//this quest is JOINING ORGANIZATION
function start(mode, type, selection) {
	qm.sendNext("请消灭150只诅咒之眼。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(2300);
	qm.forceCompleteQuest();
	qm.dispose();
}