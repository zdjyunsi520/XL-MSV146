
var status = -1;
var nitems;
var np;
var ditems;
var dp;
var mitems = Array("200万枫币", "#v4080000#Omok", "#v4080001#Omok", "#v4080002#Omok", "#v4080003#Omok", "#v4080004#Omok", "#v4080005#Omok", "#v4080006#Omok", "#v4080007#Omok", "#v4080008#Omok", "#v4080009#Omok", "#v4080010#Omok", "#v4080011#Omok");
var mp = Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
var mhair;
var fhair;
var hairnew;

function start() {
	action(1, 0, 0);
	if (cm.isGMS()) {
		fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34180, 34190, 34210, 34220, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34400, 34410, 34420, 34450, 34470, 34480, 34490, 34540);
		mhair = Array(33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33270, 33280, 33290, 33350, 33360, 33370, 33380, 33390, 33400, 33440, 33450, 33460, 33500, 33510, 33520, 33580, 33590);
		nitems = Array("5000点卷", "#v2340000#白卷轴x1（70级以上）", "#v2049100#混沌卷轴x5（70级以上）", "#v5062002#超级奇迹方块x2", "#v5050000#AP重置卷轴x5", "#v5062000#奇迹方块x4", "#v2022179#黑苹果x4", "#v2022179#黑苹果x10", "#v5062001#高级奇迹方块x10", "#v2530000#幸运日卷轴（70级以上）", "#v2531000#保护卷轴（70级以上）", "#v5211068#1.5倍经验卡（1天）");
		np = Array(2, 2, 10, 6, 2, 2, 2, 2, 5, 5, 10, 15);
		np = Array(2, 2, 10, 6, 2, 2, 2, 2, 5, 5, 10, 15);
		ditems = Array("#v5360000#2倍掉落/枫币卡（1天）", "500万枫币");
		dp = Array(5, 10, 6);
	} else {
		fhair = Array(34000, 34010, 34020, 34030, 34040, 34050, 34070, 34080, 34090, 34100, 34110, 34120, 34140, 34160, 34180, 34200, 34210, 34240, 34250, 34060, 34130, 34150, 34170, 34190, 34230, 34220, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34360, 34390, 34430, 34450, 34480, 34510);
		mhair = Array(33000, 33010, 33020, 33030, 33040, 33070, 33080, 33100, 33120, 33130, 33140, 33150, 33160, 33170, 33210, 33240, 33250, 33260, 33010, 33050, 33060, 33090, 33110, 33180, 33190, 33200, 33220, 33230, 33270, 33280, 33290, 33300, 33310, 33320, 33340, 33350, 33380, 33390, 33420, 33430, 33480, 33510, 33520);
		nitems = Array("2500点卷", "2.#v2340000#白卷轴x1（70级以上）", "#v2049100#混沌卷轴x3（70级以上）", "#v5062002#超级方块x2", "#v5050000#AP重置卷轴x10", "#v5050000#AP重置卷轴x30", "#v5062000#奇迹方块x21", "#v2022179#黑苹果x4", "#v2022179#黑苹果x5", "#v2022179#黑苹果x11", "#v5062001#高级奇迹方块x2", "#v5211077#1.5倍经验卡（1天）", "#v2531000#保护卷轴（70级以上）", "#v5211068#1.5倍经验卡（1天）");
		np = Array(4, 1, 10, 30, 2, 1, 2, 1, 10, 2, 10, 18, 10, 20);
		ditems = Array("#v5360017#2倍掉落/枫币卡（1天）", "#v5030006#蘑菇精灵小屋", "你好！我是 #r#e投票积分NPC#n#k。如果你在我们的网站上投过票，每次都会获得积分！我看到你有 #e#r");
		dp = Array(8, 16, 6, 1, 8, 6);
	}
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.sendSimple("#n#k 投票积分！我可以帮你兑换成各种好东西！你想要什么……？\r\n\r\n#b#L0#兑换普通道具#l\r\n#L1#兑换特殊道具#l\r\n#L2#兑换皇家发型（20投票积分）#l\r\n#L3#兑换小游戏道具#l#k" + cm.getPlayer().getVPoints() + "#r普通道具？#k 好的，这是我的选择……\r\n\r\n");
	} else if (status == 1) {
		status += selection;
		var selStr;
		var it;
		var ip;
		if (selection == 0) {
			selStr = "#r特殊道具？#k 这些是你在其他地方得不到的道具。这是我的选择……\r\n\r\n";
			it = nitems;
			ip = np;
		} else if (selection == 1) {
			selStr = "选择一个你喜欢的发型。";
			it = ditems;
			ip = dp;
		} else if (selection == 2) {
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
			cm.sendStyle("#r小游戏道具？#k 这是我的选择……\r\n\r\n", hairnew);
			return;
		} else if (selection == 3) {
			selStr = "一旦继续此操作就无法回头！你确定要 #e重置你所有的AP吗？（不会重置HP或MP）#k";
			it = mitems;
			ip = mp;
		} else if (selection == 4) {
			cm.sendYesNo("#兑换");
			return;
		} else {
			cm.dispose();
			return;
		}
		for (var i = 0; i < it.length; i++) {
			selStr += "#b#L" + i + " 积分换取 " + ip[i] + "你的投票积分不足。你只有 " + it[i] + "#l#k\r\n";
		}
		cm.sendSimple(selStr);
	} else if (status == 2) { //normal item
		if (cm.getPlayer().getVPoints() < np[selection]) {
			cm.sendOk("你的枫币太多了。 " + cm.getPlayer().getVPoints());
		} else {
			var passed = false;
			switch(selection) {
				case 0:
					if (cm.getPlayer().getMeso() > (2145483647)) { //integer.max_value - 2m
						cm.sendOk("你的点卷太多了。");
					} else {
						cm.gainMeso(2000000);
						passed = true;
					}
					break;
				case 1:
					if (cm.getPlayer().getCSPoints(1) > (2147473647)) {
						cm.sendOk("你必须达到70级以上才能获取此道具。");
					} else {
						cm.getPlayer().modifyCSPoints(4, 5000, false);
						passed = true;
					}
					break;
				case 2:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(2340000)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(2340000, 1);
						passed = true;
					}
					break;
				case 3:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(2049100, 5)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(2049100, 5);
						passed = true;
					}
					break;
				case 4:
					if (!cm.canHold(5062002, 2)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(5062002, 2);
						passed = true;
					}
					break;
				case 5:
					if (!cm.canHold(5050000, 5)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(5050000, 5);
						passed = true;
					}
					break;
				case 6:
					if (!cm.canHold(5062000, 4)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(5062000, 4);
						passed = true;
					}
					break;
				case 7:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(2022179, 4)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(2022179, 4);
						passed = true;
					}
					break;
				case 8:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(2022179, 4)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(2022179, 10);
						passed = true;
					}
					break;
				case 9:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(5062001, 10)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(5062001, 10);
						passed = true;
					}
					break;
				case 10:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(2530000, 1)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(2530000, 1);
						passed = true;
					}
					break;
				case 11:
					if (cm.getPlayer().getLevel() < 70) {
						cm.sendOk("你的道具太多了。");
					} else if (!cm.canHold(2531000, 1)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(2531000, 1);
						passed = true;
					}
					break;
						
			}
			if (passed) {
				cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - np[selection]);
				cm.sendOk("#n#k 积分！！！" + cm.getPlayer().getVPoints() + "感谢购买~");
			}
		}
		cm.dispose();
	} else if (status == 3) { // donators item
		if (cm.getPlayer().getVPoints() < dp[selection]) {
			cm.sendOk("你的枫币太多了。 " + cm.getPlayer().getVPoints());
		} else {
			var passed = false;
			switch(selection) {
				case 0:
					if (!cm.canHold(cm.isGMS() ? 5211068 : 5211077)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItemPeriod(cm.isGMS() ? 5211068 : 5211077, 1, 1, "Rental");
						passed = true;
					}
					break;
				case 1:
					if (!cm.canHold(cm.isGMS() ? 5360000 : 5360017)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItemPeriod(cm.isGMS() ? 5360000 : 5360017, 1, 1, "Rental");
						passed = true;
					}
					break;
				case 2:
					if (!cm.canHold(cm.isGMS() ? 5030000 : 5030006)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItemPeriod(cm.isGMS() ? 5030000 : 5030006, 1, 1, "Rental");
						passed = true;
					}
					break;
						
			}
			if (passed) {
				cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - dp[selection]);
				cm.sendOk("感谢购买~ #e#r");
			}
		}
		cm.dispose();
	} else if (status == 4) {
		if (cm.getPlayer().getVPoints() < 20) {
			cm.sendOk("你的枫币太多了。 " + cm.getPlayer().getVPoints());
		} else {
			cm.setHair(hairnew[selection]);
			cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 20);
			cm.sendOk("感谢购买~ #e#r #e#r" + cm.getPlayer().getVPoints() + "感谢购买~");
		}
		cm.dispose();
	} else if (status == 5) { // donators item
		if (cm.getPlayer().getVPoints() < mp[selection]) {
			cm.sendOk("你的枫币太多了。 " + cm.getPlayer().getVPoints());
		} else {
			var passed = false;
			switch(selection) {
				case 0:
					if (!cm.canHold(4080100)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(4080100, 1);
						passed = true;
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
					if (!cm.canHold(4079999 + selection)) {
						cm.sendOk("感谢购买~你还剩 #e#r");
					} else {
						cm.gainItem(4079999 + selection, 1);
						passed = true;
					}
					break;
						
			}
			if (passed) {
				cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - mp[selection]);
				cm.sendOk("感谢购买~ #e#r #e#r" + cm.getPlayer().getVPoints() + "感谢购买~");
			}
		}
		cm.dispose();
	} else if (status == 6) {
		if (cm.getPlayer().getVPoints() < 0) {
			cm.sendOk("你的枫币太多了。 " + cm.getPlayer().getVPoints());
		} else {
			cm.getPlayer().resetStatsByJob(false);
			cm.getPlayer().setVPoints(cm.getPlayer().getVPoints() - 0);
			cm.sendOk("感谢购买~ #e#rYour VP has not been deducted");
		}
		cm.dispose();
	}

}