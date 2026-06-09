var status = -1;
var items;
var itemsp = Array(800, 500, 550, 2000, 800, 1000, 3000, 1000, 750, 1500);
var itemsu = Array(0, 2, 0, 0, 0, 0, 0, 0, 0, 0); // extra slots, not set.
var itemsq = Array(1, 1, 125, 1, 1, 1, 1, 1, 1, 1);
var itemse = Array(7, -1, -1, -1, -1, 30, 30, -1, -1, -1);
var extra_text = Array("2倍掉落", "棕色工作手套", "转蛋券", "紫色冲浪板", "白卷轴", "初级GM帽子（全属性+25）", "宠物吸物", "光环吊坠（永久）", "幸运日卷轴", "保护卷轴");
var acash = 40000;
var acashp = 500;
var sel = -1;
var itt = -1;
var previous_points;
var chairs;
var chairsp = Array(1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 800, 1000, 1000, 1000, 1500, 800, 800, 1200, 1000, 1000, 1500, 1000, 800, 800, 1000, 1000, 1200, 1200, 1500, 1000, 1000, 800, 1000, 1000, 1200, 1500);

var hairp = 1000;
var mhair;
var fhair;
var hairnew;

var keys = Array(16, 17, 18, 20, 21, 22, 36, 44, 45, 46, 47, 48);
var keynames = Array("Q", "W", "F", "T", "Y", "U", "J", "Z", "X", "C", "V", "B"); //just as reference
var skills;
var skillsnames = Array("Dispel", "Haste", "Bless", "Teleport", "超级体力");
var skillsp = Array(1000, 1500, 1800, 1500, 2500);
var allskillsp = 5000;

var resetp = 1000;

var pendantp = 500;
var pendantp_perm = 1000;

var namep = 1000;

var buddyp = 100;

var ep = 500;
var slot = Array();
var inv;

