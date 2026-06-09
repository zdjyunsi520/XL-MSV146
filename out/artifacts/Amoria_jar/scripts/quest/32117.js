/* Dawnveil
    [Ellinel Fairy Academy] Graduate Search
	Headmistress Ivana
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("你认识魔法森林的阿尔温或罗温吗？她们是艾丽涅精灵学院的毕业生。她们可能知道一些老师们不知道的地方。\r\n\r\n #b#e（如果你接受，将被传送到魔法森林。）");	
	} else if (status == 1) { 
	    qm.sendNext("请去魔法森林找精灵阿尔温");
	} else if (status == 2) { 
		qm.warp(101000000,0);
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
	    qm.sendNext("你想要什么？我很忙……");
	} else if (status == 1) {
	    qm.sendNextPrevS("（你告诉阿尔温发生了什么事。）",2);
	} else if (status == 2) {
	    qm.sendNextPrev("失踪的学生？听起来很危险……在艾丽涅失踪可不是什么好事。");
	} else if (status == 3) {
	    qm.forceCompleteQuest();
		qm.gainExp(1900);
	    qm.dispose();		
	}
  }
}