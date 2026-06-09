var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 40) {
			cm.sendYesNo("你需要低于40级并且拥有玛尔巴斯的项链才能进入。");
		} else {
			cm.sendOk("你需要低于40级并且拥有玛尔巴斯的项链才能进入。");
			cm.dispose();
		}
} else {
	cm.warp(677000000,0);
	cm.dispose();
    }
}