/*
	Description: 	Quest - Tasty Milk 2
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendOk("嗯……我觉得大多数宝宝都是一样的。你想想看然后改变主意了告诉我。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("它太大了所以我没意识到它是宝宝。它可能还消化不了肉。我的猜测是所有#b宝宝都需要先喝牛奶#k。");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNext("你可以从#b巨大道路#k的#b奶牛#k那里得到牛奶。你为什么不去请她给你一些呢？");
    } else if (status == 2) {
	qm.sendPrev("哦，等你喂完蜥蜴后，能回来找我吗？我有事想和你谈谈。");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendOk("哞！");
    } else if (status == 1) {
	qm.gainExp(1150);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}