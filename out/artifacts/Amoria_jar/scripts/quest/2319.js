/* ===========================================================
			Resonance
	NPC Name: 		Scarrs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Killer Mushroom Spores(3)
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/


var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("我知道这不是什么难事，所以准备好了就回来找我。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("哦，我差点忘了！我在想什么呢？我需要你把这个#b杀手蘑菇孢子样本#k交给#b魔法大臣#k并报告结果。");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4032389, 1);
		qm.sendOk("#b魔法大臣#k曾告诉过我，一旦#b杀手蘑菇孢子#k完成，他也想要一份样本。我把样本给你；现在去交给我们的#b魔法大臣#k吧。");
		qm.dispose();
	}
}

function end(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendOk("#b杀手蘑菇孢子#k终于完成了吗？");
	if (status == 1){
		qm.gainExp(4200);
		qm.gainItem(4032389, -1);
		qm.sendOk("好的，这就是#b杀手蘑菇孢子#k。谢谢，谢谢，也请代我向#b斯卡斯#k道谢。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	