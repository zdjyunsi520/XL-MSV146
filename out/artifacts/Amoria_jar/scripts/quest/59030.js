/* Return to Masteria
    Eka's Power
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("说实话，我从没想过有一天你会强大到能够驾驭我的力量。我想我现在不得不让你召唤我了……",5,9390303);
	} else if (status == 1) {
	    qm.sendNextPrevS("切换模式时按#b[上]#k来激活我。",5,9390303);
	} else if (status == 2) {
	    qm.sendNextPrevS("我确定你已经知道怎么——呃。为什么你总是一副迷茫的样子？",5,9390303);
	} else if (status == 3) {
	    qm.sendNextPrevS("好吧好吧。我来解释。你只有在激活我的模式时才能使用我的技能，所以记得把#b我的鹰技能#k设置在#b我的模式#k的快捷键上。",5,9390303);
	} else if (status == 4) {
	    qm.sendNextPrevS("拿着这个。记住，这绝不代表我喜欢你。\r\n#i1142674:##b#t1142674:##k",5,9390303);
	} else if (status == 5) {
	    qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142674,1)
		qm.teachSkill(110001503,1,1);
        qm.dispose();
	}
}