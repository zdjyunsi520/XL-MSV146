var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendOk("我可以带你去奖励关卡。你准备好了吗？");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (cm.getMapId() == 680000300 && cm.getQuestRecord(160002).getCustomData() != null) {
	var dat = parseInt(cm.getQuestRecord(160002).getCustomData());
	if (dat > 30) {
	    if (status == 0) {
	    	cm.sendYesNo("我可以带你去阿莫利亚村。你准备好了吗？");
	    } else {
		cm.warpMap(680000401,0);
		cm.dispose();
	    }
	    return;
	}
    }
    if (status == 0) {
	cm.sendYesNo("我可以带你去阿莫利亚村。你准备好了吗？");
    } else if (status == 1) {
	cm.warp(680000500, 0);
	cm.dispose();
    }
}