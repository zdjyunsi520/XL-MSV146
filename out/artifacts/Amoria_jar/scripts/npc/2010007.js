/* guild creation npc */
var status = -1;
var sel;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("你想做什么？\r\n#b#L0#创建公会#l\r\n#L1#解散公会#l\r\n#L2#扩大公会容量（上限100）#l\r\n#L3#扩大公会容量（上限200）#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GID") > 0) {
		cm.sendOk("你已经在一个公会中，无法创建新的公会。");
		cm.dispose();
	    } else
		cm.sendYesNo("创建公会需要#b50万金币#k，你确定要继续吗？");
	} else if (selection == 1) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("只有公会会长才能解散公会。");
		cm.dispose();
	    } else
		cm.sendYesNo("你确定要解散你的公会吗？解散后你将无法恢复它，所有的GP也将消失。");
	} else if (selection == 2) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("只有公会会长才能扩大公会容量。");
		cm.dispose();
	    } else
		cm.sendYesNo("扩大公会容量#b5人#k需要#b50万金币#k，你确定要继续吗？");
	} else if (selection == 3) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("只有公会会长才能扩大公会容量。");
		cm.dispose();
	    } else
		cm.sendYesNo("扩大公会容量#b5人#k需要#b25,000 GP#k，你确定要继续吗？");
	}
    } else if (status == 2) {
	if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
	    cm.genericGuildMessage(1);
	    cm.dispose();
	} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.disbandGuild();
	    cm.dispose();
	} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(false);
	    cm.dispose();
	} else if (sel == 3 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(true);
	    cm.dispose();
	}
    }
}