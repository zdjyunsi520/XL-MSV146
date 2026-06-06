var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendYesNo("首先，我们得搞清楚是什么引起了那场地震！根据我在#b#m600000000##k的那些书呆子朋友的说法，这不是自然现象。我觉得你应该去调查一下。");
    } else if (status == 1) {
	qm.sendNext("拿着这个#v2430680# #b#z2430680##k。制造它的人说你"可以激活它来找到地震的震中"，不管那是什么意思。所以，去激活它吧。");
    } else if (status == 2) {
	qm.forceStartQuest(28746);
	qm.dispose();
    }
}

