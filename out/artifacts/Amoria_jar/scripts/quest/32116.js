/* Dawnveil
    [Ellinel Fairy Academy] The Search Concluded
	Cootie
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("嘿，#b#h ##k。我正在告诉女校长我们发现的东西……",4);	
	} else if (status == 1) { 
	    qm.sendNextPrevS("你认为是孩子们在试图排演一部戏？",4,1500001);
	} else if (status == 2) { 
	    qm.sendNextPrevS("我们找到的一切都指向这一点。你觉得那就是孩子们失踪的原因吗？",4);	
	} else if (status == 3) { 
	    qm.sendNextPrevS("这都是我的错，伊万娜女校长。",4,1500002);
	} else if (status == 4) { 
	    qm.sendNextPrevS("......",4,1500002);
	} else if (status == 5) { 
	    qm.sendNextPrevS("几天前，我撞见孩子们模仿人类的英雄，所以我训斥了他们。",4,1500002);
	} else if (status == 6) { 
	    qm.sendNextPrevS("你为什么要惩罚他们？孩子们崇拜英雄是很自然的事。我在他们这个年纪的时候，我曾经——",4);
	} else if (status == 7) { 
	    qm.sendNextPrevS("我们不会把时间花在做人类的梦上。\r\n\r\n我不知道孩子们会如此执着。他们一定是开始秘密排练了。",4,1500002);
	} else if (status == 8) { 
	    qm.sendNextPrevS("他们一定是去了什么危险的地方来躲开你……比如森林里……",4);
	} else if (status == 9) { 
	    qm.sendNextPrevS("如果……如果孩子们出了什么事，我，我无法……",4,1500002);
	} else if (status == 10) { 
	    qm.sendNextPrevS("冷静下来，卡莱恩。我们需要保持沉着。",4,1500001);
	} else if (status == 11) { 
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("我应该向你道歉。我们完全误解了你的来意。我希望你能继续帮助我们寻找孩子们。");
	} else if (status == 1) {
	    qm.sendNext("我需要想一想如何找到失踪的学生。请给我一些时间。");
		qm.forceCompleteQuest();
		qm.gainExp(1600);
	    qm.dispose();		
	}
  }
}