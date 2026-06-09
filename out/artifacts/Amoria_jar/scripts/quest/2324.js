/* ===========================================================
			Resonance
	NPC Name: 		Minister of Home Affairs
	Map(s): 		Mushroom Castle: Corner of Mushroom Forest(106020000)
	Description: 	Quest -  Over the Castle Wall (3)
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
			qm.sendOk("这可能是你进入城堡的唯一方法了。请仔细考虑。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("啊！也许有一个方法……如果你能利用我们为保护城堡而种植的荆棘藤蔓，你也许就能进入城堡！");
	if (status == 1)
		qm.sendAcceptDecline("如果你能消除荆棘藤蔓上的尖刺，你就可以用藤蔓攀爬城墙。当然，那也需要一把藤蔓去除器……");
	if (status == 2)
		qm.sendOk("#b尖刺去除器#k是用奥斯伊尔高原神秘草药的提取物制成的。企鹅王用这些草药使猪猪中毒并占领了蘑菇森林。#b中毒猪尾巴#k就是你能找到这种草药提取物的地方。请收集#b100根中毒猪尾巴#k并送到#b魔法大臣#k那里。");
	if (status == 3){
		//qm.forceStartQuest();
		//qm.forceStartQuest(2324, "1");
		qm.gainExp(11000);
		qm.sendOk("你在那片区域穿行得很好。");
		qm.forceCompleteQuest();
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
		qm.sendOk("嗯，我明白了……所以他们完全封锁了入口和一切。");
	if (status == 1){
		qm.gainExp(11000);
		qm.sendOk("你在那片区域穿行得很好。");
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
	