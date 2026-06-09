var status = -1;
function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23999).indexOf("exp2=1") != -1) {
	cm.sendNext("你找到琼和冯了吗？冯真的超级擅长躲藏。");
	cm.dispose();
	return;
    }
    if (status == 0) {
    	cm.sendNext("你找到琼和冯了吗？冯真的超级擅长躲藏。 \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5 exp");
    } else if (status == 1) {
	cm.gainExp(5);
	if (cm.getInfoQuest(23999).equals("")) {
	    cm.updateInfoQuest(23999, "exp2=1");
	} else {
	    cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp2=1");
	}
    	cm.dispose();
    }
}