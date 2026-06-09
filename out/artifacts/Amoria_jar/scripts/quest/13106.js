/* Dawnveil
    [Maple Castle] The Hero's Gauntlet
	Angelic Buster
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("过来！嘿，这不是很棒吗？哦，对了，我还没告诉你这是什么。好的，欢迎来到#b英雄试炼场#k！\r\n...等等。等等等等等。你...不是来参加英雄试炼场的？你想要#b枫之城堡的线索#k？哦...是...那个...哈\r\n哈...",1);
	} else if (status == 1) {
	    qm.sendAcceptDecline("你确确确确确定你真真真的需要那个吗？\r\n...哦，奈因哈特等不及了，是吗...\r\n嗯，我正在为那些又酷又棒的人运营这个超级酷、绝对厉害的挑战。不如你在我...给那条线索做最后润色的时候...试试#b英雄试炼场#k？");
	} else if (status == 2) {
	    qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(3994657,1);
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
	    qm.sendNextS("我就知道你会玩得很开心！你可以随时再来尝试。你现在是我的伙伴了，所以我让你插队，嘻嘻！哦，你需要\r#i3994657##b#t3994657##k对吧？\n嗯，我已经弄好了！来，看看这个...",1);
	} else if (status == 1) {
	    qm.sendNextPrevS("咳咳。\r\n"#b黑魔法师的力量不断增强。学校一片混乱。枫之城堡可能比我们预想的更早沦陷。我们不能让上千年的魔法知识落入这些恶人之手。"", 1);
	} else if (status == 2) {
	    qm.sendNextPrevS("挺让人郁闷的，对吧？其余的页面都碎掉了。#b枫之城堡里确实隐藏着一种秘密魔法力量#k。它一定很厉害，因为连#b黑魔法师#k那个大坏蛋都盯上了它。 ",1);	
	} else if (status == 3) {
	    qm.sendPrevS("我敢打赌黑魔法师就是#b枫之城堡#k关闭的原因。所以，就是这样！该去告诉#r奈因哈特#k这一切了，对吧？我完成了我的部分。终于自由了！",1);
	    qm.dispose();		
	}
  }
}