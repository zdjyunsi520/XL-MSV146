/*
	NPC Name: 		Cygnus
	Description: 		Quest - Encounter with the Young Queen
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("嗯，没什么好担心的。对你这个等级的人来说轻而易举。鼓起勇气，准备好后告诉我。");
	    qm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("嗯？是#p1101002#派你来的？你一定是最近加入骑士团的新人。欢迎，很高兴认识你！我的名字是#p1102000#。我是训练教官，负责训练像你这样的初心者。当然，如你所见，我不是人类。");
    } else if (status == 1) {
	qm.sendNextPrev("我们叫做皮尤族。你见过一直陪在女皇身边的#p1101001#吧？皮尤族和#p1101001#属于同一家族，但我们属于不同的类型。当然，你没见过我们，因为我们只生活在埃雷布。你会很快习惯皮尤族的。");
    } else if (status == 2) {
	qm.sendNextPrev("哦，你知道埃雷布没有怪物吗？一丝邪恶都不敢进入埃雷布。但别担心。你可以用#p1101001#创造的幻象怪物——米米斯来训练。");
    } else if (status == 3) {
	qm.askAcceptDecline("你看起来准备好了！看看你已经取得的成就，我觉得你应该直接去狩猎更高级的米米斯。去#m130010100#狩猎#b15只#r#o100122##k怎么样？从左边的传送口前往#b训练森林II#k。");
    } else if (status == 4) {
	qm.summonMsg(12);
	qm.forceStartQuest(20020);
	qm.forceCompleteQuest(20100);
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
}