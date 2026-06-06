/*
	Description: 	Quest - A Bite of Pork
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你怎么能这样饿着我。我只是个宝宝。这样做是不对的！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("不，不，不。这不是我需要的。我需要更有营养的东西，主人！");
    } else if (status == 1) {
	qm.sendNextPrevS("#b嗯……所以你不是食草动物。你可能是食肉动物。毕竟你是一条龙。来点猪肉怎么样？#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("什么是……猪肉？从来没听说过，但如果是好吃的，我接受！只要喂我好吃的东西就行。除了植物什么都行！");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendOkS("#b(试着给米尔一些猪肉。你必须去农场猎杀几只猪。十只应该就够了……)#k", 2);
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
	qm.sendOk("哦，这就是你给我带的食物吗？这就是你说的猪肉？让我试试。");
    } else if (status == 1) {
	qm.gainExp(1850);
	qm.gainItem(4032453, -10);
	qm.sendNext("(大口大口，咕咚咕咚……)");
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendPrev("嗯……味道倒不差，但我觉得我消化不了。这不适合我……");
	qm.dispose();
    }
}