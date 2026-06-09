/*
	Description: 	Quest - Tasty Milk 1
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("自己想办法没用。我得去找一个#b比主人更年长更聪明的人！#k");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("呃。这样不行。我需要别的东西。不要植物。不要肉。什么，你也不知道？但你是主人，你也比我年长。你一定知道什么对我好！");
    } else if (status == 1) {
	qm.sendNextPrevS("#b 但我不知道。这又不是年龄的问题……", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("既然你更年长，你在这个世界上一定更有经验。你比我懂得多也是理所当然的。哦，算了。我去找一个比你更年长的人，主人！");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendOkS("#b(你已经问过爸爸一次了，但你没有更好的主意。是时候再问他一次了！)#k", 2);
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
	qm.sendOk("什么？你还在试着喂那只蜥蜴？嗯，所以它不吃干草也不吃猪肉？真是个挑食的小家伙。哦？这只蜥蜴还是个宝宝？");
    } else if (status == 1) {
	qm.gainExp(260);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}