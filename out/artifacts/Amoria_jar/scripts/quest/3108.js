var status = -1;

function start(mode, type, selection) {
	qm.sendNext("啊，找到线索了！我们回斯卡杜那里吧。");
    	qm.forceCompleteQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
}