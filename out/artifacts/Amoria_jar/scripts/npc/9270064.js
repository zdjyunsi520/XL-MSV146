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
var statList = ["None", "魔法攻击力%", "掉落率%", "运气%", "敏捷%", "智力%", "力量%", "全属性%", "这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n"]
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

		var itemSel = "你想使用哪种方块？\r\n#r消耗：1个方块\r\n#k"
		cm.sendSimple(itemSel + cm.EquipListVertical(cm.getChar().getClient()));

	}
	if(status == 1)
	{
		bagIndex = selection;
		equipment = cm.getEquipInventory(cm.getChar()).getItem(bagIndex);

		var cubeSelDiag = "#红色方块\r\n";
		cubeSelDiag += "#L500" + "##v" + redCube + "#附加潜能方块\r\n\r\n";
		cubeSelDiag += "#L1000" + "##v" + bonusCube + "#L2000##b自动洗潜能选项#l";
		cubeSelDiag += "你的物品没有潜能。"
		cm.sendSimple(cubeSelDiag);
	}
	else if (status == 2)
	{
		if(selection == 500) // red cube
		{
			cubeSelection = 1;
			if(equipment.getPotential1() == 0 && equipment.getPotential2() == 0)
			{
				cm.sendOk("你没有红色方块了。");
				return cm.dispose();
			}
			else if(cm.getQuantityOfItem(redCube) <= 0)
			{
				cm.sendOk("这些是你的潜能，你想使用方块吗？\r\n#v");
				return cm.dispose();
			}
			else
			{
				var cubingDiag = "\r\nDP：" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
			if(equipment.getBonusPotential1() == 0 && equipment.getBonusPotential2() == 0)
			{
				cm.sendOk("你没有红色方块了。");
				return cm.dispose();
			}
			else if(cm.getQuantityOfItem(bonusCube) <= 0)
			{
				cm.sendOk("这些是你的附加潜能，你想使用方块吗？\r\n#v");
				return cm.dispose();
			}
			else
			{
				var cubingDiag = "#r组合：" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "#L2\r\n\r\n";
				var bonusPot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < bonusPot.length; i++)
				{
					if(bonusPot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(bonusPot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
			combination = "请选择你想自动洗的属性。\r\n#r消耗：\r\n每个红色方块5,000 NX\r\n每个附加方块5,000 NX\r\n\r\n " + desiredStatNumber + " " + statList[statSelected]
			cubeSelection = 3;
			autoCubeDiag = "普通洗潜能。";

			for(var i = 1; i < statList.length; i++)
			{
				autoCubeDiag += "#L" + i + "##b" + statList[i] + "\r\n";
			}
			autoCubeDiag += "\r\n#L" + cubeNormally + "##b" + "按下一步使用方块洗#i";
			cm.sendNext(autoCubeDiag);
		}
	}
	else if(status == 3 && cubeSelection == 3) // Auto Cube Lines Selection
	{
		if(selection == cubeNormally)
		{
			cubeSelection = 1;
			cm.sendNext("#\r\n#r组合：无" + equipment.getItemId() + "#\r\n请选择你想自动洗的属性。\r\n#r消耗：\r\n每个红色方块5,000 NX\r\n每个附加方块5,000 NX\r\n\r\n NONE");
			status--;
		}
		else if(selection == 1) // Att
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的魔法攻击力？", 1, 1, 36);
		}
		else if(selection == 2) // Matt
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的掉落率？", 1, 1, 36);
		}
		else if(selection == 3) // Drop Rate
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的运气？", 1, 1, 60);
		}
		else if(selection == 4) // Luk
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的敏捷？", 1, 1, 36);
		}
		else if(selection == 5) // Dex
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的智力？", 1, 1, 36);
		}
		else if(selection == 6) // Int
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的力量？", 1, 1, 36);
		}
		else if(selection == 7) // Str
		{
			statSelected = selection;
			cm.sendGetNumber("你想洗出百分之多少的全属性？", 1, 1, 36);
		}
		else if(selection == 8) // All Stat
		{
			statSelected = selection;
			cm.sendGetNumber("你想至少洗出#r", 1, 1, 36);
		}
	}
	else if(status == 4 && cubeSelection == 3)
	{
		desiredStatNumber = selection;
		cm.sendNext("？\r\n#k#L2000##b是（#r红色方块#k 5,000 NX#b）\r\n#L5000#是（#g附加潜能方块#k 5,000 NX#b）\r\n#L4000#否" + statList[statSelected] + desiredStatNumber + "你没有足够的红色方块。");
	}
	else if(status == 5) // Auto Cubing Section
	{
		if(selection <= 2000 && isBpot == false) // Main Pot Auto Cube
		{
			if(cm.getQuantityOfItem(redCube) == 0)
				{
					cm.sendOk("你的物品不是传说级或者没有潜能。");
					return cm.dispose();
				}
				else if(equipment.getPotential1() < 40000)
				{
					cm.sendOk("你没有足够的金币来洗潜能。");
					return cm.dispose();
				}
				else if(cm.getChar().getCSPoints(2) < autoCubePriceRed)
				{
					cm.sendOk("你消耗了1个红色方块");
					return cm.dispose();
				}
				else if(cm.isWeapon(equipment.getItemId()) || cm.isSecondaryWeapon(equipment.getItemId()) || cm.isEmblem(equipment.getItemId())) // Weapon, 2ndry, Emblem
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004 , 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r匹配成功！\r\n" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(cm.isGloves(equipment.getItemId())) // Gloves
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r匹配成功！\r\n" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "如果你看到了这条消息，请联系Brandon。";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else
				{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(cm.isEquip(equipment.getItemId()) && cm.isAccessory(equipment.getItemId()) == false && cm.isRing(equipment.getItemId()) == false && cm.isEmblem(equipment.getItemId()) == false && !cm.isGloves(equipment.getItemId()))
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r匹配成功！\r\n" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else
				{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else if(cm.isAccessory(equipment.getItemId()) || cm.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042,40650, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,40001, 40002, 40003,40650, 40004,40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceRed);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r匹配成功！\r\n" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else
				{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else
			{
				cm.sendOk("你没有足够的附加潜能方块。");
				return cm.dispose();
			}
		}
		else if(selection == 5000 || isBpot == true) // BPOT Auto Cube
		{
			isBpot = true;
			if(cm.getQuantityOfItem(bonusCube) == 0)
				{
					cm.sendOk("你没有足够的金币来自动洗潜能。");
					return cm.dispose();
				}
				else if(equipment.getBonusPotential1() < 40000)
				{
					cm.sendOk("你没有足够的金币来洗潜能。");
					return cm.dispose();
				}
				else if(cm.getChar().getCSPoints(2) < autoCubePriceBonus)
				{
					cm.sendOk("你消耗了1个附加方块");
					return cm.dispose();
				}
				else if(cm.isWeapon(equipment.getItemId()) || cm.isSecondaryWeapon(equipment.getItemId()) || cm.isEmblem(equipment.getItemId()))
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004, 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(cm.isGloves(equipment.getItemId()))
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPrimePot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "如果你看到了这条消息，请联系Brandon。";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
				}
				else if(cm.isEquip(equipment.getItemId()) && cm.isAccessory(equipment.getItemId()) == false && cm.isRing(equipment.getItemId()) == false && cm.isEmblem(equipment.getItemId()) == false && !cm.isGloves(equipment.getItemId()))
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPrimePot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else if(cm.isAccessory(equipment.getItemId()) || cm.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40650, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40656, 40008, 40009, 40041, 40042, 40043,40650, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPrimePot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().gainMaplePoints(-autoCubePriceBonus);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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

				if(statSelected == 4 && totalLukPercent >= desiredStatNumber) // 敏捷%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 1 && totalAttPercent >= desiredStatNumber) // 魔法攻击力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 2 && totalMattPercent >= desiredStatNumber) // 掉落率%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 3 && totalDropPercent >= desiredStatNumber) // 运气%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 5 && totalDexPercent >= desiredStatNumber) // 智力%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 6 && totalIntPercent >= desiredStatNumber) // 力量%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 7 && totalStrPercent >= desiredStatNumber) // 全属性%
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else if(statSelected == 8 && totalStrPercent >= desiredStatNumber && totalIntPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber && totalDexPercent >= desiredStatNumber) // 这是#r免费洗潜能NPC#k，请选择你想洗潜能的物品。\r\n#b\r\n
				{
					cm.sendYesNo("#g（传说）#k暴击伤害8%" + cubingDiag + "#l");
				}
				else{
				cm.sendNext(cubingDiag + "#l");
				status--;
				}
			}
			else
			{
				cm.sendOk("你没有足够的附加潜能方块。");
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
					cm.sendOk("你的物品不是传说级或者没有潜能。");
					return cm.dispose();
				}
				else if(cm.isWeapon(equipment.getItemId()) || cm.isSecondaryWeapon(equipment.getItemId()) || cm.isEmblem(equipment.getItemId())) // Weapon, 2ndry, Emblem
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004 , 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "\r\nDP：" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
				else if(cm.isGloves(equipment.getItemId())) // Gloves
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "\r\nDP：" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "如果你看到了这条消息，请联系Brandon。";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
				else if(cm.isEquip(equipment.getItemId()) && cm.isAccessory(equipment.getItemId()) == false && cm.isRing(equipment.getItemId()) == false && cm.isEmblem(equipment.getItemId()) == false && !cm.isGloves(equipment.getItemId()))
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "\r\nDP：" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
			else if(cm.isAccessory(equipment.getItemId()) || cm.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042,40650, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,30001, 30002, 30003, 30004, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30054,40001, 40002, 40003,40650, 40004,40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setPotential1(randomPrimePot);
				equipment.setPotential2(randomPot2);
				equipment.setPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(redCube, -1);
				cm.getChar().dropMessage(5,"这些是你的潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "\r\nDP：" + redCube +": #" + cm.getQuantityOfItem(redCube) + "（无） " + "#L1\r\n\r\n";
				var basePot = [equipment.getPotential1(), equipment.getPotential2(),equipment.getPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
				cm.sendOk("你没有足够的附加潜能方块。");
				return cm.dispose();
			}

	}
	else if(status == 4 && cubeSelection == 2) // BPOT
	{

				if(cm.getQuantityOfItem(bonusCube) == 0)
				{
					cm.sendOk("你没有足够的金币来自动洗潜能。");
					return cm.dispose();
				}
				else if(cm.isWeapon(equipment.getItemId()) || cm.isSecondaryWeapon(equipment.getItemId()) || cm.isEmblem(equipment.getItemId()))
				{
				var wepPrimePotentials = [40001, 40002, 40003, 40004, 40011, 40012, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];
				var wepUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602,30001, 30002, 30003, 30004, 30006, 30011, 30012, 30041, 30042, 30043, 30044, 30045, 30046,30047,30051,30052,30054, 30070,30086,30291,30601,30602, 40001, 40002, 40003, 40004, 40011, 40012, 40041, 40041, 40042, 40043, 40044, 40045, 40046,40047,40051,40052, 40070,40081,40086,40291,40292,40601,40602,40603];				var randomPot = wepPrimePotentials[Math.floor(Math.random() * wepPrimePotentials.length)]; // Prime Line
				var randomPot2 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				var randomPot3 = wepUniquePotentials[Math.floor(Math.random() * wepUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r组合：" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "#L2\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
				else if(cm.isGloves(equipment.getItemId()))
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40057, 40008, 40009, 40041, 40042, 40043, 40044,40056, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,40057,  30041, 30042,40056, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPrimePot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r组合：" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "#L2\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					if(basePot[i] == 40056 || basePot[i] == 40057)
					{
						cubingDiag += "如果你看到了这条消息，请联系Brandon。";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
				else if(cm.isEquip(equipment.getItemId()) && cm.isAccessory(equipment.getItemId()) == false && cm.isRing(equipment.getItemId()) == false && cm.isEmblem(equipment.getItemId()) == false && !cm.isGloves(equipment.getItemId()))
				{
				var equipPrimePotentials = [40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPrimePot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r组合：" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "#L2\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
			else if(cm.isAccessory(equipment.getItemId()) || cm.isRing(equipment.getItemId()))
			{
				var equipPrimePotentials = [40001, 40002, 40003, 40004,40650, 40008, 40009, 40041, 40042, 40043, 40044, 40045, 40046, 40048,   40081, 40086,40656];
				var equipUniquePotentials = [30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,30001, 30002, 30003, 30004, 30006, 30008,  30041, 30042, 30043, 30044, 30045, 30046,30048,30053,30054,40001, 40002, 40003, 40004, 40656, 40008, 40009, 40041, 40042, 40043,40650, 40044, 40045, 40046, 40048,   40081, 40086];
				var randomPrimePot = equipPrimePotentials[Math.floor(Math.random() * equipPrimePotentials.length)]; // Prime Line
				var randomPot2 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				var randomPot3 = equipUniquePotentials[Math.floor(Math.random() * equipUniquePotentials.length)]; // Unique
				equipment.setBonusPotential1(randomPrimePot);
				equipment.setBonusPotential2(randomPot2);
				equipment.setBonusPotential3(randomPot3);
				cm.updateEquipSlot(equipment);
				cm.gainItem(bonusCube, -1);
				cm.getChar().dropMessage(5,"这些是你的附加潜能，你想使用方块吗？\r\n#r自动洗潜能：开启#k\r\n#v");
				var cubingDiag = "#r组合：" + bonusCube +": #" + cm.getQuantityOfItem(bonusCube) + "（无） " + "#L2\r\n\r\n";
				var basePot = [equipment.getBonusPotential1(), equipment.getBonusPotential2(),equipment.getBonusPotential3()];
				for(var i = 0; i < basePot.length; i++)
				{
					if(basePot[i] == 0)
					{
							cubingDiag += "#b（稀有）#k ";
					}
					else
					{
						var tier = Math.floor(basePot[i] / 10000)
							if(tier <= 1)
							{
								cubingDiag += "#d（史诗）#k";
							}
							else if(tier == 2)
							{
								cubingDiag += "#r（独特）#k";
							}
							else if(tier == 3)
							{
								cubingDiag += "#g（传说）#k";
							}
							else
							{
								cubingDiag += "你没有附加潜能方块了。";
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
				cm.sendOk("你没有足够的附加潜能方块。");
				return cm.dispose();
			}
	}
}