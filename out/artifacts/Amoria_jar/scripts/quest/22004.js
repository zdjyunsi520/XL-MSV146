var status = -1;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
	    if(type == 1 && mode == 0)
		    status -= 2;
		else{
			qm.sendNext("嗯，#p1013101#一定会立刻就去做的。");
			qm.dispose();
			return;
		}
	}
	if (status == 0)
		qm.sendNext("农场的#o1210100#s这几天行为很奇怪。它们无缘无故地变得愤怒和暴躁。我有些担心所以今天一大早就来到农场，果然，看起来有几只#o1210100#s跑出了栅栏。");
	else if (status == 1)
		qm.sendAcceptDecline("在我去找那些#o1210100#s之前，我应该先修补破损的栅栏。幸运的是，损坏不算太严重。我只需要一些#t4032498#就能修好它。你能给我拿#b3#k个#b#t4032498##k来吗，埃文？");
	else if (status == 2){
		qm.forceStartQuest();
		qm.sendNext("哦，你真是太好了。你可以从附近的#r#o0130100#s#k那里找到#b#t4032498##k。它们不算太强，但遇到危险时记得使用你的技能和道具。");
	}else if (status == 3){
		qm.evanTutorial("UI/tutorial/evan/6/0", 1);
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
			qm.sendNext("啊，你把所有的#t4032498#都带来了吗？真是我的好孩子！我该给你什么奖励呢……让我看看……哦，对了！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010097# 1个 #t3010097# \r\n#i2022621# 15个 #t2022621# \r\n#i2022622# 15个 #t2022622# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 210 经验");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4032498, -3);
		qm.gainItem(3010097, 1);
		qm.gainItem(2022621, 15);
		qm.gainItem(2022622, 15);
		qm.gainExp(210);
		qm.sendNextPrev("来，我用修栅栏剩下的木板做了一把新椅子。看起来可能不起眼，但很结实。我相信它会派上用场的。");
		}
	if(status == 2){
		qm.evanTutorial("UI/tutorial/evan/7/0", 1);
		qm.dispose();
	}
}