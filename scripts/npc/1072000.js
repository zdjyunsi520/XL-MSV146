/* Warrior Job Instructor
	Warrior 2nd Job Advancement
	Victoria Road : West Rocky Mountain IV (102020300)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(100004) == 1) {
	    cm.sendOk("你需要收集#b30个#t4031013##k给我。祝你好运。");
	    status = 3;
	} else {
	    if (cm.getQuestStatus(100004) == 2) {
		cm.sendOk("你真是个英雄！");
		cm.safeDispose();
	    } else if (cm.getQuestStatus(100003) >= 1) {
		cm.completeQuest(100003);
		if (cm.getQuestStatus(100003) == 2) {
		    cm.sendNext("哦，这不是#b与巴洛古共舞#k的信吗？");
		}
	    } else {
		cm.sendOk("你准备好了我就给你指路。");
		cm.safeDispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("你想证明你的实力？很好……")
    } else if (status == 2) {
	cm.askAcceptDecline("如果你准备好了，我会给你一个机会。");
    } else if (status == 3) {
	cm.startQuest(100004);
	cm.sendOk("你需要收集#b30个#t4031013##k给我。祝你好运。")
    } else if (status == 4) {
	//	    cm.gainItem(4031008, -1);
	cm.warp(910230000, 0);
	cm.dispose();
    }
}	