/* Cygnus revamp
	Noblesse tutorial
	Kizan
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendYesNo("你享受这杯饮料了吗？你最好是！这是我皮尤部落的特制饮品！\r\n现在...突击测验！你还记得怎么战斗吗？击败3只#o9300730#怪物，带给我3个新手蒂诺的羽毛物品！");
	} else if (status == 1) {
	    qm.forceStartQuest();
		qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/cygnusTutorial/4");
		qm.spawnMonster(9300730,3);
		qm.gainItem(4000489,3);
	    qm.dispose();
	}
  }

function end(mode, type, selection) {
	 qm.dispose();
	}