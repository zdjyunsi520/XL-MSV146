var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你还不明白怎么回事吗？如果你再和我谈一次，我会再给你解释一遍。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("#t4032315#……#r这个傀儡正在发出奇怪的声音#k。你当然用耳朵听不到，因为只有#o1210102#s才能听到。我相信正是这个声音改变了#o1210102#s的性格。");
    } else if (status == 1) {
	qm.askAcceptDecline("受到声音影响的#o1210102#s变得愤世嫉俗了。它们开始与未受影响的#o1210102#s战斗，这使得所有#o1210102#s都进入了备战状态。#b所有这些#o1210102#s变化的罪魁祸首就是这个傀儡#k！你明白了吗？");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("我想知道究竟是什么引发了这一切。这个傀儡不可能是自然产生的，这意味着有人策划了这一切。我应该继续关注#o1210102#s的动向。", 9);
    } else if (status == 3) {
	qm.sendPrevS("#b(你成功找到了导致#o1210102#s变化的原因。你应该向#p1002104#报告并传达你收集到的信息。)#k", 2);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}