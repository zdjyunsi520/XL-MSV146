/*
	NPC Name: 		Nineheart
	Description: 		Quest - Are you sure you can leave?
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("你什么时候才能意识到你有多弱...在维多利亚岛遇到麻烦的时候吗？");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("你终于成为了一名见习骑士。我想马上给你一个任务，但你还远远不能独立处理任务。你确定你能这样就去维多利亚岛吗？");
    } else if (status == 1) {
	qm.askAcceptDecline("去维多利亚岛是你的事，但一个在战斗中无法照顾自己的见习骑士很可能会损害女皇无可挑剔的声誉。作为这座岛屿的首席军师，我不能让这种事情发生。我希望你继续训练，直到合适的时机到来。");
    } else if (status == 2) {
	qm.forceCompleteQuest();
	qm.sendNext("#p1102000#训练教官会帮助你训练成一名合格的骑士。一旦你达到13级，我会给你分配一两个任务。所以在此之前，继续训练吧。");
    } else if (status == 3) {
	qm.sendPrev("哦，还有，你知道如果你和#p1101001#搭话，她会给你祝福吗？这个祝福一定会在你的旅途中帮到你。");
    } else if (status == 4) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}