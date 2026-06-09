/*
	Thief Job Instructor - Thief's Construction Site (108000400)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.haveItem(4031013, 30)) {
	    cm.removeAll(4031013);
	    cm.completeQuest(100010);
	    cm.startQuest(100011);
	    cm.sendOk("你是个真正的英雄！拿着这个，黑暗领主会认可你的。");
	} else {
	    cm.sendOk("你需要收集#b30个#t4031013##k给我。祝你好运。")
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.warp(103000000, 0);
	cm.gainItem(4031012, 1);
	cm.dispose();
    }
}	