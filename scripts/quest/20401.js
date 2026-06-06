var status = -1;

function start(mode, type, selection) {
	qm.sendNext("我不太清楚..也许你可以去#b狩猎僵尸#k找线索。也许会有什么物品或东西能引导你找到它。");
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
}