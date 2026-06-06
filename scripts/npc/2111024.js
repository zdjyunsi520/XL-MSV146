var status = -1;

function start() {
    if (cm.getQuestStatus(3360) == 2) {
	if (cm.getMapId() == 261010000) {
	    cm.playerMessage("你的名字在名单上。现在将把你传送到秘密通道。");
	    cm.warp(261030000, "sp_jenu");
	} else {
	    cm.playerMessage("你的名字在名单上。现在将把你传送到秘密通道。");
	    cm.warp(261030000, "sp_alca");
	}
	cm.dispose();
    } else if (cm.getQuestStatus(3360) == 1) {
	cm.sendGetText("请输入密码。");
    } else {
	cm.dispose();
    }
}

function action(mode, type, selection) {
    var pw = cm.getText();
    if (cm.getQuestRecord(3360).getCustomData().equals(pw)) {
	cm.forceCompleteQuest(3360);
	cm.playerMessage("安全装置已解除。");
    } else {
	cm.sendOk("密码无效。");
    }
    cm.dispose();
}