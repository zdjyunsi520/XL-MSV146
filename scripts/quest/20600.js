/*
 * Cygnus Skill - Training Never ends
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
	qm.askAcceptDecline("#h0#。你达到100级后就一直在偷懒训练吗？我们都知道你有多强大，但训练还没有完成。看看这些骑士指挥官。他们日夜训练，为可能遭遇黑魔法师的情况做着准备。");
    } else {
	if (mode == 1) {
	    qm.forceStartQuest();
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}