var status = -1;
function action(mode, type, selection) {
    status++;
    if (cm.getInfoQuest(23999).indexOf("exp3=1") != -1) {
	cm.sendNext("Hehehe...");
	cm.dispose();
	return;
    }
    if (status == 0) {
    	cm.sendNext("哎呀，你找到我了。哇，你真的很擅长这个游戏！\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 3 经验值");
    } else if (status == 1) {
	cm.gainExp(3);
	if (cm.getInfoQuest(23999).equals("")) {
	    cm.updateInfoQuest(23999, "exp3=1");
	} else {
	    cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp3=1");
	}
    	cm.dispose();
    }
}