/* Cygnus revamp
	Noblesse tutorial
	Kizan
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("我猜你差不多准备好成为见习骑士了。我会把你送到考场，记住，不要驼背！");
	} else if (status == 1) {	
        qm.forceStartQuest();	
        qm.forceCompleteQuest();
        qm.warp(130030106);		
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}