var status = -1;
var redCube = 5062009;
var bonusCube = 5062500;
var cubeSelection;
/*
1: Red Cube
2: Bonus Potential Cube
3: Auto Cube
*/

var state = 0;
var bagIndex;
var desiredStatNumber = 0;
var statList = ["None", "攻击力%", "魔法攻击力%", "掉落率%", "幸运%", "敏捷%", "智力%", "力量%", "全属性%"]
var proceedSelection = statList.length + 1;
var cubeNormally = proceedSelection + 1;
var statSelected = 0;
var combination;
var isBpot = false;

/* Prices of Auto Cube Per Cube */
var autoCubePriceRed = 5500;
var autoCubePriceBonus = 5500;

var equipment; //cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(bagIndex);


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection)
{

    if (mode == 1) {
        status++;
    } else {
	cm.dispose();
	return;
    }

    if (status == 0) {

		var itemSel = "这里是#r免费洗潜能NPC#k，请选择你想要洗潜能的装备。\r\n#b\r\n"
		cm.sendSimple(itemSel + cm.EquipListVertical(cm.getChar().getClient()));

	}
	if(status == 1)
	{
		bagIndex = selection;
		equipment = cm.getEquipInventory(cm.getChar()).getItem(bagIndex);

		var cubeSelDiag = "你想使用哪种方块？\r\n#r消耗：1个方块\r\n#k";
		cubeSelDiag += "#L500" + "##v" + redCube + " #红色方块\r\n";
		cubeSelDiag += "#L1000" + "##v" + bonusCube + " #附加潜能方块\r\n\r\n";
		cubeSelDiag += "#L2000##b自动洗潜能选项#l"
		cm.sendSimple(cubeSelDiag);
	}
	else if (status == 2)
	{
		if(selection == 500) // red cube
		{
			cubeSelection = 1;
			if(equipment.getPotential1() == 0 && equipment.getPotential2() == 0)
			{
				cm.sendOk("你的装备没有潜能，或者不是传说级。");
				return cm.dispose();
			}
			else if(cm.getQuantityOfItem(redCube) <= 0)
			{
				cm.sendOk("你没有红色方块。");
				return cm.dispose();
			}
			else
			{
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "#g（传说）#k暴击伤害 8%";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n"
				}
				cm.sendNext(cubingDiag + "#l");

			}
		}
		else if(selection == 1000)
		{
			cubeSelection = 2;
			if(equipment.getPotential4() == 0 && equipment.getPotential5() == 0 || equipment.getPotential4() < 40000)
			{
				cm.sendOk("你的装备没有潜能，或者不是传说级。");
				return cm.dispose();
			}
			else if(cm.getQuantityOfItem(bonusCube) <= 0)
			{
				cm.sendOk("你没有附加潜能方块。");
				return cm.dispose();
			}
			else
			{
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "#L2\r\n\r\n";
				var bonusPot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < bonusPot.length; i++)
				{
					if(bonusPot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(bonusPot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(bonusPot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(bonusPot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n"
				}
				cm.sendNext(cubingDiag + "#l");
				status++;
			}
		}
		else if(selection == 2000) // Auto Cube Selection
		{
			combination = "#r组合： " + desiredStatNumber + " " + statList[statSelected]
			cubeSelection = 3;
			autoCubeDiag = "请选择你想自动洗出的属性。\r\n#r消耗：\r\n每个红色方块 5,000 NX\r\n每个附加方块 5,000 NX\r\n\r\n";

			for(var i = 1; i < statList.length; i++)
			{
				autoCubeDiag += "#L" + i + "##b" + statList[i] + "\r\n";
			}
			autoCubeDiag += "\r\n#L" + cubeNormally + "##b" + "正常洗潜能。";
			cm.sendNext(autoCubeDiag);
		}
	}
	else if(status == 3 && cubeSelection == 3) // Auto Cube Lines Selection
	{
		if(selection == cubeNormally)
		{
			cubeSelection = 1;
			cm.sendNext("按下一步使用方块洗#i" + equipment.getItemId() + "#\r\n#r组合： NONE");
			status--;
		}
		else if(selection == 1) // Att
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比攻击力？", 1, 1, 36);
		}
		else if(selection == 2) // Matt
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比魔法攻击力？", 1, 1, 36);
		}
		else if(selection == 3) // Drop Rate
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比掉落率？", 1, 1, 60);
		}
		else if(selection == 4) // Luk
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比幸运？", 1, 1, 36);
		}
		else if(selection == 5) // Dex
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比敏捷？", 1, 1, 36);
		}
		else if(selection == 6) // Int
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比智力？", 1, 1, 36);
		}
		else if(selection == 7) // Str
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比力量？", 1, 1, 36);
		}
		else if(selection == 8) // All Stat
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出多少百分比全属性？", 1, 1, 36);
		}
	}
	else if(status == 4 && cubeSelection == 3)
	{
		desiredStatNumber = selection;
		cm.sendNext("你想洗出至少#r" + statList[statSelected] + desiredStatNumber + "吗？\r\n#k#L2000##b是的（#r红色方块#k 5,000 NX#b）\r\n#L5000#是的（#g附加潜能方块#k 5,000 NX#b）\r\n#L4000#不要");
	}
	else if(status == 5) // Auto Cubing Section
	{
		if(selection <= 2000 && isBpot == false) // Main Pot Auto Cube
		{
			if(cm.getQuantityOfItem(redCube) == 0)
				{
					cm.sendOk("你没有足够的红色方块。");
					return cm.dispose();
				}
				else if(equipment.getPotential1() < 40000)
				{
					cm.sendOk("你的装备不是传说级或没有潜能。");
					return cm.dispose();
				}
				else if(cm.getChar().getCSPoints(2) < autoCubePriceRed)
				{
					cm.sendOk("你没有足够的金币来洗潜能。");
					return cm.dispose();
				}
				else if(GameConstants.isWeapon(equipment.getItemId()) || GameConstants.isSecondaryWeapon(equipment.getItemId()) || GameConstants.isEmblem(equipment.getItemId())) // Weapon, 2ndry, Emblem
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004 , 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(GameConstants.getOptionType(equipment.getItemId()) == 54) // Gloves
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "#g（传说）#k暴击伤害 8%";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else
				{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(GameConstants.isEquip(equipment.getItemId()) && GameConstants.isAccessory(equipment.getItemId()) == false && GameConstants.isRing(equipment.getItemId()) == false && GameConstants.isEmblem(equipment.getItemId()) == false && GameConstants.getOptionType(equipment.getItemId()) != 54)
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else
				{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else if(GameConstants.isAccessory(equipment.getItemId()) || GameConstants.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042,40650, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,40001, 40002, 40003,40650, 40004,40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else
				{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else
			{
				cm.sendOk("如果你看到这条消息，请联系Brandon。");
				return cm.dispose();
			}
		}
		else if(selection == 5000 || isBpot == true) // BPOT Auto Cube
		{
			isBpot = true;
			if(cm.getQuantityOfItem(bonusCube) == 0)
				{
					cm.sendOk("你没有足够的附加潜能方块。");
					return cm.dispose();
				}
				else if(equipment.getPotential4() < 40000)
				{
					cm.sendOk("你的装备不是传说级或没有潜能。");
					return cm.dispose();
				}
				else if(cm.getChar().getCSPoints(2) < autoCubePriceBonus)
				{
					cm.sendOk("你没有足够的金币来自动洗潜能。");
					return cm.dispose();
				}
				else if(GameConstants.isWeapon(equipment.getItemId()) || GameConstants.isSecondaryWeapon(equipment.getItemId()) || GameConstants.isEmblem(equipment.getItemId()))
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004, 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(8);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(GameConstants.getOptionType(equipment.getItemId()) == 54)
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPrimePot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "#g（传说）#k暴击伤害 8%";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(GameConstants.isEquip(equipment.getItemId()) && GameConstants.isAccessory(equipment.getItemId()) == false && GameConstants.isRing(equipment.getItemId()) == false && GameConstants.isEmblem(equipment.getItemId()) == false && GameConstants.getOptionType(equipment.getItemId()) != 54)
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPrimePot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(8);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else if(GameConstants.isAccessory(equipment.getItemId()) || GameConstants.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40650, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40656, 40008, 40009, 40041, 40042, 40043,40650, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPrimePot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(8);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				var totalLukPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incLUKr + cm.getPotentialInfoById(basePot[1]).get(19).incLUKr + cm.getPotentialInfoById(basePot[2]).get(19).incLUKr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incLUKr;
				var totalStrPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incSTRr + cm.getPotentialInfoById(basePot[1]).get(19).incSTRr + cm.getPotentialInfoById(basePot[2]).get(19).incSTRr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incSTRr;
				var totalDexPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incDEXr + cm.getPotentialInfoById(basePot[1]).get(19).incDEXr + cm.getPotentialInfoById(basePot[2]).get(19).incDEXr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incDEXr;
				var totalIntPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incINTr + cm.getPotentialInfoById(basePot[1]).get(19).incINTr + cm.getPotentialInfoById(basePot[2]).get(19).incINTr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incINTr;
				var totalAttPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incPADr + cm.getPotentialInfoById(basePot[1]).get(19).incPADr + cm.getPotentialInfoById(basePot[2]).get(19).incPADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incPADr;
				var totalMattPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incMADr + cm.getPotentialInfoById(basePot[1]).get(19).incMADr + cm.getPotentialInfoById(basePot[2]).get(19).incMADr : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incMADr;
				var totalDropPercent = (cm.getReqLevel(equipment.getItemId()) >= 200) ? cm.getPotentialInfoById(basePot[0]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(19).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(19).incRewardProp : cm.getPotentialInfoById(basePot[0]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[1]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp + cm.getPotentialInfoById(basePot[2]).get(cm.getReqLevel(equipment.getItemId()) / 10).incRewardProp;

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 幸运%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#r匹配成功！\r\n" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else
			{
				cm.sendOk("如果你看到这条消息，请联系Brandon。");
				return cm.dispose();
			}
		}
		else if(selection == 4000)
		{
			return cm.dispose();
		}
	}
	else if(status == 3 && cubeSelection == 1) // Main Pot
	{

				if(cm.getQuantityOfItem(redCube) == 0)
				{
					cm.sendOk("你没有足够的红色方块。");
					return cm.dispose();
				}
				else if(GameConstants.isWeapon(equipment.getItemId()) || GameConstants.isSecondaryWeapon(equipment.getItemId()) || GameConstants.isEmblem(equipment.getItemId())) // Weapon, 2ndry, Emblem
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004 , 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				else if(GameConstants.getOptionType(equipment.getItemId()) == 54) // Gloves
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "#g（传说）#k暴击伤害 8%";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				else if(GameConstants.isEquip(equipment.getItemId()) && GameConstants.isAccessory(equipment.getItemId()) == false && GameConstants.isRing(equipment.getItemId()) == false && GameConstants.isEmblem(equipment.getItemId()) == false && GameConstants.getOptionType(equipment.getItemId()) != 54)
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			else if(GameConstants.isAccessory(equipment.getItemId()) || GameConstants.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042,40650, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,40001, 40002, 40003,40650, 40004,40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个红色方块");
				var cubingDiag = "这些是你的潜能，你要使用方块吗？\r\n#v" + redCube +": #" + cm.getQuantityOfItem(redCube) + "\r\nDP： " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
			}
			else
			{
				cm.sendOk("如果你看到这条消息，请联系Brandon。");
				return cm.dispose();
			}

	}
	else if(status == 4 && cubeSelection == 2) // BPOT
	{

				if(cm.getQuantityOfItem(bonusCube) == 0)
				{
					cm.sendOk("你没有足够的附加潜能方块。");
					return cm.dispose();
				}
				else if(GameConstants.isWeapon(equipment.getItemId()) || GameConstants.isSecondaryWeapon(equipment.getItemId()) || GameConstants.isEmblem(equipment.getItemId()))
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004, 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "#L2\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(8);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				else if(GameConstants.getOptionType(equipment.getItemId()) == 54)
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPrimePot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "#L2\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "#g（传说）#k暴击伤害 8%";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(19);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				else if(GameConstants.isEquip(equipment.getItemId()) && GameConstants.isAccessory(equipment.getItemId()) == false && GameConstants.isRing(equipment.getItemId()) == false && GameConstants.isEmblem(equipment.getItemId()) == false && GameConstants.getOptionType(equipment.getItemId()) != 54)
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPrimePot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "#L2\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(8);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag);
				status--;
			}
			else if(GameConstants.isAccessory(equipment.getItemId()) || GameConstants.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40650, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40656, 40008, 40009, 40041, 40042, 40043,40650, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential4(randomPrimePot);
				equipment.setPotential5(randomPot2);
				equipment.setPotential6(randomPot3);
				cm.getChar().getClient().getSession().writeAndFlush(CWvsContext.InventoryPacket.updateEquipSlot(equipment));
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"你消耗了1个附加方块");
				var cubingDiag = "这些是你的附加潜能，你要使用方块吗？\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "\r\nDP： " + "#L2\r\n\r\n";
				var basePot = [equipment.getPotential4(), equipment.getPotential5(),equipment.getPotential6()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "（无） ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#b（稀有）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#r（独特）#k";
							}
							else
							{
								cubingDiag += "#g（传说）#k";
							}
						if(cm.getReqLevel(equipment.getItemId()) >= 200)
						{
							potInfo = cm.getPotentialInfoById(basePot[i]).get(8);
							cubingDiag += potInfo;
						}
						else{
						potInfo = cm.getPotentialInfoById(basePot[i]).get(cm.getReqLevel(equipment.getItemId()) / 10);
						cubingDiag += potInfo;
						}
					}

					cubingDiag += "\r\n";
				}
				cm.sendNext(cubingDiag + "#l");
				status--;
			}
			else
			{
				cm.sendOk("如果你看到这条消息，请联系Brandon。");
				return cm.dispose();
			}
	}
}