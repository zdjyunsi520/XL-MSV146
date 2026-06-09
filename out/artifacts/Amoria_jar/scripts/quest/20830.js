/* Cygnus revamp
	Noblesse tutorial
	Kimu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendYesNo("好了！你赢得了30秒的补水休息！喝了这个，别在我面前晕倒！");
	} else if (status == 1) {
	    qm.forceStartQuest();
		qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/2");
		qm.gainItem(2001555, 1);
	    qm.dispose();
	}
  }

function end(mode, type, selection) {
	 qm.dispose();
	}