var status = -1;
//this quest is DRAGON TYPES 2
function start(mode, type, selection) {
	qm.sendNext("去和魔法森林的大魔导师格林德谈谈。");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}