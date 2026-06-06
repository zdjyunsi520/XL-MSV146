/** Author: nejevoli
	NPC Name: 		NimaKin
	Map(s): 		Victoria Road : Ellinia (180000000)
	Description: 		Maxes out your stats and able to modify your equipment stats
*/
importPackage(java.lang);

var status = 0;
var slot = Array();
var stats = Array("Strength", "Dexterity", "Intellect", "Luck", "HP", "MP", "魔法攻击", "物理防御", "魔法防御", "黄金锤", "Accuracy", "Avoidability", "Hands", "Speed", "Jump", "Slots", "已用卷轴位", "潜能属性1", "Enhancements", "潜能属性2", "潜能属性3", "潜能属性4", "潜能属性5", "你想让我做什么？#b\r\n#L0#属性最大化！#l\r\n#L1#技能最大化！#l\r\n#L2#修改装备属性！#l\r\n#L3#查看潜能数值#l\r\n#L4#将AP/SP归零#l\r\n#L5#清除技能#l\r\n#L6#按职业满技能#l\r\n#L7#清除我的属性！#k", "Owner");
var selected;
var statsSel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	if (cm.getPlayerStat("ADMIN") == 1) {
		cm.sendSimple("你想让我做什么？#b\r\n#L0#属性最大化！#l\r\n#L1#技能最大化！#l\r\n#L4#将AP/SP归零#l\r\n#L7#清除我的属性！#k");
	} else if (cm.getPlayerStat("GM") == 1) {
		cm.sendSimple("我已经将你的属性最大化了。祝你在枫之谷冒险愉快！");
	} else {
	    cm.dispose();
	}
    } else if (status == 1) {
	if (selection == 0) {
	    if (cm.getPlayerStat("GM") == 1) {
		cm.maxStats();
		cm.sendOk("我已经清除了你的属性。祝你在枫之谷冒险愉快！");
	    }
	    cm.dispose();
	} else if (selection == 7) {
	    if (cm.getPlayerStat("GM") == 1) {
		cm.getPlayer().resetStats(4, 4, 4, 4);
		cm.sendOk("你想修改哪件装备？\r\n#b");
	    }
	    cm.dispose();
	} else if (selection == 1) {
	    //Beginner
	    if (cm.getPlayerStat("GM") == 1) {
		cm.maxAllSkills();
	    }
	    cm.dispose();
	} else if (selection == 2 && cm.getPlayerStat("ADMIN") == 1) {
	    var avail = "";
	    for (var i = -1; i > -199; i--) {
		if (cm.getInventory(-1).getItem(i) != null) {
		    avail += "#L" + Math.abs(i) + "##t" + cm.getInventory(-1).getItem(i).getItemId() + "##l\r\n";
		}
		slot.push(i);
	    }
	    cm.sendSimple("#L0#搜索潜能物品#l\r\n" + avail);
	} else if (selection == 3 && cm.getPlayerStat("ADMIN") == 1) {
		var eek = cm.getAllPotentialInfo();
		var avail = "#潜能ID";
		for (var ii = 0; ii < eek.size(); ii++) {
			avail += "#L" + eek.get(ii) + "你想了解什么？\r\n#b " + eek.get(ii) + "#l\r\n";
		}
		cm.sendSimple("你已决定修改你的 #b#t"+ avail);
		status = 9;
	} else if (selection == 4) {
		cm.getPlayer().resetAPSP();
		cm.dispose();
	} else if (selection == 5) {
		cm.clearSkills();
		cm.dispose();
	} else if (selection == 6) {
		cm.maxSkillsByJob();
		cm.dispose();
	} else {
		cm.dispose();
	}
    } else if (status == 2 && cm.getPlayerStat("ADMIN") == 1) {
	selected = selection - 1;
	var text = "";
	for (var i = 0; i < stats.length; i++) {
	    text += "#L" + i + "#" + stats[i] + "#l\r\n";
	}
	cm.sendSimple("##k。\r\n你想修改哪个属性？\r\n#b" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "你想将你的 #b#t" + text);
	} else if (status == 3 && cm.getPlayerStat("ADMIN") == 1) {
	statsSel = selection;
	if (selection == 24) {
		cm.sendGetText(" 设置为多少？" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + "你的 #b#t");
	} else {
		cm.sendGetNumber(" 设置为多少？" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + "你的 #b#t", 0, 0, 60004);
	}
    } else if (status == 4 && cm.getPlayerStat("ADMIN") == 1) {
	cm.changeStat(slot[selected], statsSel, selection);
	cm.sendOk(" 已被设置为" + cm.getInventory(-1).getItem(slot[selected]).getItemId() + "##k's " + stats[statsSel] + "你想搜索什么？(例如 STR %) " + selection + ".");
	cm.dispose();
	} else if (status == 10 && cm.getPlayerStat("ADMIN") == 1) {
		if (selection == 0) {
			cm.sendGetText("你想搜索什么？(例如 STR %)");
			return;
		}
		cm.sendSimple("#L3#" + cm.getPotentialInfo(selection) + "#l");
		status = 0;
	} else if (status == 11 && cm.getPlayerStat("ADMIN") == 1) {
		var eek = cm.getAllPotentialInfoSearch(cm.getText());
		for (var ii = 0; ii < eek.size(); ii++) {
			avail += "#L" + eek.get(ii) + "你想了解什么？\r\n#b " + eek.get(ii) + "#l\r\n";
		}
		cm.sendSimple("你已决定修改你的 #b#t"+ avail);
		status = 9;
	} else {
		cm.dispose();
    }
}