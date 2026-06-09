/*
	Pokedex
*/

var status = -1;
var sel = 0;
var byName = false;

function action(mode, type, selection) {
	var pokeEntries = cm.getAllPokedex();
	if (mode != 1) {
    		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			if (cm.getPlayer().getBattler(0) == null && cm.getPlayer().getBoxed().size() <= 0) {
				cm.sendOk("你没有怪物，因此图鉴中没有记录。");
				cm.safeDispose();
				return;
			}
			
			var selStr = "已发现：#r#e" + cm.getPlayer().getMonsterBook().getSeen() + "#n#k，已捕获：#b#e" + cm.getPlayer().getMonsterBook().getCaught() + "#n#k\r\n你想查看哪个条目？\r\n\r\n#b#L0#按名称搜索#l\r\n";
			for (var i = 0; i < pokeEntries.size(); i++) {
				selStr += "#L" + (i+1) + "##" + cm.getLeftPadded("" + (i + 1), '0', 3) + ": ";
				if (cm.getPlayer().getMonsterBook().get等级ByCard(pokeEntries.get(i).id) == 0) {
					selStr += "???";
				} else {
					selStr += "#o" + pokeEntries.get(i).id + "#";
					if (cm.getPlayer().getMonsterBook().get等级ByCard(pokeEntries.get(i).id) == 1) {
						selStr += "#r(Seen)#b";
					}
				}
				selStr += "#l\r\n";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (selection == 0) {
				byName = true;
				cm.sendGetText("请在此输入你的怪物名称。（不区分大小写）");
				return;
			}
			selection--;
			if (selection < 0 || selection >= pokeEntries.size()) {
				cm.dispose();
				return;
			}
			var theEntry = pokeEntries.get(selection);
			if (cm.getPlayer().getMonsterBook().get等级ByCard(theEntry.id) == 0) {
				cm.sendOk("#" + cm.getLeftPadded("" + (selection + 1), '0', 3) + " - 未知数据。");
				cm.safeDispose();
				return;
			}
			sel = selection;
			var info = "#e#" + cm.getLeftPadded("" + (selection + 1), '0', 3) + " - #o" + theEntry.id + "##n\r\n";
			info += "#fMob/" + cm.getLeftPadded(theEntry.id + "", '0', 7) + ".img/stand/0#\r\n";
			if (cm.getPlayer().getMonsterBook().get等级ByCard(theEntry.id) == 1) {
				info += "等级 ??\r\n";
				info += "HP ???\r\n";
				info += "EXP ???, 宝可梦EXP ???\r\n";
				info += "攻击：???，防御：??\r\n";
				info += "特攻：???，特防：??\r\n";
				info += "速度：??，回避：??，命中：???\r\n";
				info += "属性：???\r\n";
				info += "经验类型：???\r\n";
				info += "第一特性：???\r\n";
				info += "第二特性：???\r\n";
				info += "攻击招式：?\r\n";
				info += "前置进化：???\r\n";
				info += "进化：???\r\n";
				info += "出现地点：???\r\n";
				cm.sendOk(info);
				cm.safeDispose();
				return;
			}
			info += "等级 " + theEntry.dummyBattler.get等级() + "\r\n";
			info += "HP " + theEntry.dummyBattler.calcHP() + "\r\n";
			info += "EXP " + theEntry.dummyBattler.getStats().getExp() + "，宝可梦EXP " + theEntry.dummyBattler.getOurExp() + "\r\n";
			info += "攻击： " + theEntry.dummyBattler.getATK(0) +  "，防御： " + theEntry.dummyBattler.getDEF() + "%\r\n";
			info += "Sp.攻击： " + theEntry.dummyBattler.getSpATK(0) +  "，特防： " + theEntry.dummyBattler.getSpDEF() + "%\r\n";
			info += "速度： " + theEntry.dummyBattler.getSpeed() +  "，回避： " + theEntry.dummyBattler.getEVA() + "，命中： " + theEntry.dummyBattler.getACC() + "\r\n";
			info += "属性： " + theEntry.dummyBattler.getElementString() + "\r\n";
			info += "经验类型： " + theEntry.dummyBattler.getExpString() + "\r\n";
			info += "第一特性： " + theEntry.dummyBattler.getFamily().ability1 + " - " + theEntry.dummyBattler.getFamily().ability1.desc + "\r\n";
			info += "第二特性： " + theEntry.dummyBattler.getFamily().ability2 + " - " + theEntry.dummyBattler.getFamily().ability2.desc + "\r\n";
			info += "攻击招式： " + (theEntry.dummyBattler.getStats().getMobAttacks().size() + 1) + "\r\n";
			info += "前置进化： " + (theEntry.pre.size() == 0 ? "None" : "");
			var pre = theEntry.getPre();
			for (var xx = 0; xx < pre.size(); xx++) {
				var pr = pre.get(xx);
				switch (cm.getPlayer().getMonsterBook().get等级ByCard(pr.getKey())) {
					case 0:
						info += "??? 通过 ???，";
						break;
					case 1:
						info += "#o" + pr.getKey() + "# 通过 ???。";
						break;
					case 2:
						info += "#o" + pr.getKey() + "#";
						if (pr.getValue() >= 1000000) {
							info += " 通过使用 #v" + pr.getValue() + "##z" + pr.getValue() + "#, ";
						} else {
							info += " 通过等级 " + pr.getValue() + ", ";
						}
						break;
				}
			}
			info += "\r\n进化： " + (theEntry.evo.size() == 0 ? "None" : "");
			var evo = theEntry.getEvo();
			for (var xx = 0; xx < evo.size(); xx++) {
				var pr = evo.get(xx);
				switch (cm.getPlayer().getMonsterBook().get等级ByCard(pr.getKey())) {
					case 0:
						info += "??? 通过 ???， ";
						break;
					case 1:
						info += "#o" + pr.getKey() + "# 通过 ???， ";
						break;
					case 2:
						info += "#o" + pr.getKey() + "#";
						if (pr.getValue() >= 1000000) {
							info += " 通过使用 #v" + pr.getValue() + "##z" + pr.getValue() + "#, ";
						} else {
							info += " 通过等级 " + pr.getValue() + ", ";
						}
						break;
				}
			}
			info += "\r\n出现地点： ";
			if (theEntry.maps == null || theEntry.maps.size() <= 0) {
				info += "无地点";
			} else {
				for (var xx = 0; xx < theEntry.maps.size(); xx++) {
					var pr = theEntry.maps.get(xx);
					info += "#m" + pr.left + "# - " + (pr.right / 100) + "% 概率\r\n";
				}
			}
			info += "\r\n#b\r\n";
			info += "#L0#查看此怪物的掉落物。#l\r\n";
			cm.sendSimple(info);
		} else if (status == 2) {
			if (byName && cm.getText() != null && cm.getText().length() > 0) {
				var found = false;
				var selStr = "已发现：#r#e" + cm.getPlayer().getMonsterBook().getSeen() + "#n#k，已捕获：#b#e" + cm.getPlayer().getMonsterBook().getCaught() + "#n#k\r\n你想查看哪个条目？\r\n\r\n#b";
				for (var i = 0; i < pokeEntries.size(); i++) {
					if (pokeEntries.get(i).dummyBattler.getName().toLowerCase().contains(cm.getText().toLowerCase())) {
						found = true;
						selStr += "#L" + (i+1) + "##" + cm.getLeftPadded("" + (i + 1), '0', 3) + ": ";
						if (cm.getPlayer().getMonsterBook().get等级ByCard(pokeEntries.get(i).id) == 0) {
							selStr += "???";
						} else {
							selStr += "#o" + pokeEntries.get(i).id + "#";
							if (cm.getPlayer().getMonsterBook().get等级ByCard(pokeEntries.get(i).id) == 1) {
								selStr += "#r(Seen)#b";
							}
						}
						selStr += "#l\r\n";
					}
				}
				if (found) {
					cm.sendSimple(selStr);
					status = 0;
				} else {
					cm.sendNext("没有找到匹配的条目。");
					status = -1;
				}
				byName = false;
				return;
			}
			cm.sendNext(cm.checkDrop(pokeEntries.get(sel).id));
			cm.dispose();
		}
	}
}