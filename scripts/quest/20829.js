/* Cygnus revamp
	Noblesse tutorial
	Kizan
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendYesNo("抬头挺胸！不要驼背！我要把你训练成型。");
	} else if (status == 1) {
		qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/3");
		qm.spawnMonster(9300730,3);
		qm.forceStartQuest();
		qm.spawnNpcForPlayer(1102101, 90, 88);
	    qm.dispose();
	}
  }

function end(mode, type, selection) {
	 qm.dispose();
	}