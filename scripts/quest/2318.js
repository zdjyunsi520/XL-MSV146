/* ===========================================================
			Resonance
	NPC Name: 		Scarrs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Killer Mushroom Spores(2)
=============================================================
Version 1.0 - Script Done.(18/7/2010)
=============================================================
*/

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendOk("我知道这不是一件容易的事，但没有它们我就无法制作#b杀手蘑菇孢子#k。请再考虑一下。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("嗯……在你收集毒蘑菇盖的时候，我研究了孢子的制作方法，发现我们还需要更多的材料。我想让你再收集一组材料。你能做到吗？");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("好的，我要你去打败叛变孢子并带回#b50个变异孢子#k。");
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
		qm.sendOk("你收集到了所有必要的材料吗？")
	if (status == 1){
		qm.gainExp(11500);
		qm.gainItem(4000499, -50);
		qm.sendNext("好的，这些应该足够我制作#b杀手蘑菇孢子#k了。请稍等一下。");
		qm.forceCompleteQuest();
		qm.gainItem(2430014, 1);
	} if(status == 2){
		qm.sendPrev("好的，这就是杀手蘑菇孢子。希望这足够你拯救我们的公主并帮助我们收复王国。祝你好运！");
		qm.dispose();
	}
}
	