var status = -1;

function start(mode, type, selection) {
	if (!qm.canHold(4310018, 19) || !qm.canHold(1112608,1)) {
	    qm.sendOk("请腾出一些装备/其他物品栏空间。");
	} else {
	    qm.gainItem(4310018, 19);
	    qm.gainItem(1112608, 1);
	    qm.forceStartQuest(50701);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (!qm.canHold(4310018, 19) || !qm.canHold(1112608,1)) {
	    qm.sendOk("请腾出一些装备/其他物品栏空间。");
	} else {
	    qm.gainItem(4310018, 19);
	    qm.gainItem(1112608, 1);
	    qm.forceStartQuest(50701);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
