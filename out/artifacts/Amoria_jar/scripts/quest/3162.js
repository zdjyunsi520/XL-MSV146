var status = -1;

function start(mode, type, selection) {
	qm.sendNext("皇家卫士阿尼每小时出现一次，不过他现在不想战斗。");
	qm.forceStartQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
