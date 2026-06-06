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
		cm.sendOk("你确定要遗忘采矿吗？你将失去采矿所有的经验值和等级。");
		cm.dispose();
		return;
	    }
	    if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
		cm.sendYesNo("你无法学习或遗忘采矿，因为你已经学习了草药学。");
	    } else if (cm.getPlayer().getProfessionLevel(92000000) > 0) {
		cm.sendOk("你想要学习采矿吗？");
		cm.dispose();
	    } else {
		cm.sendYesNo("你需要100个矿石碎片。");
	    }
	} else if (sel == 1) {
	    if (!cm.haveItem(4011010, 100)) {
		cm.sendOk("请腾出消耗品栏的空间。");
 	    } else if (!cm.canHold(2028067, 1)) {
		cm.sendOk("谢谢。");
	    } else {
		cm.sendOk("你已经遗忘了采矿。");
		cm.gainItem(2028067, 1);
		cm.gainItem(4011010, -100);
	    } 
	    cm.dispose();
	}
    } else if (status == 2) {
	if (sel == 0) {
	    if (cm.getPlayer().getProfessionLevel(92010000) > 0) {
		cm.sendOk("你已经学会了采矿。");
		cm.teachSkill(92010000, 0, 0);
	    } else {
		cm.sendOk("你已经学会了采矿。");
		cm.teachSkill(92010000, 0x1000000, 0); //00 00 00 01
		if (cm.canHold(1512000,1)) {
			cm.gainItem(1512000,1);
		}
	    }
	    cm.dispose();
	}
    }
}