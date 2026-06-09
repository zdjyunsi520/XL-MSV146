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
	cm.sendSimple("你确定要遗忘铸造术吗？你将失去铸造术所有的经验值和等级。");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
		cm.sendYesNo("你无法学习或遗忘铸造术，因为你已经学习了饰品制造或炼金术，或者你还没有学习采矿。");
	    } else if (cm.getPlayer().getProfessionLevel(92030000) < 0 || cm.getPlayer().getProfessionLevel(92040000) < 0 || cm.getPlayer().getProfessionLevel(92010000) <= 0) {
		cm.sendOk("你想要学习铸造术吗？");
		cm.dispose();
	    } else {
		cm.sendYesNo("你已经遗忘了铸造术。");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92020000) > 0) {
		cm.sendOk("你已经学会了铸造术。");
		cm.teachSkill(92020000, 0, 0);
	    } else {
		cm.sendOk("你已经学会了铸造术。");
		cm.teachSkill(92020000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}