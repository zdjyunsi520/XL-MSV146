var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("你想做什么？ \r\n #L0#离开公会任务#l");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
	if (cm.isPlayerInstance()) {
		cm.sendSimple("抱歉，我帮不了你！");
	} else {
		cm.sendOk("你确定要这么做吗？你将无法再回来！");
		cm.dispose();
	}
    }
    else if (status == 1) {
	cm.sendYesNo("你确定要这么做吗？你将无法再回来！");
    }
    else if (status == 2) {
	if (cm.isPlayerInstance()) { 
		cm.getPlayer().getEventInstance().removePlayer(cm.getPlayer());
	}
	cm.dispose();
	return;
    }
}
