/* Cygnus revamp
	Noblesse tutorial
	Tiny Bird
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("(*叽叽，喳喳*)");
	 } else if (status == 1) {
	  qm.sendNextPrevS("看！是一只鸟！它在跟我说话吗？");
	 } else if (status == 2) {
	 qm.sendNext("*叽叽，喳喳，喳喳*");
	 } else if (status == 3) {
	  qm.sendNextPrevS("天哪！我能听懂鸟语了！我一定是什么超级英雄。它...想让我跟着它。我相信基赞不会介意的。");
	 } else if (status == 4) {
	  qm.forceStartQuest();
	  qm.removeNpc(130030105,1102113);
	  qm.warp(130030104);
	  qm.dispose();
	} else if  (status == 5)  {
	  qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}