/*
	NPC Name: 		Dida
	Description: 		Quest - 2102 Shibuya
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.sendNext("……什么事？啊，我看到他正在逼近！");
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.askAcceptDecline("小心，他看起来……比以前更强大了。不要轻敌！");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}