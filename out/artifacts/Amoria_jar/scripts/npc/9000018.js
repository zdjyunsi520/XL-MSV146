/*
	Maple Administrator - Displays Battler Info
*/

var status = -1;
var sel = 0;
var sec = 0;
var defaul = new Array(1210102, 1210100, 210100);

function action(mode, type, selection) {
	var battlers = cm.getPlayer().getBattlers();
	if (mode != 1) {
    		cm.dispose();
	} else {
		status++;
		if (status == 0) {
			if (battlers[0] == null) {
				if (!cm.getPlayer().isGM()) {
					cm.sendOk("Patience...");
					cm.dispose();
				} else if (cm.getPlayer().get等级() < 30) {
					cm.sendOk("耐心。等你到30级再来吧...");
					cm.dispose();
				} else if (cm.getPlayer().getBoxed().size() > 0) {
					cm.sendOk("你盒子里有一只怪物，请先把它取出来。");
					cm.dispose();
				} else {
					var selStr = "你想要什么？\r\n\r\n#b";
					for (var i = 0; i < defaul.length; i++) {
						if (defaul[i] != null) {
							selStr += "#L" + i + "##o" + defaul[i] + "##l\r\n";
						}
					}
					cm.sendSimple(selStr);
				}
				return;
			}
			var selStr = "总胜场： " + cm.getPlayer().getTotalWins() + "，总败场： " + cm.getPlayer().getTotalLosses() + "，当前连胜： " + cm.getCData("pokemon") + "\r\n查看哪个的属性？\r\n\r\n#b";
			for (var i = 0; i < battlers.length; i++) {
				if (battlers[i] != null) {
					try {
						selStr += "#L" + i + "#" + battlers[i].getName() + " (#o" + battlers[i].getMonsterId() + "#) 等级 " + battlers[i].get等级() + " " + battlers[i].getGenderString() + "，HP #B" + battlers[i].getHPPercent() + "# - " + battlers[i].getCurrentHP() + "/" + battlers[i].calcHP() + "，状态： " + battlers[i].getStatusString() + "#l\r\n";
					} catch (e) {
						cm.sendOk("错误： " + e);
						cm.dispose();
						cm.outputFileError(e);
						return;
					}
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			if (battlers[0] == null) {	
				cm.getPlayer().makeBattler(0, defaul[selection]);
				cm.sendOk("你已获得第一只宠物。你可以前往网咖训练或获取其他宠物。你也可以使用 @challenge <玩家名> 来挑战某人进行对战。");
				cm.dispose();
				return;
			}
			if (selection < 0 || selection >= battlers.length || battlers[selection] == null) {
				cm.dispose();
				return;
			}
			sel = selection;
			var info = "#e" + battlers[selection].getName() + "#n (#o" + battlers[selection].getMonsterId() + "#)\r\n";
			info += "等级 " + battlers[selection].get等级() + " " + battlers[selection].getGenderString() + "\r\n";
			info += "经验值 " + battlers[selection].getExp() + "/" + battlers[selection].getNextExp() + "\r\n";
			info += "HP #B" + battlers[selection].getHPPercent() + "# - " + battlers[selection].getCurrentHP() + "/" + battlers[selection].calcHP() + "\r\n";
			info += "攻击力： " + battlers[selection].getATK(0) +  "，防御力： " + battlers[selection].getDEF() + "%\r\n";
			info += "Sp.攻击力： " + battlers[selection].getSpATK(0) +  "，特防： " + battlers[selection].getSpDEF() + "%\r\n";
			info += "速度： " + battlers[selection].getSpeed() +  "，闪避： " + battlers[selection].getEVA() + "，命中： " + battlers[selection].getACC() + "\r\n";
			info += "状态： " + battlers[selection].getStatusString() + "\r\n";
			info += "属性： " + battlers[selection].getElementString() + "\r\n";
			info += "性格： " + battlers[selection].getNatureString() + "\r\n";
			info += "物品： " + battlers[selection].getItemString() + "\r\n";
			info += "特性： " + battlers[selection].getAbilityString() + "\r\n";
			info += "\r\n#b";
			if (cm.getPlayer().getBattle() != null) {
				info += "#L2#切换到这只怪物！#l\r\n";
			} else {
				info += "#L0#如何进化？#l\r\n";
				info += "#L1#释放这只怪物。#l\r\n";
				info += "#L3#重命名这只怪物。#l\r\n";
				info += "#L4#更改这只怪物的顺序。#l\r\n";
				info += "#L5#将这只怪物收起来。#l\r\n";
				info += "#L6#给予/取回物品。#l\r\n";
				info += "#L7#评价这只怪物。#l\r\n";
			}
			cm.sendSimple(info);
		} else if (status == 2) {
			sec = selection;
			if (selection == 0) { //how i evolve
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				var evo = battlers[sel].getEvolutionType().value;
				if (evo == 0) {
					cm.sendNext("恭喜，你已经达到了进化的最终阶段。");
					cm.dispose();
				} else if (evo == 1) {
					cm.sendNext("你还有很长的路要走，你需要再提升一些等级。");
					cm.dispose();
				} else if (evo == 2) {
					var selStr = "你只能通过特定物品来进化。我可以帮你进化。让我看看...\r\n\r\n";
					if (cm.haveItem(battlers[sel].getFamily().evoItem.id)) {
						cm.sendSimple(selStr + "#L0##v" + battlers[sel].getFamily().evoItem.id + "##z" + battlers[sel].getFamily().evoItem.id + "##l");
					} else {
						cm.sendNext(selStr + "你没有所需的进化物品。需要：#v" + battlers[sel].getFamily().evoItem.id + "##z" + battlers[sel].getFamily().evoItem.id + "#");
						cm.dispose();
					}
				}
				
			} else if (selection == 1) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendYesNo("你确定要释放怪物 " + battlers[sel].getName() + " (#o" + battlers[sel].getMonsterId() + "#)?");
			} else if (selection == 2) { //switch
				if (cm.getPlayer().getBattle() != null && !cm.getPlayer().getBattle().switchBattler(cm.getPlayer(), battlers[sel])) {
					cm.sendNext("你已经选择了一个操作。");
				}
				cm.dispose();
			} else if (selection == 3) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendGetText("请输入你的怪物的新名字。（最少2个字符，最多20个字符）");
			} else if (selection == 4) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				if (cm.getPlayer().countBattlers() <= 1) {
					cm.sendOk("你只有一只怪物。");
					cm.dispose();
					return;
				}
				var selStr = "要将 " + battlers[sel].getName() + "和哪只怪物交换？\r\n\r\n#b";
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null && i != sel) {
						selStr += "#L" + i + "#" + battlers[i].getName() + " (#o" + battlers[i].getMonsterId() + "#) 等级 " + battlers[i].get等级() + " " + battlers[i].getGenderString() + "，HP #B" + battlers[i].getHPPercent() + "# - " + battlers[i].getCurrentHP() + "/" + battlers[i].calcHP() + "，状态： " + battlers[i].getStatusString() + "#l\r\n";
					}
				}
				cm.sendSimple(selStr);
			} else if (selection == 5) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				if (cm.getPlayer().countBattlers() <= 1) {
					cm.sendOk("你只有一只怪物。");
					cm.dispose();
					return;
				}
				cm.getPlayer().getBoxed().add(battlers[sel]);
				for (var i = sel; i < battlers.length; i++) {
					cm.getPlayer().getBattlers()[i] = ((i + 1) == battlers.length ? null : cm.getPlayer().getBattlers()[i + 1]);
				}
				cm.getPlayer().changedBattler();
				cm.sendOk("怪物已被收起。");
			} else if (selection == 6) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				if (battlers[sel].getItem() != null) {
					if (cm.canHold(battlers[sel].getItem().id, 1)) {
						cm.gainItem(battlers[sel].getItem().id, 1);	
						cm.sendOk("你已取回了这只怪物身上的物品。");
						battlers[sel].setItem(0);
					} else {
						cm.sendOk("请腾出背包空间。");
					}
					cm.dispose();
					return;
				}
				var selStr = "你想给这只怪物哪个物品？#b\r\n";
				var hi = cm.getAllHoldItems();
				var pass = false;
				for (var i = 0; i < hi.length; i++) {
					if (cm.haveItem(hi[i].id, 1)) {
						pass = true;
						selStr += "#L" + i + "##i" + hi[i].id + "#" + hi[i].customName + "#l\r\n";
					}
				}
				if (!pass) {
					cm.sendNext("你没有携带物品。");
					cm.dispose();
				} else {
					cm.sendSimple(selStr);
				}
			} else if (selection == 7) {
				if (cm.getPlayer().getBattle() != null) {
					cm.dispose();	
					return;
				}
				cm.sendNext(battlers[sel].getIVString());
				cm.dispose();
			}
		} else if (status == 3) {
			if (sec == 0) {
				if (cm.haveItem(battlers[sel].getFamily().evoItem.id)) {
					cm.gainItem(battlers[sel].getFamily().evoItem.id, -1);
					battlers[sel].evolve(true, cm.getPlayer());
					cm.getPlayer().changedBattler();
					cm.playSound(false, "5th_Maple/gaga");
					cm.sendNext("你的怪物进化了！！！");
				}
			} else if (sec == 1) {
				if (cm.getPlayer().removeBattler(sel)) {
					cm.sendNext("它已被释放了！");
				} else {
					cm.sendOk("你不能释放最后一只怪物！");
				}
			} else if (sec == 3) {
				if (cm.getText().length() < 2 || cm.getText().length() > 20) {
					cm.sendOk(cm.getText() + " 无法接受。");
				} else {
					cm.getPlayer().changedBattler();
					battlers[sel].setName(cm.getText());
				}
			} else if (sec == 4) {
				if (battlers[selection] != null) {
					var dummy = cm.getPlayer().getBattlers()[selection];
					cm.getPlayer().getBattlers()[selection] = cm.getPlayer().getBattlers()[sel];
					cm.getPlayer().getBattlers()[sel] = dummy;
					cm.getPlayer().changedBattler();
				}	
			} else if (sec == 6) {
				var hi = cm.getAllHoldItems()[selection];
				if (cm.haveItem(hi.id, 1)) {
					cm.gainItem(hi.id, -1);
					battlers[sel].setItem(hi.id);
					cm.sendOk("物品已装备到怪物身上。");
				}
			}
			cm.dispose();
		}
	}
}