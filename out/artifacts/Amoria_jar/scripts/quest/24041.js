var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		qm.sendPlayerToNpc("冷静下来！我只要好好想想。好的，让我们理清现在的情况。");
	} else if (status == 1) {
		qm.sendPlayerToNpc("1. 其余的精灵们仍然被冰封着，所以黑魔法师的诅咒仍在生效。");
	} else if (status == 2) {
		qm.sendPlayerToNpc("2. 我是唯一一个醒来的。我不知道为什么，但我有一种感觉，黑魔法师的封印正在减弱。");
	} else if (status == 3) {
		qm.sendPlayerToNpc("3. 我想去外面看看枫之世界，但我只有10级。简直不敢相信……那个诅咒到底有多强大？我仍然在发抖！");
	} else if (status == 4) {
		qm.sendPlayerToNpc("对，振作起来……我需要确认自己没有什么异常。");
	} else {
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.forceCompleteQuest(29952);
	qm.dispose();
}
