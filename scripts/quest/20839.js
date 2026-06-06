/* Cygnus revamp
	Noblesse tutorial
	Kiku
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("嘿，你看起来不错。#h #。我觉得可以把你晋升为见习骑士了。\r\n只要跟着箭头走，它们会带你直接去女皇那里。");
	} else if (status == 1) {
	    qm.sendNextPrev("证明我是对的，#h #。");
	} else if (status == 2) {
        qm.forceStartQuest();	
		qm.gainExp(3348);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}