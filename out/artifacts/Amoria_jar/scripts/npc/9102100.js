/**
-- Odin JavaScript --------------------------------------------------------------------------------
	? - Victoria Road: Pet-Walking Road (100000202)
-- By ---------------------------------------------------------------------------------------------
	Xterminator
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Xterminator
---------------------------------------------------------------------------------------------------
**/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.sendNext("#b（这是什么……好恶心……里面有宠物的便便！）");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getQuestStatus(4646) == 1) {
	    if (cm.haveItem(4031921)) {
		cm.sendNext("#b（我看到有东西被草盖住了。要把它拔出来吗？）");
		cm.dispose();
	    } else {
		cm.sendYesNo("#b（我什么也没找到。）");
	    }
	} else {
	    cm.sendOk("我找到了宠物训练师巴托斯藏起来的物品……这张纸条。");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendNext("我找到了宠物训练师巴托斯藏起来的物品……这张纸条。");
	cm.gainItem(4031921, 1);
	cm.dispose();
    }
}