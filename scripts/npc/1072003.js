/* Thief Job Instructor
	Thief 2nd Job Advancement
	Victoria Road : Construction Site North of Kerning City (102040000)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0 && cm.getQuestStatus(100010) == 1) {
	status = 3;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6141) == 1) {
	    var ddz = cm.getEventManager("DLPracticeField");
	    if (ddz == null) {
		cm.sendOk("发生未知错误。");
		cm.safeDispose();
	    } else {
		ddz.startInstance(cm.getPlayer());
		cm.dispose();
	    }
	} else if (cm.getQuestStatus(100010) == 2) {
	    cm.sendOk("你真是个英雄！");
	    cm.safeDispose();
	} else if (cm.getQuestStatus(100009) >= 1) {
	    cm.completeQuest(100009);

	    if (cm.getQuestStatus(100009) == 2) {
		cm.sendNext("哦，这不是#b黑暗领主#k的信吗？");
	    }
	} else {
	    cm.sendOk("你准备好了我就给你指路。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.sendNextPrev("你想证明你的实力？很好……")
    } else if (status == 2) {
	cm.askAcceptDecline("如果你准备好了，我会给你一个机会。");
    } else if (status == 3) {
	cm.startQuest(100010);
	cm.sendOk("你需要收集#b30个#t4031013##k给我。祝你好运。")
    } else if (status == 4) {
	cm.warp(910370000, 0);
	//	    cm.gainItem(4031011, -1);
	cm.dispose();
    }
}	