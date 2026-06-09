var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendNext("我确定它在你的旅途中会派上用场的。请别拒绝我的心意。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendSimple("啊，你就是英雄。我一直渴望见到你。\r\n#b#L0#（看起来有点害羞...）#l");
    } else if (status == 1) {
	qm.askAcceptDecline("我有一件一直想送给你的礼物...我知道你很忙，尤其你现在正要前往镇上，但你能接受我的礼物吗？");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.sendNextS("礼物的部件已经装在附近的箱子里了。抱歉麻烦你，但你能打破箱子给我带来一个#b#t4032309##k和一些#b#t4032310##k吗？我马上为你组装。", 1);
    } else if (status == 3) {
	qm.summonMsg(18);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("什么？你不要药水？");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("啊，你把所有部件都带来了。给我几秒钟来组装...这样...那样...然后...\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 经验值");
    } else if (status == 1) {
	if (qm.getQuestStatus(21013) == 1) {
	    qm.gainItem(3010062, 1);
	    qm.gainExp(95);
	    qm.forceCompleteQuest();
	}
	qm.sendNextPrevS("来，一把完全组装好的椅子，专门给你的！我一直想送你一把椅子作为礼物，因为我知道英雄偶尔也需要好好休息。嘻嘻。", 1);
    } else if (status == 2) {
	qm.sendNextPrevS("英雄不是无敌的。英雄也是人。我确定你会面临挑战，有时甚至会跌倒。但你是英雄，因为你具备克服任何障碍的能力。", 1);
    } else if (status == 3) {
	qm.summonMsg(19);
	qm.dispose();
    }
}