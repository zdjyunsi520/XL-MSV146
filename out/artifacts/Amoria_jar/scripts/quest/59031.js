/* Return to Masteria
    Summoning Arby
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("我来了！终于轮到和我一起玩了！",5,9390463);
	} else if (status == 1) {
	    qm.sendNextPrevS("切换模式时按#b[下]#k来激活我。",5,9390463);
	} else if (status == 2) {
	    qm.sendNextPrevS("既然我这么可爱，你和你队友一定会爱死我的！",5,9390463);
	} else if (status == 3) {
	    qm.sendNextPrevS("你只有在激活我的模式时才能使用我的技能，所以记得把#b我的猫技能#k设置在#b我的模式#k的快捷键上！",5,9390463);
	} else if (status == 4) {
	    qm.sendNextPrevS("这是我最后的礼物！\r\n收下这个#i1142675:##b#t1142675:##k",5,9390463);
	} else if (status == 5) {
	    qm.sendNextPrevS("暂时就这么多了！我们以后再见！拜拜！",5,9390463);
	} else if (status == 6) {
	    qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142675,1)
		qm.teachSkill(110001504,1,1);
        qm.dispose();
	}
}