var status = -1;
//this quest is WHERES BOOK
function start(mode, type, selection) {
	qm.sendNext("去和废弃都市的伊卡鲁斯谈谈。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(500);
	qm.forceCompleteQuest();
	qm.dispose();
}