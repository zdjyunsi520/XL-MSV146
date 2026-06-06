/*
 * Cygnus 3rd Job advancement - Wind Breaker
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0 && status == 1) {
	qm.sendNext("你还没有准备好。");
	qm.dispose();
	return;
    } else if (mode == 0) {
	status--;
    } else {
	status++;
    }

    if (status == 0) {
	qm.sendNext("你从变形者那里带回来的宝石是神鸟的眼泪。它是神鸟力量的结晶。如果黑魔法师得到了它，那对我们所有人来说都意味着灾难。");
    } else if (status == 1) {
	qm.sendYesNo("为表彰你阻止了一场潜在的严重灾难，女神授予了你一个新的称号。你准备好接受了吗？");
    } else if (status == 2) {
	if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 70) * 3) {
	    qm.sendNext("你身上还有太多的#bSP#k。你不能就这样获得新称号。我强烈建议你把更多的SP用在一级和二级技能上。");
	} else {
	    if (qm.canHold(1142068)) {
		qm.gainItem(1142068, 1);
		qm.changeJob(1311);
		qm.sendOk("#h0#，从这一刻起，你现在是骑士军士了。从这一刻起，你将以符合你新称号——骑士团骑士军士的尊严和尊重来行事。愿你的荣耀永远如此闪耀。");
	    } else {
		qm.sendOk("请清理你的背包空间。");
	    }
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
}