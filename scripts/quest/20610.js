/*
 * Cygnus Skill -
 */

var status = -1;

function start(mode, type, selection) {
    status++;

    if (status == 0) {
	qm.askAcceptDecline("你掌握你的技能了吗？我确定你已经掌握了所有技能，这意味着...是你学习一个#b新技能#k的时候了，对吧？");
    } else if (status == 1) {
	if (mode == 0) {
	    qm.sendOk("嗯，你现在所做的并不能让你看起来谦逊。你只是在自满，那从来都不是好事。");
	} else {
	    qm.forceStartQuest();
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}