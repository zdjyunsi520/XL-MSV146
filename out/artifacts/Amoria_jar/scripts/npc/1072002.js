/* Bowman Job Instructor
	Hunter Job Advancement
	Warning Street : The Road to the Dungeon (106010000)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0 && cm.getQuestStatus(100001) == 1) {
	status = 3;
    }
    if (status == 0) {
	if (cm.getQuestStatus(100001) == 2) {
	    cm.sendOk("你真是个英雄！");
	    cm.dispose();
	} else if (cm.getQuestStatus(100000) >= 1) {
	    cm.completeQuest(100000);
	    if (cm.getQuestStatus(100000) == 2) {
		cm.sendNext("哦，这不是#b雅典娜#k的信吗？");
	    }
	} else {
	    cm.sendOk("你准备好了我就给你指路。");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendNextPrev("你想证明你的实力？很好……")
    } else if (status == 2) {
	cm.askAcceptDecline("如果你准备好了，我会给你一个机会。");
    } else if (status == 3) {
	cm.startQuest(100001);
	cm.sendOk("你需要收集#b30个#t4031013##k给我。祝你好运。")
    } else if (status == 4) {
	// cm.gainItem(4031010, -1);
	cm.warp(910070000);
	cm.dispose();
    }
}