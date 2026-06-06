/* Cygnus revamp
	Noblesse tutorial
	Kinu
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
	  qm.sendYesNo("我是基努。我会让你了解埃雷布的历史。现在，去坐下！我的学生在比我矮的时候我教得最好！");
	} else if (status == 1) {
      qm.sendNext("在任何椅子前按X键坐下。如果你自己有一把，也是一样。X标记你的屁股。");
	} else if (status == 2) {
	  qm.forceStartQuest();
	  qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/10");
	  qm.dispose();
	} else if (status == 3) {
	  qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}