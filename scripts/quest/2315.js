/* ===========================================================
			Resonance
	NPC Name: 		Minister of Home Affairs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Exploring Mushroom Forest(2)
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
			qm.sendOk("请不要忘记我们的求助。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("一道强大的魔法屏障吗？那我们该怎么办……？如果我们找不到打破屏障的方法，就无法营救公主。如果如你所说物理上无法突破的话，那向我们的#b魔法大臣#k求助怎么样？");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("请立即去见他。#b魔法大臣#k可能看起来有点急躁，但他非常博学，我相信他一定知道该怎么办。");
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
		qm.sendOk("什么？你调查了蘑菇森林的屏障？");
	if (status == 1){
		qm.gainExp(4000);
		qm.sendOk("嗯……真有意思。这是一个由拥有强大魔力的人设置的屏障，这意味着我们无法以物理方式突破它。");
		qm.forceCompleteQuest(); 
		qm.dispose();
	}
}
	