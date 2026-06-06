var status = -1;

function start(mode, type, selection) {
	qm.sendNext("请来找我，我在埃尔斯纳斯的酋长官邸。");
    	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.dispose();
}