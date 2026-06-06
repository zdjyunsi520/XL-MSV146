var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 6) {
	    qm.sendNext("我知道要超越你的教官需要惊人的力量和意志，但你不能让自己就此沉沦下去。你必须向更远大的目标前进！你必须竭尽全力去拥抱你的英雄本色！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("你的能力真的开始成形了。我很惊讶像我这样的老头子居然能帮到你。一想到能帮上你的忙我就高兴得想哭。*抽泣抽泣*");
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你根本没有和他训练多久……他怎么就哭了呢？)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("好了，这是第三阶段也是最后的训练阶段。你最后的对手是……#r#o9300343#s#k！你了解#o1210100#s吗？");
    } else if (status == 3) {
	qm.sendNextPrevS('Well, a little bit...', 2);
    } else if (status == 4) {
	qm.sendNextPrev("它们是天生的战士！它们生来就有着贪婪的食欲。它们所到之处会吞食一切可见的食物。很可怕，不是吗？");
    } else if (status == 5) {
	qm.sendNextPrevS("#b(那真的是真的吗？)#k", 2);
    } else if (status == 6) {
	qm.askAcceptDecline("好的，现在……#b再次进入训练中心#k，打败#r30#k只#o9300343#s，向我展示你的实力！你必须倾尽全力才能击败它们！上吧，上吧，上吧！超越我吧！");
    } else if (status == 7) {
	qm.forceStartQuest();
	qm.sendOk("现在去对付那些可怕的#o9300343#s吧！");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("你舍不得离开你的教官吗？*抽泣抽泣* 我很感动，但你不能停在这里。你注定要去追求更伟大的目标！");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("啊，你打败了所有30只#o9300343#s回来了。我就知道你有这个能力……虽然你没有记忆，能力也很少，但我能看出你与众不同！怎么做到的？因为你有战戟，很明显嘛！");
    } else if (status == 1) {
	qm.sendNextPrevS("#b(他是在开玩笑吗？)#k", 2);
    } else if (status == 2) {
	qm.sendYesNo("我已经没有什么可以教你的了，因为你已经超越了我的技能水平。去吧！不要回头！这个老头很高兴能担任你的教官。");
    } else if (status == 3) {
	if (qm.getQuestStatus(21703) == 1) {
	    qm.forceCompleteQuest();
	    qm.teachSkill(21000000, qm.getPlayer().getSkillLevel(21000000), 10);   // Combo Ability Skill
	    qm.gainExp(2800);
	}
	qm.sendNextS("(你想起了#b连击能力#k技能！你起初对训练有些怀疑，因为这位老人患有老年痴呆症，但天哪，效果真不错！)", 2);
	qm.AranTutInstructionalBubble("Effect/BasicEff.img/AranGetSkill");
    } else if (status == 4) {
	qm.sendPrev("现在去向#p1201000#报告吧。我相信她看到你的进步一定会非常高兴！");
	qm.dispose();
    }
}