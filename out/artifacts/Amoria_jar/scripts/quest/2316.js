/* ===========================================================
			Resonance
	NPC Name: 		Minister of Magic
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Exploring Mushroom Forest(3)
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
			qm.sendOk("你既然要拒绝，当初为什么要问？#");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendAcceptDecline("我想我听说过一种可以打破这种屏障的药水。我想它叫#b杀手蘑菇孢子#k？嗯……外面有一位蘑菇学者#b斯卡斯#k在外面等着。#b斯卡斯#k是蘑菇方面的专家，去和他谈谈。");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendOk("我相信#k斯卡斯#k一定会竭尽全力帮助你的。");
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
		qm.sendOk("啊，你就是大家都在说的那个冒险者。我是代表蘑菇王国的#b皇家蘑菇学者斯卡斯#k。所以你需要一些#k杀手蘑菇孢子#k？");
	if (status == 1){
		qm.gainExp(4200);
		qm.sendOk("#k杀手蘑菇孢子#k……我想我以前听说过……");
		qm.forceCompleteQuest(); 
		qm.dispose();
	}
}
	