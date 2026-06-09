var status = -1;

function start(mode, type, selection) {
	qm.sendNext("猴子正在向你打手势。。");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.dispose();
}
