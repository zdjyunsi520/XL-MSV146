/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("欢迎来到埃雷布！这是整个枫之谷世界最安全、最和平的地方。女皇一直把它保持得很好！你是#b #h ##k，对吧？来加入#p1064023#骑士团的。我是你的向导#p1102004#。镇上所有的初心者都先来找我！");
	} else if (status == 1) {
      qm.sendNextPrev("你赶紧去骑士迎新会吧。他们已经开始了。跟我来，好吗？。");
    } else if (status == 2) {	    
		qm.warp(130030100);
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}