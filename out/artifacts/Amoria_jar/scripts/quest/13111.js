/* Dawnveil
    [Maple Castle] Welcome to the Party
	Lania
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendAcceptDecline("#b枫之城堡#k在万圣节期间开放！任何穿着#r万圣节服装#k的人都可以进入。");
    } else if (status == 1) {	   
        qm.sendNext("哇，你的服装太棒了。你肯定被邀请参加#b枫之城堡#k万圣节派对了。");	
    } else if (status == 2) {		
		qm.warp(910028300,0);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	   qm.dispose();		
}