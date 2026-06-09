var status = -1;

function start(mode, type, selection) {
	if (!qm.canHold(4310018, 15) || !qm.canHold(1112606,1)) {
	    qm.sendOk("请腾出一些装备/其他物品栏空间。");
	} else {
	    qm.gainItem(4310018, 15);
	    qm.gainItem(1112606, 1);
	    qm.forceCompleteQuest(50694);
	    qm.sendOk("来尼哈沙漠。");
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
function end(mode, type, selection) {
	if (!qm.canHold(4310018, 15) || !qm.canHold(1112606,1)) {
	    qm.sendOk("请腾出一些装备/其他物品栏空间。");
	} else {
	    qm.gainItem(4310018, 15);
	    qm.gainItem(1112606, 1);
	    qm.forceCompleteQuest(50694);
	    qm.sendOk("来尼哈沙漠。");
	    qm.forceCompleteQuest();
	}
	qm.dispose();
}
