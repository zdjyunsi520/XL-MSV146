var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (cm.getPlayer().getMapId() == 931000011) {
	cm.dispose();
	return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel00=1") == -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
    	if (status == 0) {
    	    cm.sendNext("退后！");
    	} else if (status == 1) {
	    cm.sendNextPrevS("谁在说话？！你在哪里？！", 2);
        } else if (status == 2) {
	    cm.sendNextPrev("往上看。");
        } else if (status == 3) {
	    cm.updateInfoQuest(23007, "vel00=1");
	    cm.showWZEffect("Effect/Direction4.img/Resistance/ClickVel");
	    cm.dispose();
	}
    } else if (cm.getInfoQuest(23007).indexOf("vel00=1") != -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
    	if (status == 0) {
    	    cm.sendNext("我的名字叫#b维塔#k。我是#r杰利麦罗医生#k的实验对象之一。但现在这不重要。你必须趁着有人看到你之前离开这里！");
    	} else if (status == 1) {
	    cm.sendNextPrevS("等等，你在说什么？有人在你身上做实验？！杰利麦罗是谁？", 2);
        } else if (status == 2) {
	    cm.sendNextPrev("嘘！你听到了吗？有人来了！一定是杰利麦罗医生！不好了！");
        } else if (status == 3) {
	    cm.updateInfoQuest(23007, "vel00=2");
	    cm.warp(931000011,0);
	    cm.dispose();
	}
    } else if (cm.getInfoQuest(23007).indexOf("vel01=1") != -1) {
    	if (status == 0) {
    	    cm.sendNext("呼，一定是有什么东西分散了他们的注意力。现在是你逃跑的机会。快走！");
    	} else if (status == 1) {
	    cm.sendNextPrevS("#b（维塔闭上了眼睛，似乎已经放弃了。你该怎么办？要不要试着打破容器？）#k", 2);
        } else if (status == 2) {
	    cm.sendNextPrev("#b（你用尽全力试图击打容器，但手滑了！）#k");
        } else if (status == 3) {
	    cm.gainExp(60);
	    cm.warp(931000013,0);
	    cm.dispose();
	}
    }
}