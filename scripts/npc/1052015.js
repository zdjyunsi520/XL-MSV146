var status = -1;
var sel = 0;

function action(mode, type, selection) {
	if (mode != 1) {
    		cm.dispose();
	} else {
		status++;
		if (cm.getPlayer().getBattler(0) == null) {
			cm.sendOk("你需要先拥有一只怪物。");
			cm.dispose();	
			return;
		}
		if (cm.getPlayer().getMapId() == 193000000) {
			if (status == 0) {
				cm.sendSimple("我可以带你去对战塔，在那里你将与其他怪物对战……\r\n\r\n#b#L0# #v03994115##l #L1# #v03994116##l #L2# #v03994117##l #L3# #v03994118##l");
			} else if (status == 1) {
				sel = selection;
				var num = 0;
				var averageLevel = 0;
				var battlers = cm.getPlayer().getBattlers();
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null) {
						if (battlers[i].getLevel() > averageLevel) {
							averageLevel = battlers[i].getLevel();
						}
						num++;
					}
				}	
				averageLevel |= 0;
				var selStr = "#v0" + (3994115 + sel) + "#\r\n目前你拥有 " + num + " 只怪物，最高等级为 " + averageLevel + "。\r\n\r\n#e此模式将适用以下规则和限制#n：\r\n- 你目前拥有的怪物数量将决定每位玩家可使用的怪物数量。\r\n- 你不能逃跑或对训练师怪物使用球。\r\n- 你的队伍中至少需要3只怪物。\r\n";
				if (sel == 0) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过10级。\r\n- 你将面对的怪物等级范围从你最高等级以下10级到你的最高等级。\r\n- 如果你的任何怪物超过150级，将被重置为150级。\r\n- 此模式没有奖励，只有怪物经验值。\r\n\r\n点击下一步开始此模式。"); 
				} else if (sel == 1) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过10级。\r\n- 你将面对的怪物等级范围从你最高等级以下5级到你的最高等级以上5级。\r\n- 如果你的任何怪物超过150级，将被重置为150级。\r\n- 除了获得经验值外，每场胜利后还将获得物品奖励。\r\n\r\n点击下一步开始此模式。"); 
				} else if (sel == 2) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过10级。\r\n- 你将面对的怪物等级范围从你的最高等级到你的最高等级以上10级。\r\n- 如果你的任何怪物超过150级，将被重置为150级。\r\n- 除了获得经验值外，每场胜利后还将获得物品奖励。\r\n\r\n点击下一步开始此模式。"); 
				} else if (sel == 3) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过100级。\r\n- 你将只面对低于你最高等级的BOSS。\r\n- 除了获得经验值外，每场胜利后还将获得物品奖励。\r\n\r\n点击下一步开始此模式。"); 
				} else {
					cm.dispose();
				}
			} else if (status == 2) {
				cm.warp(925020010 + sel);
				cm.dispose();
			}
		} else if (cm.getPlayer().getMapId() == 925020010 || cm.getPlayer().getMapId() == 925020011 || cm.getPlayer().getMapId() == 925020012 || cm.getPlayer().getMapId() == 925020013) { //easy
			if (status == 0) {
				var num = 0;
				var averageLevel = 0;
				var battlers = cm.getPlayer().getBattlers();
				for (var i = 0; i < battlers.length; i++) {
					if (battlers[i] != null) {
						if (battlers[i].getLevel() > averageLevel) {
							averageLevel = battlers[i].getLevel();
						}
						num++;
					}
				}	
				averageLevel |= 0;
				var selStr = "#v0" + (3994115 + (cm.getPlayer().getMapId() - 925020010)) + "#\r\n目前你拥有 " + num + " 只怪物，最高等级为 " + averageLevel + "。\r\n\r\n#e此模式将适用以下规则和限制#n：\r\n- 你目前拥有的怪物数量将决定每位玩家可使用的怪物数量。\r\n- 你不能逃跑或对训练师怪物使用球。\r\n- 进入至少需要3只怪物。\r\n";
				if (cm.getPlayer().getMapId() == 925020010) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过10级。\r\n- 你将面对的怪物等级范围从你最高等级以下10级到你的最高等级。\r\n- 如果你的任何怪物超过150级，将被重置为150级。\r\n- 此模式没有奖励，只有怪物经验值。\r\n\r\n点击下一步开始此模式。"); 
				} else if (cm.getPlayer().getMapId() == 925020011) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过10级。\r\n- 你将面对的怪物等级范围从你最高等级以下5级到你的最高等级以上5级。\r\n- 如果你的任何怪物超过150级，将被重置为150级。\r\n- 除了获得经验值外，每场胜利后还将获得物品奖励。\r\n\r\n点击下一步开始此模式。"); 
				} else if (cm.getPlayer().getMapId() == 925020012) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过10级。\r\n- 你将面对的怪物等级范围从你的最高等级到你的最高等级以上10级。\r\n- 如果你的任何怪物超过150级，将被重置为150级。\r\n- 除了获得经验值外，每场胜利后还将获得物品奖励。\r\n\r\n点击下一步开始此模式。"); 
				} else if (cm.getPlayer().getMapId() == 925020013) {
					cm.sendNext(selStr + "- 你拥有的怪物最高等级必须超过100级。\r\n- 你将只面对低于你最高等级的BOSS。\r\n- 除了获得经验值外，每场胜利后还将获得物品奖励。\r\n\r\n点击下一步开始此模式。"); 
				} else {
					cm.dispose();
				}
			} else {
				if (cm.getPlayer().getMapId() == 925020010) {
					var npcTeam = cm.makeTeam(-10, 0, 10, 150);
					if (npcTeam == null) {
						cm.sendOk("你没有满足一个或多个条件。请重新检查。");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
					}
				} else if (cm.getPlayer().getMapId() == 925020011) {
					var npcTeam = cm.makeTeam(-5, 5, 10, 150);
					if (npcTeam == null) {
						cm.sendOk("你没有满足一个或多个条件。请重新检查。");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
					}
				} else if (cm.getPlayer().getMapId() == 925020012) {
					var npcTeam = cm.makeTeam(0, 10, 10, 150);
					if (!cm.canHold()) {
						cm.sendOk("请确保所有背包中都有足够的空位。");
					} else if (npcTeam == null) {
						cm.sendOk("你没有满足一个或多个条件。请重新检查。");
					} else {
						cm.preparePokemonBattle(npcTeam, 150);
					}
				} else if (cm.getPlayer().getMapId() == 925020013) {
					var npcTeam = cm.makeTeam(0, 0, 100, 200);
					if (!cm.canHold()) {
						cm.sendOk("请确保所有背包中都有足够的空位。");
					} else if (npcTeam == null) {
						cm.sendOk("你没有满足一个或多个条件。请重新检查。");
					} else {
						cm.preparePokemonBattle(npcTeam, 200);
					}
				}
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
	}
}