var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendPlayerToNpc("英雄发现了一个陷阱！有什么东西被困在里面了吗？难道是...晚餐？！");
    } else if (status == 1) {
		cm.sendPlayerToNpc("英雄发现了一个陷阱！有什么东西被困在里面了吗？难道是...晚餐？！");
    } else if (status == 2) {
	    cm.EnableUI(0);
		cm.forceCompleteQuest(59002);
		cm.dispose();
	}
}