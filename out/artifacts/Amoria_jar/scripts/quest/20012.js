/*
	NPC Name: 		Kinu
	Description: 		Quest - Cygnus tutorial helper
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("普通攻击是基础技能，使用简单。但请记住，真正的狩猎是靠你的技能来完成的。我建议你重新考虑。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("我一直在等你，#h0#。我的名字是#p1102006#，你是将要见到的第三个兄弟。那么，你已经学会了使用普通攻击，对吧？接下来你将学习你的#b技能#k，这在枫之谷世界中对你非常有帮助。");
    } else if (status == 1) {
	qm.sendNextPrev("你每次升级都会获得技能点，这意味着你可能已经攒了一些。按#bK键#k查看你的技能。把技能点投资到你想要加强的技能上，别忘了#b把技能放到快捷栏方便使用#k。");
    } else if (status == 2) {
	qm.askAcceptDecline("趁你还没忘记来练习一下。这个区域有很多#o100121#。你何不用你的#b三只蜗牛#b技能狩猎#r3只#o100121##k并带给我1个#b#t4000483##k作为证明？我在这里等你。");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.summonMsg(8);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("你成功击败了#o100121#并带给了我#t4000483#。太厉害了！#b你每升一级就会获得3个技能点，这是在你正式成为骑士之后的事。继续沿着箭头向左走，你会见到#b#p1102007##k，他将指导你完成下一步。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 40 经验值");
    } else if (status == 1) {
	qm.gainItem(4000483, -1);
	qm.forceCompleteQuest();
	qm.gainExp(40);
	qm.dispose();
    }
}