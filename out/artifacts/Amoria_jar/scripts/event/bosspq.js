var points;
var status = -1;
var lobby = 0;//bosspq map id, to replace later
var sel;

function start() {
 var record = cm.getCData("bossquest");
 points = record == null ? "0" : record;
   cm.sendSimple("b#L3#当前积分#l#k \n\r #b#L0#传送至大厅#l\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \n\r #b#L41#5000积分兑换10K NX#l#k \n\r#b#L33#用附魔卷轴兑换积分(1000)#l#k \n\r #b#L36#用10000积分兑换竹子幸运袋#l#k  \n\r #b#L37#用竹子幸运袋兑换10000积分#l#k \n\r #b#L4##i1492023:#兑换需120,000积分 (永恒之眼)#l#k \n\r #b#L5##i1472068:#兑换需120,000积分 (永恒灯台)#l#k \n\r #b#L6##i1462050:#兑换需120,000积分 (永恒黑美人)#l#k \n\r #b#L7##i1452057:#兑换需120,000积分 (永恒之爪)#l#k \n\r #b#L8##i1432047:#兑换需120,000积分 (永恒阿奇)#l#k \n\r #b#L9##i1382057:#兑换需120,000积分 (永恒之手)#l#k \n\r #b#L10##i1372044:#兑换需120,000积分 (永恒泪滴)#l#k \n\r #b#L11##i1332074:#兑换需120,000积分 (永恒之剑)#l#k \n\r #b#L12##i1332073:#兑换需120,000积分 (永恒鱼人)#l#k \n\r #b#L13##i1482023:#兑换需120,000积分 (永恒equinox)#l#k \n\r #b#L14##i1442063:#兑换需120,000积分 (永恒diesra)#l#k \n\r #b#L15##i1422037:#兑换需120,000积分 (永恒钟楼)#l#k \n\r #b#L16##i1412033:#兑换需120,000积分 (永恒tabarzin)#l#k \n\r #b#L17##i1402046:#兑换需120,000积分 (永恒尼伯海姆)#l#k \n\r #b#L18##i1322060:#兑换需120,000积分 (永恒allargando)#l#k \n\r #b#L19##i1312037:#兑换需120,000积分 (永恒bardiche)#l#k \n\r #b#L20##i1302081:#兑换需120,000积分 (永恒执行者)#l#k \n\r #b#L31##i1342011:#兑换需120,000积分 (永恒太刀)#l#k" + (cm.isGMS() ? "\n\r #b#L34##i1532015:#兑换需120,000积分 (湮灭者)#l#k" : "") + "\n\r #b#L21##i2070018:#兑换需125,000积分 (平衡之怒)#l#k \n\r #b#L35##i2070016:#兑换需75,000积分 (水晶梨)#l#k \n\r #b#L22# #i1122017:#兑换需30,000积分 ( fairy pendant, 持续1天)#l#k \n\r #b#L27##i2340000:#兑换需75,000积分 (白卷轴)#l#k \n\r #b#L38##i2530000:#兑换需75,000积分 (幸运日)#l \n\r #b#L39##i2531000:#兑换需150,000积分 (保护卷轴)#l#k");
}
//Prizes are under construction, but this will do for now.
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
	if (status == 0) {
	sel = selection;
	switch (selection) {
	    case 0:
	    case 1:
	    case 2:
	    case 28:
		cm.warp(lobby,0);
		break;
	    case 3:
		cm.sendOk("#b当前BPQ积分 : " + points);
		break;
	    case 4: // Timeless Blindness
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1492023)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1492023, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
		case 40: // Timeless Blooms
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1522015)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1522015, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
		
	    case 5: // Timeless Lampion
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1472068)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1472068, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 6: // Timeless Black Beauty
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1462050)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1462050, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 7: // Timeless Engaw
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1452057)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1452057, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 8: // Timeless Alchupiz
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1432047)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1432047, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 9: // Timeless Aeas Hand
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1382057)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1382057, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
    	    case 10: // Timeless Enreal Tear
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1372044)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1372044, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
  	    case 11: // Timeless Killic
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1332074)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1332074, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 12: // Timeless Pescas
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1332073)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1332073, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 13: // Timeless Equinox
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1482023)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1482023, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 14: // Timeless Diesra
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1442063)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1442063, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 15: // Timeless Bellocce
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1422037)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1422037, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 16: // Timeless Tabarzin
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1412033)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1412033, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 17: // Timeless Nibleheim
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1402046)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1402046, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 18: // Timeless Allargando
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1322060)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1322060, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 19: // Timeless Bardiche
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1312037)) {
			intPoints -= 1312037;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(2049100, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 20: // Timeless Executioners
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1302081)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1302081, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;		
	    case 21: // Balanced Fury
		var intPoints = parseInt(points);

		if (intPoints >= 125000) {
		    if (cm.canHold(2070018)) {
			intPoints -= 125000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(2070018, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 22: // Fairy Pendant
		var intPoints = parseInt(points);

		if (intPoints >= 30000) {
		    if (cm.canHold(1122017)) {
			intPoints -= 30000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItemPeriod(1122017, 1, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
	    case 27:
		var intPoints = parseInt(points);

		if (intPoints >= 75000) {
		    if (cm.canHold(2340000)) {
			intPoints -= 75000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(2340000, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 29:
		var intPoints = parseInt(points);

		if (intPoints >= 15000) {
		    if (cm.canHold(5490001)) {
			intPoints -= 15000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(5490001, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 30:
		var intPoints = parseInt(points);

		if (intPoints >= 30000) {
		    if (cm.canHold(5490000)) {
			intPoints -= 30000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(5490000, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 31: // Timeless Katara
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1342011)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1342011, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 34: // Obliterator
		var intPoints = parseInt(points);

		if (intPoints >= 120000) {
		    if (cm.canHold(1532015)) {
			intPoints -= 120000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(1532015, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 32: //Enchanted Scroll, used to buy/sell BossPQ points
		var intPoints = parseInt(points);
	        if (intPoints < 1000) {
		    cm.sendOk("你需要至少1000积分来兑换附魔卷轴。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想要多少？(1个附魔卷轴 = 1000积分)(当前积分: " + intPoints + ")(当前卷轴: " + cm.getPlayer().itemQuantity(5221001) + ")", intPoints / 1000, 1, intPoints / 1000);
	        }
		break;
	    case 33: //points
		var intPoints = parseInt(points);
	        if (!cm.getPlayer().haveItem(5221001)) {
		    cm.sendOk("你需要至少1个附魔卷轴。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想兑换多少？(1个附魔卷轴 = 1000积分)(当前卷轴: " + cm.getPlayer().itemQuantity(5221001) + ")(当前积分: " + intPoints + ")", cm.getPlayer().itemQuantity(5221001), 1, cm.getPlayer().itemQuantity(5221001));
	        }
		break;
	    case 36: //item
		var intPoints = parseInt(points);
	        if (intPoints < 10000) {
		    cm.sendOk("你需要至少10000积分来兑换竹子幸运袋。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想要多少？(1个竹子幸运袋 = 10000积分)(当前积分: " + intPoints + ")(当前数量: " + cm.getPlayer().itemQuantity(3993002) + ")", intPoints / 10000, 1, intPoints / 10000);
	        }
		break;
	    case 37: //points
		var intPoints = parseInt(points);
	        if (!cm.getPlayer().haveItem(3993002)) {
		    cm.sendOk("你需要至少1个竹子幸运袋。");
		    cm.dispose();
	        } else {
		    cm.sendGetNumber("你想兑换多少？(1个竹子幸运袋 = 10000积分)(当前数量: " + cm.getPlayer().itemQuantity(3993002) + ")(当前积分: " + intPoints + ")", cm.getPlayer().itemQuantity(3993002), 1, cm.getPlayer().itemQuantity(3993002));
	        }
		break;
	    case 38:
		var intPoints = parseInt(points);

		if (intPoints >= 75000) {
		    if (cm.canHold(2530000)) {
			intPoints -= 75000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(2530000, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 39:
		var intPoints = parseInt(points);

		if (intPoints >= 150000) {
		    if (cm.canHold(2531000)) {
			intPoints -= 150000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(2531000, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;	
	    case 35: // Crystal Ilbi
		var intPoints = parseInt(points);

		if (intPoints >= 75000) {
		    if (cm.canHold(2070016)) {
			intPoints -= 75000;
			cm.setCData("bossquest", ""+intPoints+"");
			cm.gainItem(2070016, 1);
			cm.sendOk("请享受你的奖励！");
		    } else {
			cm.sendOk("请检查你的背包空间是否足够。")
		    }
		} else {
		    cm.sendOk("请检查你的积分是否足够，当前积分 : " + points);
		}
		break;
		case 40:
			cm.warp(219010000,0);
			break;
		case 41:
			cm.warp(219020000,0);
			break;
	}
	} else {
	    var intPoints = parseInt(points);
	    if (sel == 32) {
		if (selection >= 1 && selection <= (intPoints / 1000)) {
			if (selection > (intPoints / 1000)) {
				cm.sendOk("你最多只能获得 " + (intPoints / 1000) + " 个卷轴。1个卷轴 = 1000积分。");
			} else if (!cm.canHold(5221001, selection)) {
				cm.sendOk("请在现金栏留出空间。");
			} else {
				cm.gainItem(5221001, selection);
				intPoints -= selection * 1000;
				cm.setCData("bossquest", ""+intPoints+"");
				cm.sendOk("你获得了 " + selection + " 个卷轴，失去了 " + (selection * 1000) + " 积分。当前积分: " + intPoints);
			}
		}
	    }if (sel == 41) {
		if (selection >= 1 && selection <= (intPoints / 5000)) {
			if (selection > (intPoints / 5000)) {
				cm.sendOk("你最多只能获得 " + (intPoints / 5000 * 10) + "k NX现金。10K NX = 5000积分。");
			} else {
				./cm.gainCash();//
				intPoints -= selection * 5000;
				cm.setCData("bossquest", ""+intPoints+"");
				cm.sendOk("你获得了 " + (selection * 10) + "K NX现金，失去了 " + (selection * 5000) + " 积分。当前积分: " + intPoints);
			}
		}
	    } else if (sel == 33) {
		if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(5221001)) {
			if (intPoints > (2147483647 - (selection * 1000))) {
				cm.sendOk("你的积分太多了。");
			} else {
				cm.gainItem(5221001, -selection);
				intPoints += selection * 1000;
				cm.setCData("bossquest", ""+intPoints+"");
				cm.sendOk("你失去了 " + selection + " 个卷轴，获得了 " + (selection * 1000) + " 积分。当前积分: " + intPoints);
			}
		} 
	    } else if (sel == 36) {
		if (selection >= 1 && selection <= (intPoints / 10000)) {
			if (selection > (intPoints / 10000)) {
				cm.sendOk("你最多只能获得 " + (intPoints / 10000) + " 个。1个物品 = 10000积分。");
			} else if (!cm.canHold(3993002, selection)) {
				cm.sendOk("请在装备栏留出空间。");
			} else {
				cm.gainItem(3993002, selection);
				intPoints -= selection * 10000;
				cm.setCData("bossquest", ""+intPoints+"");
				cm.sendOk("你获得了 " + selection + " 个，失去了 " + (selection * 10000) + " 积分。当前积分: " + intPoints);
			}
		}
	    } else if (sel == 37) {
		if (selection >= 1 && selection <= cm.getPlayer().itemQuantity(3993002)) {
			if (intPoints > (2147483647 - (selection *10000))) {
				cm.sendOk("你的积分太多了。");
			} else {
				cm.gainItem(3993002, -selection);
				intPoints += selection * 10000;
				cm.setCData("bossquest", ""+intPoints+"");
				cm.sendOk("你失去了 " + selection + " 个，获得了 " + (selection * 10000) + " 积分。当前积分: " + intPoints);
			}
		} 
	    }
	    cm.dispose();
	}
    }
    if (selection != 32 && selection != 33 && selection != 36 && selection != 37) {
        cm.dispose();
    }
}