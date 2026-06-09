// Puen edited by Desc


var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
	if(type == 1 && mode == 0) {
		qm.sendOk("啊，好的。我理解。英雄们很忙。*抽鼻子...*不过如果你有空的话...");
		qm.dispose();
		return;
 	}else{
		qm.dispose();
		return;
	}
    }

    if (status == 0) 
	qm.sendNext("等等，你是...不会吧...你就是#p1201000#一直在说的那个英雄？！#p1201000#！别光点头...告诉我！这就是你一直在等的英雄吗？！ ")		
    else if (status == 1) {
	qm.sendNextPrev("   #i4001171#");
    } else if (status == 2) {
	qm.sendNextPrev("对不起。我只是太激动了...*抽鼻子抽鼻子* 天哪，我都开始流泪了。你一定很高兴，#p1201000#。");
    } else if (status == 3) {
	qm.sendAcceptDecline("等等...你没有携带任何武器。据我所知，每位英雄都有一把特殊武器。哦，你一定是在与黑魔法师的战斗中丢失了它。");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOk("我的弟弟#b普尔#k就在街那边，他一直渴望见到你！我知道你很忙，但能不能顺便去和普尔打个招呼？拜托了...");
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 4) {
	    qm.sendNext("*抽鼻子抽鼻子* 这把剑不是足够好吗，至少暂时用用？我会很荣幸的...");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	if (qm.getQuestStatus(21011) == 0) {
	    qm.forceStartQuest();
	    qm.dispose();
	    return;
	}
	qm.sendNext("等等，你是...不会吧...你就是#p1201000#一直在说的那个英雄？！#p1201000#！别光点头...告诉我！这就是你一直在等的英雄吗？！");
    } else if (status == 1) {
	qm.sendNextPrev("   #i4001171#");
    } else if (status == 2) {
	qm.sendNextPrev("对不起。我只是太激动了...*抽鼻子抽鼻子* 天哪，我都开始流泪了。你一定很高兴，#p1201000#。");
    } else if (status == 3) {
	qm.sendNextPrev("等等...你没有携带任何武器。据我所知，每位英雄都有一把特殊武器。哦，你一定是在与黑魔法师的战斗中丢失了它。");
    } else if (status == 4) {
	qm.sendYesNo("这把剑不够好来替代你的武器，但#b暂时先用这把剑吧#k。这是送给你的礼物。英雄可不能空手到处走。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1302000# 1 #t1302000# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 经验值");
    } else if (status == 5) {
	if (qm.getQuestStatus(21011) == 1) {
	    qm.gainItem(1302000, 1);
	    qm.gainExp(35);
	}
	qm.forceCompleteQuest();
	qm.sendNextPrevS("#b(你的技能根本算不上英雄级别的...但是一把剑？你这辈子有没有拿过剑？你记不起来了...你甚至不知道怎么装备它？)#k", 3);
    } else if (status == 6) {
	qm.summonMsg(16); // How to equip shiet
	qm.dispose();
    }
}