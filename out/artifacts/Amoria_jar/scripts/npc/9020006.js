
function action(mode, type, selection) {
		if (cm.getMapId() / 100 == 9211607) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				if (!cm.canHold(4001534, 1)) {
					cm.sendOk("请在其他栏腾出空间。");
					cm.dispose();
					return;
				}
				cm.gainExp_PQ(200, 1.5);
				cm.gainItem(4001534, 1);
				cm.gainNX(2000);
				cm.warp(921160000,0);
				cm.dispose();
			} else {
				cm.sendOk("请击败阿尼！");
				cm.safeDispose();
			}
		}
}