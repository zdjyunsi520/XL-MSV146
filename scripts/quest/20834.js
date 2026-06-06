/* Cygnus revamp
	Noblesse tutorial
	Cygnus
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("啊，你一定是我的新兵之一。");
	} else if (status == 1) {
	    qm.sendNextPrevS("我的名字叫#h #。我喜欢埃雷布。这里很漂亮。");
	} else if (status == 2) {
      qm.sendNextPrev("哦，是的。埃雷布很美，也很宁静。你的训练辛苦吗？");
	} else if (status == 3) {
	    qm.sendNextPrevS("没什么我应付不了的。枫之谷世界最好做好准备，因为我要用尽全力拯救它了。");
	} else if (status == 4) {
        qm.sendNextPrev("（她微笑着。）你的热情让人安心。这么多人的苦难让我倍感沉重...我希望你能帮我减轻他们的痛苦。");
	} else if (status == 5) {
	    qm.sendNextPrevS("是，嗯，抱歉。请问你是谁来着？你看起来不太像个骑士...");
	} else if (status == 6) {
        qm.sendNextPrev("我的名字是...");
	} else if (status == 7) {	
        qm.forceStartQuest();    
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}