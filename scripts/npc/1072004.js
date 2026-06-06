/**
	Warrior Job Instructor - Warrior's Rocky Mountain (108000300)
**/

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
    if (status == 0) {
	if (cm.haveItem(4031013,30)) {
	    cm.removeAll(4031013);
	    cm.completeQuest(100004);
	    cm.startQuest(100005);
	    cm.sendOk("你是个真正的英雄！拿着这个，与巴洛古共舞会认可你的。");
	} else {
	    cm.sendOk("你需要收集#b30个#t4031013##k给我。祝你好运。")
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4031012, 1);
	cm.warp(102000000, 0);
	cm.dispose();
    }
}	