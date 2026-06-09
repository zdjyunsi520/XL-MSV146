var status = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			cm.sendSimple("天啊...好热啊！！！~有什么可以帮你的？\r\n#L0#离开活动游戏。#l\r\n#L1#购买武器（木棍 1枫币）#l");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendYesNo("如果你现在离开，接下来24小时内将无法再次参加此活动。你确定要离开吗？");
			} else if (selection == 1) {
				if (cm.getPlayer().getMeso() < 1 || !cm.canHold(1322005)) {
					cm.sendOk("你的枫币不够或者背包没有空间。");
				} else {
					cm.gainItem(1322005, 1);
					cm.gainMeso(-1); //lool
				}
				cm.dispose();
			}
		} else if (status == 2) {
			var map = cm.getSavedLocation("EVENT");
			if (map > -1) {
				cm.warp(map, 0);
			} else {
    				cm.warp(910000000, 0);
			}
			cm.dispose();
		}
	}
}

function getEimForGuild(em, id) {
        var stringId = "" + id;
        return em.getInstance(stringId);
}