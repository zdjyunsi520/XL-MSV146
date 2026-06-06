/*
	NPC Name: 		Commander Grauda
	Description: 		Quest - Elliminate Dunas Squad
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	}
	if (status == 0) {
	    qm.sendNext("好的，你也要参加战斗了。谢谢……只是提醒你，敌人可能比你面对过的任何敌人都更强大，你准备好了吗？");
	} else if (status == 1) {
	    qm.warp(802000409, 0);
	    //qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}