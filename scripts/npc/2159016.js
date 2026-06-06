var status = -1;
function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23999).indexOf("exp4=1") != -1) {
	cm.sendNext("Hehehe...");
	cm.dispose();
	return;
    }
    if (status == 0) {
    	cm.sendNext("啊！你找到我了。但我这么小！你是这个游戏的专家吗？\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 经验值");
    } else if (status == 1) {
	cm.gainExp(3);
	if (cm.getInfoQuest(23999).equals("")) {
	    cm.updateInfoQuest(23999, "exp4=1");
	} else {
	    cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp4=1");
	}
    	cm.dispose();
    }
}