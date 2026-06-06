/* ===========================================================
			Resonance
	NPC Name: 		Minister of Magic
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Over the Castle Wall (1)
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
			qm.sendOk("你似乎不太会听从指示。准备好了再来找我。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("现在你可以突破蘑菇森林的荆棘藤蔓屏障了，但在此之前，#b内政大臣#k想和你谈谈。请立即去见他。");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("祝你好运。");
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
		qm.sendOk("我一直在关注你出色的工作。我知道你已经成功制造了#b杀手蘑菇孢子#k，可以穿透森林中那道不可穿越的屏障。恭喜！");
	if (status == 1){
		qm.gainExp(2500);
		qm.sendOk("现在的问题是想办法如何进入城堡。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	