var status = -1;

function start(mode, type, selection) {
	qm.sendNext("去找雷克斯，但不要碰封印。明白了吗？你可以通过冰谷II的入口进入冰峡谷。");
    	qm.forceStartQuest(3122, "0");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.sendNext("谢谢。");
	qm.forceCompleteQuest();
	qm.dispose();
}