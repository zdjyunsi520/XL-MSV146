var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
	    cm.EnableUI(1);
		cm.sendPlayerToNpc("他应该就在森林深处，我已经检查过这边了");
	} else if (status == 1) {
	     cm.EnableUI(1);
		cm.sendNextNoESC("好的，我继续前进！");
	} else if (status == 2) {
		cm.sendPlayerToNpc("祝你好运！");
	} else if (status == 3) {
		cm.sendNextNoESC("祝你好运！");
	} else if (status == 4) {
		cm.sendPlayerToNpc("Thanks");
	} else if (status == 5) {
		cm.sendNextNoESC(":)");
    } else if (status == 6) {
			cm.warp(910142080,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
	   cm.dispose();
}