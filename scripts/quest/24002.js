var status = -1;

function start(mode, type, selection) {
	qm.sendNext("祝你有……甜美的梦境……");
	qm.forceCompleteQuest();
	qm.dispose();
}
function end(mode, type, selection) {
	qm.sendNext("祝你有……甜美的梦境。");
	qm.forceCompleteQuest();
	qm.dispose();
}
