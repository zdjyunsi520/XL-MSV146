var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
    }
    if (status == 0) {
		if (cm.getPlayer().getMapId() == 551000000) {
			cm.sendYesNo("你想前往#r乌鲁城#k观光吗？\r\n只需要#e20,000#n金币！");
		} else {
			cm.sendYesNo("你没有#e20,000#n金币！");
		}
	} else if (status == 1) {
		if (mode > 0) {
		  if (cm.getPlayer().getMeso() > 19999) {
			if (cm.getPlayer().getMapId() == 551000000) {
				cm.warp(540000000, 0);
			} else {
				cm.warp(551000000, 0);
			}
				cm.gainMeso(-20000);
				cm.dispose();
		  } else {
			cm.sendOk("你没有#e20,000#n金币！");
			cm.dispose();
		  }
		}
	}
}