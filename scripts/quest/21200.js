var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("真的很紧急，如果你拒绝会后悔的。#b这与你的战锤有关，#k意味着它与你的过去有关。谁知道呢...也许这把战锤是重新唤醒你能力的关键...？");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("训练进展如何？哇，看你这样子，我能看出你的等级飙升了。太棒了...嗯，不管怎样，我知道你很忙，但你得回岛上一趟。");
    } else if (status == 1) {
	qm.forceStartQuest(21200, "3"); //??
	qm.forceCompleteQuest();
	qm.forceStartQuest(21202); //skip just in case
	qm.forceStartQuest(21203, "0");
	qm.sendOk("你在#b利恩#b保管的那把#b巨型战锤#k突然变得异常。根据书上的记载，战锤这样反应是在呼唤它的主人。#b也许它在呼唤你？#k？请回岛上看看到底怎么回事。");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 11) {
	    qm.sendNext("嘿，至少告诉我你试过了！");
	    qm.dispose();
	    return;
	} else if (status == 13) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090200, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("嗯嗯嗯嗯嗯嗯嗯嗯....", 2);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(巨型战锤在嗡嗡作响，但站在那里的男孩是谁？)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrevS("#b(我从没见过他。他看起来不像人类。)#k", 2);
    } else if (status == 3) {
	qm.sendNextPrev("嘿阿然！你还是听不到我吗？说真的，你听不到我吗？啊啊啊，好烦啊！");
    } else if (status == 4) {
	qm.sendNextPrevS("#b(哇，那是谁？听起来像是一个生气的男孩...)#k", 2);
    } else if (status == 5) {
	qm.sendNextPrev("说真的，我唯一的师傅结果被封在冰里几百年，抛弃了武器，现在这个"师傅"甚至听不到我说话？");
    } else if (status == 6) {
	qm.sendNextPrevS("你是谁？", 2);
    } else if (status == 7) {
	qm.sendNextPrev("阿然？你现在听到我了吗？是我，是我！我是你的武器#b玛哈战锤！#k！");
    } else if (status == 8) {
	qm.sendNextPrevS("#b(...玛哈？巨型战锤居然会说话？)#k", 2);
    } else if (status == 9) {
	qm.sendNextPrev("你为什么露出一副难以置信的表情？我知道你失去了所有记忆，但是...你也把我忘了吗？你怎么能这样对我？？");
    } else if (status == 10) {
	qm.sendNextPrevS("对不起，但说真的...我什么都不记得了。", 2);
    } else if (status == 11) {
	qm.sendYesNo("过了这么多年你只能说出这句话吗？对不起？你理解我独自一人待了几百年有多无聊吗？把记忆找回来如果你能做到的话。把你的记忆全部找回来！如果需要的话就把它们挖出来！");
    } else if (status == 12) {
	qm.sendNextS("#b(声称是玛哈巨型战锤的声音似乎相当烦躁。这段对话毫无进展。我最好先去跟利林谈谈。)#k", 2);
	qm.forceCompleteQuest();
	qm.forceStartQuest(21202); //skip just in case
	qm.forceStartQuest(21203, "0");
    } else if (status == 13) {
	qm.sendYesNo("你想跳过动画吗？即使你跳过场景，游戏体验也不会受到影响。");
    } else if (status == 14) {
	qm.dispose();
    }
}