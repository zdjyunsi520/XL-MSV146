/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("那么，#b#h0##k。你是这附近的人吗？");
	} else if (status == 1) {
	  qm.sendNextPrevS("是啊，我和奶奶住在一起。就在那边。",14);
	} else if  (status == 2)  {
	  qm.sendAcceptDecline("太好了！你回去在那里等着，我去#b召集我的朋友们#k。听起来不错吧？");
	} else if  (status == 3)  {
	  qm.sendNextS("好的，小猫咪。我也会给你热一条鱼的！",14);
	} else if  (status == 4)  {
	  qm.sendNextPrev("我的名字叫#b阿比#k，不是小猫咪！把鱼留给#b福特#k吧。我是素食主义者。");
	} else if  (status == 5)  {
	  qm.sendNextPrevS("#b福特#k？他是动物冠军团的另一个成员吗？",14);
	} else if  (status == 6)  {
	  qm.sendNextPrev("没错！你会喜欢#b福特#k的。他真的很强壮！");
	} else if  (status == 7)  {
	  qm.forceStartQuest();
	  qm.gainExp(58);
	  qm.gainAp(5);
	  qm.dispose();
	}
}