var status = -1;

function start() {
    cm.askAcceptDecline("你们是来打败我的勇士吗？还是反黑魔法师联盟的人？不管你们是谁...既然彼此的目的都很明确了，就不需要废话了...\r\n放马过来吧，蠢货们！");
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
	cm.removeNpc(cm.getMapId(), 2161000);
	cm.spawnMob(8840010, 0, -181);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
    }
    cm.dispose();
}