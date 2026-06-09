var status = -1;

function start() {

    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode != 1) {
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
	if (cm.isPlayerInstance()) {
		if (cm.getMapId() == 749040100) {
			cm.sendSimple("你想做什么？\r\n #L0#离开迷你地下城#l");
		} else {
			cm.sendSimple("你想做什么？\r\n #L0#离开金币地图#l");
		}
	} else {
		cm.sendOk("抱歉，我还没有被编写好。");
		cm.safeDispose();
		return;
	}
    }
    else if (status == 1) {
	cm.sendYesNo("你确定要这样做吗？你将无法再回来，而且也不会获得退款！");
    }
    else if (status == 2) {
	if (cm.isPlayerInstance()) { 
		cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
	}
	cm.warp(910000000, 0);
	cm.dispose();
    }
}