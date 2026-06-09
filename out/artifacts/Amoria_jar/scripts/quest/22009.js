/*
	Description: 	Quest -  Verifying the Farm Situation
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendOk("什么？好好想想！如果农场不行了，我们靠什么活！嗯？再和我对话然后这次按接受！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("如果农场附近的狐狸数量和我们家附近一样增加了，那会妨碍爸爸的农场工作。我们应该调查一下。你不觉得吗？");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendOk("去#b中央农场#k向#b爸爸#b了解情况。如果那里狡猾的狐狸数量也增加了，我们就要进行一次大规模的狡猾狐狸猎杀行动。");
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
	qm.sendOk("什么事，埃文？我确信你不是来送爱心午餐盒的，我也太忙没空和你玩……什么？狐狸的数量增加了？");
    } else if (status == 1) {
	qm.sendNext("嗯，我不太确定。我太忙了没注意到。#b猪猪#k们一直发疯似的到处乱跳。连狐狸似乎都在躲避猪猪……");
	qm.gainExp(260);
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendPrev("啊，也许这就是为什么家附近狡猾的狐狸变多了。它们跑到那里去躲避猪猪。嗯……");
	qm.dispose();
    }
}