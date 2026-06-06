var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (cm.getPlayer().getMapId() == 931000011 || cm.getPlayer().getMapId() == 931000030) {
	cm.dispose();
	return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1) {
    	if (status == 0) {
    	    cm.sendNext("哇。发-发生了什么？玻璃碎了...是刚才的震动把它震碎的吗？");
    	} else if (status == 1) {
	    cm.sendNextPrevS("现在没有什么能阻止你了，对吧？我们快离开这里！", 2);
        } else if (status == 2) {
	    cm.sendNextPrevS("那就快点！我们走！", 2);
        } else if (status == 3) {
	    cm.updateInfoQuest(23007, "vel00=2;vel01=2");
	    cm.warp(931000020,1);
	    cm.dispose();
	}
    } else if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1) {
    	if (status == 0) {
    	    cm.sendNext("我已经...很久很久没有出过实验室了。这是哪里？");
    	} else if (status == 1) {
	    cm.sendNextPrevS("这是通往埃德尔斯坦的路，我就住在那里！趁黑色之翼还没追上来，我们快离开这里。", 2);
        } else if (status == 2) {
	    cm.updateInfoQuest(23007, "vel00=2;vel01=3");
	    cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	    cm.dispose();
	}
    } else {
	cm.sendOk("我已经...很久很久没有出过实验室了。");
    	cm.dispose();
    }
}