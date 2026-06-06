/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
	    qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
		qm.sendNext("骑士得强壮，对吧？我是说，你们有些任务真的很艰难。所以，你准备好进行下一次训练了吗？");
	} else if (status == 1) {
		qm.warp(130030105);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
	    qm.dispose();
	}
  }
}