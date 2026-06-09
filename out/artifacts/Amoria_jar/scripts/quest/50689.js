var status = -1;

function start(mode, type, selection) {
	if (!qm.canHold(4310018, 13) || !qm.canHold(1112605,1)) {
	    qm.sendOk("请腾出一些装备/其他物品栏空间。");
	} else {
	    qm.gainItem(4310018, 13);
	    qm.gainItem(1112605, 1);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (!qm.canHold(4310018, 13) || !qm.canHold(1112605,1)) {
	    qm.sendOk("请腾出一些装备/其他物品栏空间。");
	} else {
	    qm.gainItem(4310018, 13);
	    qm.gainItem(1112605, 1);
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
