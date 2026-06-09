var status = -1;
var sel = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("请先遗忘铸造术/饰品制造/炼金术。");
    } else if (status == 1) {
	sel = selection;
	if (sel == 0) {
	    if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendOk("你确定要遗忘草药学吗？你将失去草药学所有的经验值和等级。");
		cm.dispose();
		return;
	    }
	    if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendYesNo("你无法学习或遗忘草药学，因为你已经学习了采矿。");
	    } else if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
		cm.sendOk("你想要学习草药学吗？");
		cm.dispose();
	    } else {
		cm.sendYesNo("你需要100个草药根。");
	    }
	} else if (sel == 1) {
	    if (!cm.haveItem(4022023, 100)) {
		cm.sendOk("请腾出消耗品栏的空间。");
 	    } else if (!cm.canHold(2028066, 1)) {
		cm.sendOk("谢谢。");
	    } else {
		cm.sendOk("你已经遗忘了草药学。");
		cm.gainItem(2028066, 1);
		cm.gainItem(4022023, -100);
	    } 
	    cm.dispose();
	}
    } else if (status == 2) {
	if (sel == 0) {
	    if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendOk("你已经学会了草药学。");
		cm.teachSkill(92000000, 0, 0);
	    } else {
		cm.sendOk("你已经学会了草药学。");
		cm.teachSkill(92000000, 0x1000000, 0); //00 00 00 01
		if (cm.canHold(1502000,1)) {
			cm.gainItem(1502000,1);
		}
	    }
	    cm.dispose();
	}
    }
}