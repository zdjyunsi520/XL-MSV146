var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("训练怎么样？企鹅老师#p1202006#喜欢夸大其词，而且我知道他有老年痴呆症，让我很担心，但我相信他帮到了你。他研究英雄的技能已经很长时间了。", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告诉她你成功地想起了连击能力技能。)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("太好了！不过说实话，我觉得这与其说是#p1202006#训练方法的功劳，不如说是你的身体记住了旧有能力的缘故。#b我相信随着你继续训练，你的身体会记住更多技能#k！  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 500 经验");
    } else if (status == 3) {
	qm.forceCompleteQuest();
	qm.gainExp(500);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}