function start() {
    action(1, 0, 0);
	if (cm.isGMS()) {
		fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
		mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
		chairs = Array(3010045, 3010014, 3010068, 3010009, 3010022, 3010023, 3010041, 3010142, 3010069, 3010071, 3010107, 3010119, 3010151, 3010155, 3010139, 3010171, 3010077, 3010173, 3010174, 3010175, 3010123, 3010168, 3010095, 3010099, 3010036, 3010112, 3010096, 3010131, 3010172, 3012010, 3012011, 3010180, 3010181, 3010188);
		items = Array(5360000, 1082149, 5220000, 1442057, 2340000, 1002959, 4030003, 1122121, 2530000, 2531000);
		skills = Array(9101000, 9101001, 9101003, 9101007, 9101008);
	} else {
		fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34070, 34080, 34090, 34100, 34110, 34120, 34140, 34160, 34180, 34200, 34210, 34240, 34250, 34060, 34130, 34150, 34170, 34190, 34230, 34220, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34360, 34390, 34430, 34450, 34480, 34510);
		mhair = Array(33000, 33010, 33020, 33030, 33040, 33070, 33080, 33100, 33120, 33130, 33140, 33150, 33160, 33170, 33210, 33240, 33250, 33260, 33010, 33050, 33060, 33090, 33110, 33180, 33190, 33200, 33220, 33230, 33270, 33280, 33290, 33300, 33310, 33320, 33340, 33350, 33380, 33390, 33420, 33430, 33480, 33510, 33520);
		chairs = Array(3010045, 3010054, 3012002, 3010014, 3010068, 3010009, 3010022, 3010023, 3012003, 3010041, 3010142, 3010069, 3010071, 3010107, 3010119, 3010151, 3010155, 3010139, 3010171, 3010077, 3010173, 3010174, 3010175, 3010123, 3010168, 3010095, 3010099, 3010036, 3010144, 3010112, 3010096, 3010131, 3010172, 3012006);
		items = Array(5360017, 1082149, 5220000, 1442057, 2340000, 1002959, 4030003, 1122121, 2530000, 2531000);
		skills = Array(9001000, 9001001, 9001003, 9001007, 9001008);
	}
    inv = cm.getInventory(1);
    previous_points = cm.getPlayer().getPoints();
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
    if (status == 0) {
	cm.sendSimple("你好 #r#h ##k！我叫#r特工W#k。我是#b积分#k的管理员。你想要什么？\r\n#b#L0#什么是积分？#l\r\n#b#L1#用积分兑换物品#l \r\n#b#L3#给已有装备增加升级槽#l \r\n#L4#用积分兑换点券#l \r\n#b#L6#用积分兑换椅子#l \r\n#L7#皇家发型（" + hairp + " 积分）#l \r\n#L8#全部AP重置（" + resetp + " 积分）#l \r\n#L9#用技能兑换积分#l \r\n#L10#改名 需要 " + namep + " 积分#l \r\n#L11#好友上限120 需要 " + buddyp + " 积分#l \r\n#L18#额外吊坠槽#l \r\n#L5#我有多少积分？#l \r\n#L12#用M币兑换积分(100)#l \r\n#L13#用积分(100)兑换M币#l  \r\n#L16#用红色幸运袋兑换积分(1000)#l \r\n#L17#用积分(1000)兑换红色幸运袋#l#k");
    } else if (status == 1) {
	sel = selection;
	if (selection == 0) {
		cm.sendNext("积分可以通过捐赠获得。它们可以用来兑换非常好的东西，比如装备、椅子和点券，就在我这里！如果你积攒积分，也许会有更大的奖励...");
		status = -1;
	} else if (selection == 1) {
		var selStr = "好的，我可以用积分兑换这些物品...#b\r\n\r\n";
		for (var i = 0; i < items.length; i++) {
			selStr += "#L" + i + "##v" + items[i] + "#" + extra_text[i] + (itemsu[i] > 0 ? "（额外 " + itemsu[i] + " 个升级槽）" : "") + " x " + itemsq[i] + " 需要 #e" + itemsp[i] + "#n 积分#n" + (itemse[i] > 0 ? (" ...持续 #r#e" + itemse[i] + "#n#bdays") : "") + "#l\r\n";
		}
		cm.sendSimple(selStr + "#k");
	} else if (selection == 3) {
		var bbb = false;
		var selStr = "好的。我#e只能给已经没有升级槽且已经使用过两次黄金锤的装备增加槽位。每件装备最多只能增加10次槽位。费用为#b" + ep + "#k 积分，已升级超过5个槽位的装备需要 #b" + (ep*2) + "#k 积分。#n 请在下方选择你的装备（不包括已装备的物品）：\r\n\r\n#b";
		for (var i = 0; i <= inv.getSlotLimit(); i++) {
			slot.push(i);
			var it = inv.getItem(i);
			if (it == null || it.getUpgradeSlots() > 0 || it.getViciousHammer() < 2 || it.getViciousHammer() > 6) {
				continue;
			}
			var itemid = it.getItemId();
			//bwg - 7, with hammer is 9.
			//therefore, we should make the max slots (natural+7)
			if (cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080 || cm.isCash(itemid)) {
				continue;
			}
			bbb = true;
			selStr += "#L" + i + "##v" + itemid + "##t" + itemid + "##l\r\n";
		}
		if (!bbb) {
			cm.sendOk("你没有任何我可以强化的装备。我#e只能强化没有升级槽且已经使用过两次黄金锤的装备#n。不包括商城物品。");
			cm.dispose();
			return;
		}
		cm.sendSimple(selStr + "#k");
	} else if (selection == 4) {
		cm.sendYesNo("点券，这是你需要的吗？好的，我可以用 #r#e" + (cm.isGMS() ? (acash/2) : acash) + " 点券兑换 " + acashp + " 积分。#n#k。你想要接受这个交易吗？");
	} else if (selection == 5) {
		cm.sendOk("你目前拥有 #e" + cm.getPlayer().getPoints() + "#n 积分。");
		cm.dispose();
	} else if (selection == 6) {
		var selStr = "好的，我可以用积分兑换这些椅子...#b\r\n\r\n";
		for (var i = 0; i < chairs.length; i++) {
			selStr += "#L" + i + "##v" + chairs[i] + "##t" + chairs[i] + "# 需要 #e" + chairsp[i] + "#n 积分#n#l\r\n";
		}
		cm.sendSimple(selStr + "#k");
	} else if (selection == 7) {
		hairnew = Array();
		if (cm.getPlayerStat("GENDER") == 0) {
			for (var i = 0; i < mhair.length; i++) {
		   		if (mhair[i] == 30010 || mhair[i] == 30070 || mhair[i] == 30080 || mhair[i] == 30090 || mhair[i] == 33140 || mhair[i] == 33240 || mhair[i] == 33180) {
					hairnew.push(mhair[i]);
		   		} else {
					hairnew.push(mhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
		   		}
			}
		} else {
			for (var i = 0; i < fhair.length; i++) {
		   		if (fhair[i] == 34160) {
					hairnew.push(fhair[i]);
		   		} else {
		   			hairnew.push(fhair[i] + parseInt(cm.getPlayerStat("HAIR") % 10));
		   		}
			}
		}
		cm.sendStyle("选择一个你想要的发型。", hairnew);
	} else if (selection == 8) {
		cm.sendYesNo("一旦你确认此操作，就无法撤回！你确定要#e重置所有AP吗？#k");
	} else if (selection == 9) {
	    var selStr = "好的，我可以用积分兑换这些技能...#e如果你已经购买过某个技能，之后不会再扣除积分。#n#b\r\n\r\n";
	    for (var i = 0; i < skills.length; i++) {
	      selStr += "#L" + i + "##s" + skills[i] + "#" + skillsnames[i] + " 需要 #e" + skillsp[i] + "#n 积分#n#l\r\n";
	    }
	    selStr += "#L" + skills.length + "##rALL skills above#b 需要 #e" + allskillsp + "#n 积分#l\r\n";
	    cm.sendSimple(selStr + "#k");
	} else if (selection == 10) {
		cm.sendGetText("请输入你想要更改的名字。");
	} else if (selection == 11) {
	      if (cm.getBuddyCapacity() < 120 && cm.getPlayer().getPoints() >= buddyp) {
		cm.getPlayer().setPoints(cm.getPlayer().getPoints() - buddyp);
		cm.logDonator(" 已购买好友上限120 花费 " + buddyp + ".", previous_points);
		cm.updateBuddyCapacity(120);
	      } else {
		cm.sendOk("你要么已经拥有120个好友栏位，要么没有足够的积分。");
	      }
	      cm.dispose();
	} else if (selection == 12) {
	    if (!cm.getPlayer().haveItem(5220013)) {
		cm.sendOk("你至少需要1个M币。");
		cm.dispose();
	    } else {
		cm.sendGetNumber("你想兑换多少M币？（1 M币 = 100积分）（当前M币： " + cm.getPlayer().itemQuantity(5220013) + "）（当前积分： " + cm.getPlayer().getPoints() + ")", cm.getPlayer().itemQuantity(5220013), 1, cm.getPlayer().itemQuantity(5220013));
	    }
	} else if (selection == 13) {
	    if (cm.getPlayer().getPoints() < 100) {
		cm.sendOk("你至少需要100积分才能兑换一个M币。");
		cm.dispose();
	    } else {
		cm.sendGetNumber("How many M Coins would you like? (1 M Coin = 100 points）（当前积分： " + cm.getPlayer().getPoints() + "）（当前M币： " + cm.getPlayer().itemQuantity(5220013) + ")", cm.getPlayer().getPoints() / 100, 1, cm.getPlayer().getPoints() / 100);
	    }
	} else if (selection == 16) {
	    if (!cm.getPlayer().haveItem(3993003)) {
		cm.sendOk("你至少需要1个红色幸运袋。");
		cm.dispose();
	    } else {
		cm.sendGetNumber("你想兑换多少红色幸运袋？（1个红色幸运袋 = 1000积分）（当前： " + cm.getPlayer().itemQuantity(3993003) + "）（当前积分： " + cm.getPlayer().getPoints() + ")", cm.getPlayer().itemQuantity(3993003), 1, cm.getPlayer().itemQuantity(3993003));
	    }
	} else if (selection == 17) {
	    if (cm.getPlayer().getPoints() < 1000) {
		cm.sendOk("你至少需要1000积分才能兑换一个红色幸运袋。");
		cm.dispose();
	    } else {
		cm.sendGetNumber("How many Red Luck Sacks would you like? (1 Red Luck Sack = 1000 points）（当前积分： " + cm.getPlayer().getPoints() + "）（当前红色幸运袋： " + cm.getPlayer().itemQuantity(3993003) + ")", cm.getPlayer().getPoints() / 1000, 1, cm.getPlayer().getPoints() / 1000);
	    }
	} else if (selection == 18) {
	    cm.sendSimple("#b#L0#30天 - " + pendantp + " 积分#l\r\n#L1#90天 - " + pendantp_perm + " 积分#l");
	}
	} else if (status == 2) {
		if (sel == 1) {
			var it = items[selection];
			var ip = itemsp[selection];
			var iu = itemsu[selection];
			var iq = itemsq[selection];
			var ie = itemse[selection];
			if (cm.getPlayer().getPoints() < ip) {
				cm.sendOk("你的积分不够。你拥有 " + cm.getPlayer().getPoints() + " 而我需要 " + ip + ".");
			} else if (!cm.canHold(it, iq)) {
				cm.sendOk("请清出背包空间。");
			} else {
				if (iu > 0) {
					cm.gainItem(it, iq, false, ie, iu, "Donor");
				} else {
					cm.gainItemPeriod(it, iq, ie, "Donor");
				}
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - ip);
				cm.sendOk("好了！谢谢你的积分。我已经把物品给你了。欢迎再来~");
				cm.logDonator(" 已购买物品 [" + it + "] x " + iq + " 花费 " + ip + "。[到期时间： " + ie + "][额外槽位： " + iu + "] ", previous_points);
			}
			cm.dispose();
		} else if (sel == 3) {
			var statsSel = inv.getItem(slot[selection]);
			if (statsSel == null || statsSel.getUpgradeSlots() > 0 || statsSel.getViciousHammer() < 2) {
				cm.dispose();
				return;
			}
			var itemid = statsSel.getItemId();
			//bwg - 7, with hammer is 9.
			//therefore, we should make the max slots(natural+7)
			if (statsSel.getViciousHammer() > 6 || cm.getNaturalStats(itemid, "tuc") <= 0 || itemid == 1122080) {
				cm.dispose();
				return;
			}
			if (cm.isCash(itemid)) {
				cm.dispose();
				return;
			}
			var pointsToUse = ep;
			if (statsSel.getViciousHammer() >= 4) { //2 slots with normal, 3 slots afterwards with doubled price
				pointsToUse = ep*2;
			}
			if (cm.getPlayer().getPoints() < pointsToUse) {
				cm.sendOk("你的积分不够。你拥有 " + cm.getPlayer().getPoints() + " 而我需要 " + pointsToUse + ".");
			} else {
				cm.replaceItem(selection, 1, statsSel, 1);
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pointsToUse);
				cm.sendOk("好了！谢谢你的积分。我已经把物品给你了。欢迎再来~");
				cm.logDonator(" 已强化+1槽位于物品 [" + statsSel.getItemId() + "] 花费 " + pointsToUse + "。[已用槽位： " + statsSel.getViciousHammer() + "]", previous_points);
			}
			cm.dispose();
		} else if (sel == 4) {
			if (cm.getPlayer().getPoints() < acashp) {
				cm.sendOk("你的积分不够。你拥有 " + cm.getPlayer().getPoints() + " 而我需要 " + acashp + ".");
			} else if (cm.getPlayer().getCSPoints(1) > (java.lang.Integer.MAX_VALUE - acash)) {
				cm.sendOk("你的点券太多了。");
			} else {
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - acashp);
				cm.getPlayer().modifyCSPoints(1, acash, true);
				cm.sendOk("好了！谢谢你的积分，我已经给你点券了。欢迎再来~");
				cm.logDonator(" 已购买点券 [" + (cm.isGMS() ? (acash/2) : acash) + "] 花费 " + acashp + ".", previous_points);
			}
			cm.dispose();
		} else if (sel == 6) {
			var it = chairs[selection];
			var cp = chairsp[selection];
			if (cm.getPlayer().getPoints() < cp) {
				cm.sendOk("你的积分不够。你拥有 " + cm.getPlayer().getPoints() + " 而我需要 " + cp + ".");
			} else if (!cm.canHold(it)) {
				cm.sendOk("请清出背包空间。");
			} else {
				cm.gainItem(it, 1);
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - cp);
				cm.sendOk("好了！谢谢你的积分。我已经把椅子给你了。欢迎再来~");
				cm.logDonator(" 已购买椅子 [" + it + "] 花费 " + cp + ".", previous_points);
			}
			cm.dispose();
		} else if (sel == 7) {
			if (cm.getPlayer().getPoints() < hairp) {
				cm.sendOk("你的积分不够。你只有 " + cm.getPlayer().getPoints());
			} else {
				cm.setHair(hairnew[selection]);
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - hairp);
				cm.sendOk("感谢购买~");
				cm.logDonator(" 已购买发型 [" + hairnew[selection] + "] 花费 " + hairp + ".", previous_points);
			}
			cm.dispose();
		} else if (sel == 8) {
			if (cm.getPlayer().getPoints() < resetp) {
				cm.sendOk("你的积分不够。你只有 " + cm.getPlayer().getPoints());
			} else {
				cm.getPlayer().resetStatsByJob(false);
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - resetp);
				cm.sendOk("感谢购买~");
				cm.logDonator(" has bought full AP reset 花费 " + resetp + ".", previous_points);
			}
			cm.dispose();
		} else if (sel == 9) {
		      if (selection == skills.length) {
			if (cm.getPlayer().getPoints() < allskillsp) {
				cm.sendOk("你的积分不够。你只有 " + cm.getPlayer().getPoints());
			} else {
				for (var i = 0; i < skills.length; i++) {
					cm.teachSkill(skills[i], 1, 0);
				}
				cm.getPlayer().setPoints(cm.getPlayer().getPoints() - allskillsp);
				cm.sendOk("感谢购买~ To use your skills, please click on me again and distribute each skill 改为 a key.");
				cm.logDonator(" has bought all skills 花费 " + allskillsp + ".", previous_points);
			}
			cm.dispose();
			return;
		      }
		      itt = selection;
		      var selStr = "好的，我可以把你的技能放在这些快捷键上...#b\r\n\r\n";
		      for (var i = 0; i < keys.length; i++) {
		        selStr += "#L" + i + "#" + keynames[i] + "#l\r\n";
		      }
		      cm.sendSimple(selStr + "#k");
		} else if (sel == 10) {
		      if (cm.getPlayer().getPoints() >= namep && cm.isEligibleName(cm.getText())) {
			cm.getPlayer().setPoints(cm.getPlayer().getPoints() - namep);
			cm.logDonator(" 已购买改名 从 " + cm.getPlayer().getName() + " 改为 " + cm.getText() + " 花费 " + namep + ".", previous_points);
		 	cm.getClient().getChannelServer().removePlayer(cm.getPlayer().getId(), cm.getPlayer().getName());
			cm.getPlayer().setName(cm.getText());
			cm.getClient().getSession().close();
		      } else {
			cm.sendOk("你要么积分不够，要么 " + cm.getText() + " 不是一个合法的名字");
		      }
			cm.dispose();
		} else if (sel == 12) {
			if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(5220013)) {
				if (cm.getPlayer().getPoints() > (2147483647 - (selection * 100))) {
					cm.sendOk("You have 改为o many points.");
				} else {
					cm.gainItem(5220013, -selection);
					cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 100));
					cm.sendOk("你失去了 " + selection + " 个M币，获得了 " + (selection * 100) + " 积分。当前积分： " + cm.getPlayer().getPoints());
					cm.logDonator(" 已兑换 " + selection + " 个M币，获得 " + (selection * 100) + ".", previous_points);
				}
			} 
			cm.dispose();
		} else if (sel == 13) {
			if (selection >= 1 && selection <= 100) {
				if (selection > (cm.getPlayer().getPoints() / 100)) {
					cm.sendOk("你最多只能获得 " + (cm.getPlayer().getPoints() / 100) + " 个M币。1 M币 = 100积分。");
				} else if (!cm.canHold(5220013, selection)) {
					cm.sendOk("请在商城栏腾出空间。");
				} else {
					cm.gainItem(5220013, selection);
					cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 100));
					cm.sendOk("你获得了 " + selection + " 个M币，失去了 " + (selection * 100) + " 积分。当前积分： " + cm.getPlayer().getPoints());
					cm.logDonator(" 已获得 " + selection + " M Coin(s) 花费 " + (selection * 100) + ".", previous_points);
				}
			}
			cm.dispose();
		} else if (sel == 16) {
			if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(3993003)) {
				if (cm.getPlayer().getPoints() > (2147483647 - (selection * 1000))) {
					cm.sendOk("You have 改为o many points.");
				} else {
					cm.gainItem(3993003, -selection);
					cm.getPlayer().setPoints(cm.getPlayer().getPoints() + (selection * 1000));
					cm.sendOk("你失去了 " + selection + " 并获得 " + (selection * 1000) + " 积分。当前积分： " + cm.getPlayer().getPoints());
					cm.logDonator(" 已兑换 " + selection + " 个红色幸运袋 获得 " + (selection * 1000) + ".", previous_points);
				}
			} 
			cm.dispose();
		} else if (sel == 17) {
			if (selection >= 1) {
				if (selection > (cm.getPlayer().getPoints() / 1000)) {
					cm.sendOk("你最多只能获得 " + (cm.getPlayer().getPoints() / 1000) + "。1个物品 = 1000积分。");
				} else if (!cm.canHold(3993003, selection)) {
					cm.sendOk("请在设置栏腾出空间。");
				} else {
					cm.gainItem(3993003, selection);
					cm.getPlayer().setPoints(cm.getPlayer().getPoints() - (selection * 1000));
					cm.sendOk("你获得了 " + selection + " 并失去 " + (selection * 1000) + " 积分。当前积分： " + cm.getPlayer().getPoints());
					cm.logDonator(" 已获得 " + selection + " Red Luck Sack(s) 花费 " + (selection * 1000) + ".", previous_points);
				}
			}
			cm.dispose();
		} else if (sel == 18) {
			if (selection == 0) {
				if (cm.getPlayer().getPoints() < pendantp) {
					cm.sendOk("你的积分不够。");
				} else {
					var marr = cm.getCData("pendant");
					if (marr != null && parseInt(marr) > cm.getCurrentTime()) {
						cm.sendOk("你已经拥有额外的吊坠槽。");
					} else {
						cm.setCData("pendant", "" + (cm.getCurrentTime() + (30 * 24 * 60 * 60 * 1000)));
						cm.forceStartQuest(7830, "1");
						cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pendantp);
						cm.sendOk("你获得了 additional pendant slot - 30 days.");
						cm.sendPendant(true);
						cm.getPlayer().fakeRelog();
						cm.logDonator(" 已获得 Additional Pendant Slot (30 Day) 花费 " + (pendantp) + ".", previous_points);
					}
				}
			} else {
				if (cm.getPlayer().getPoints() < pendantp_perm) {
					cm.sendOk("你的积分不够。");
				} else {
					var marr = cm.getCData("pendant");
					if (marr != null && parseInt(marr) > cm.getCurrentTime()) {
						cm.sendOk("你已经拥有额外的吊坠槽。");
					} else {
						cm.setCData("pendant", "" + (cm.getCurrentTime() + (90 * 24 * 60 * 60 * 1000)));
						cm.forceStartQuest(7830, "1");
						cm.getPlayer().setPoints(cm.getPlayer().getPoints() - pendantp_perm);
						cm.sendOk("你获得了 additional pendant slot - 90 days.");
						cm.sendPendant(true);
						cm.getPlayer().fakeRelog();
						cm.logDonator(" 已获得 Additional Pendant Slot (90 Day) 花费 " + (pendantp) + ".", previous_points);
					}
				}
			}
			cm.dispose();
		}
	} else if (status == 3) {
		  if (sel == 9) {
		    var hadSkill = true;
		    if (cm.getPlayer().getSkillLevel(skills[itt]) <= 0) {
		      hadSkill = false;
		      if (cm.getPlayer().getPoints() < skillsp[itt]) {
		        cm.sendOk("你的积分不够。你拥有 " + cm.getPlayer().getPoints() + " 而我需要 " + skillsp[itt] + ".");
		        cm.dispose();
		        return;
		      } else {
		        cm.teachSkill(skills[itt], 1, 0);
		        cm.getPlayer().setPoints(cm.getPlayer().getPoints() - skillsp[itt]);
		      }
		    }
		    cm.putKey(keys[selection], 1, skills[itt]);
		    cm.sendOk("好了！谢谢你的积分。我已经把技能给你了。欢迎再来~");
		    cm.logDonator(" 已购买技能 [" + skills[itt] + "] 花费 " + skillsp[itt] + " 放在快捷键 " + keynames[selection] + " (" + keys[selection] + ")。[已有技能： " + hadSkill + "] ", previous_points);
		  }
		  cm.dispose();

	}
}