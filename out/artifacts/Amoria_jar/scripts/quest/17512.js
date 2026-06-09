/* Dawnveil
	[Tynerum]So close, So Barrier
	??????
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("你是谁？");
	} else if (status == 1) {
      qm.sendNextPrev("这个地方看起来很古老...谁知道自从上次有人踏足这里已经过了多久了？");
    } else if (status == 2) {	 
	  qm.sendYesNo("你是谁？");
    } else if (status == 3) {		
	  qm.sendOk("这里不是你该来的地方。走吧。");
	} else if (status == 4) {	
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}