var status = -1;

function start(mode, type, selection) {
	qm.sendNext("猴子正在给你一个苹果。。");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
