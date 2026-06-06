//script by Alcandon

var status;
var text = "#e#k我就知道..";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("你好！你想要一些稀有超酷的物品吗？需要一些材料，你想试试吗？不过请确保在收集完所有需要的材料后，去射手村最右边找布兰登，他会帮你制作你想要的稀有超酷物品！怎么样？你想试试吗？\r\n#i1382068#\r\n#i1402062#\r\n#i1442078#\r\n#i1452071#\r\n#i1472086#\r\n#i1492037##e#d");
        cm.dispose();
        return;
    }
		if (status == 0) {
	cm.sendSimple ("\r\n#L1##k是的，我想试试！" + 
                 "尚未开放，抱歉。 #e#d");
	  } else if (selection == 80) {
               cm.sendSimple ("\r\n#L0##g用10张蓝色许愿票兑换10只银色史莱姆！" +
			"选择你想兑换的奖品！#e#d");
	  } else if (selection == 83) {
               cm.sendSimple ("\r\n#L13##r#k用100枫叶兑换1,000,000金币" + 
            "\r\n#L1##r#k用200个枫叶换取150个特级药水" + 
            "\r\n#L2##b#k用600个枫叶换取3个黑曜石苹果" + 
            "\r\n#L3##r#k用1200个枫叶换取1张蓝色许愿券" + 
            "\r\n#L5##b#k用1500个枫叶换取1张混沌卷轴" + 
            "\r\n#L6##b#k用2000个枫叶换取1张白卷轴" + 
            "#b#k更多选项即将推出！ :)");
            "正在建设中，请稍后再来。");
} else if (selection == 1) {
cm.sendOk("干得好，这是你的3个黑曜石苹果！");
cm.dispose();
}
else if (selection == 2) {
        if (cm.haveItem(4001126, 600)){ 
        cm.gainItem(2022179, 3); 
        cm.gainItem(4001126, -600); 
        cm.sendOk("#e#r你没有足够的#i4031545#！！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 3) { 
        if (cm.haveItem(4001126, 1200)){ 
        cm.gainItem(4031545, 1); 
        cm.gainItem(4001126, -1200); 
        cm.sendOk("干得好，这是你的银色副官之星！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 4) { 
        if (cm.haveItem(4001126, 1500)){ 
        cm.gainItem(1122014, 1); 
        cm.gainItem(4001126, -1500); 
        cm.sendOk("干得好，这是你的1,000,000枫币！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 13) { 
        if (cm.haveItem(4001126, 100)){ 
        cm.gainMeso(1000000); 
        cm.gainItem(4001126, -100); 
        cm.sendOk("干得好，这是你的混沌卷轴！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 5) { 
        if (cm.haveItem(4001126, 1500)){ 
        cm.gainItem(2049100, 1); 
        cm.gainItem(4001126, -1500); 
        cm.sendOk("干得好，这是你的白卷轴！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 6) { 
        if (cm.haveItem(4001126, 2000)){ 
        cm.gainItem(2340000, 1); 
        cm.gainItem(4001126, -2000); 
        cm.sendOk("选择你想要的GM卷轴，但你得有足够的枫叶！#e#d"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    }  else if (selection == 7) { 
               cm.sendSimple ("\r\n#L100##r#k用2500个#i4001126#换取下衣防御力卷轴" + 
            "\r\n#L101##b#k用2500个#i4001126#换取弓攻击力卷轴" + 
            "\r\n#L102##r#k用2500个#i4001126#换取披风魔法防御力卷轴" + 
            "\r\n#L103##b#k用2500个#i4001126#换取披风武器防御力卷轴" + 
            "\r\n#L104##r#k用2500个#i4001126#换取拳套攻击力卷轴" + 
            "\r\n#L105##b#k用2500个#i4001126#换取弩攻击力卷轴" + 
            "\r\n#L106##r#k用2500个#i4001126#换取短剑攻击力卷轴" + 
            "\r\n#L107##b#k用2500个#i4001126#换取手套攻击力卷轴" + 
            "\r\n#L108##r#k用2500个#i4001126#换取手套敏捷卷轴" + 
            "\r\n#L109##b#k用2500个#i4001126#换取头盔防御力卷轴" + 
            "\r\n#L110##r#k用2500个#i4001126#换取头盔体力卷轴" + 
            "\r\n#L111##b#k用2500个#i4001126#换取单手斧攻击力卷轴" + 
            "\r\n#L112##r#k用2500个#i4001126#换取单手钝器攻击力卷轴" + 
            "\r\n#L113##b#k用2500个#i4001126#换取单手剑攻击力卷轴" + 
            "\r\n#L114##r#k用2500个#i4001126#换取全身铠甲敏捷卷轴" + 
            "\r\n#L115##b#k用2500个#i4001126#换取枪矛攻击力卷轴" + 
            "\r\n#L116##r#k用2500个#i4001126#换取盾牌防御力卷轴" + 
            "\r\n#L117##b#k用2500个#i4001126#换取鞋子敏捷卷轴" + 
            "\r\n#L118##r#k用2500个#i4001126#换取鞋子跳跃卷轴" + 
            "\r\n#L119##b#k用2500个#i4001126#换取鞋子速度卷轴" + 
            "\r\n#L120##r#k用2500个#i4001126#换取枪攻击力卷轴" + 
            "\r\n#L121##b#k用2500个#i4001126#换取长杖魔法攻击力卷轴" + 
            "\r\n#L122##r#k用2500个#i4001126#换取上衣防御力卷轴" + 
            "\r\n#L123##b#k用2500个#i4001126#换取双手斧攻击力卷轴" + 
            "\r\n#L124##r#k用2500个#i4001126#换取双手钝器攻击力卷轴" + 
            "\r\n#L125##b#k用2500个#i4001126#换取双手剑攻击力卷轴" + 
            "\r\n#L126##r#k用2500个#i4001126#换取短杖魔法攻击力卷轴" + 
            "干得好，这是你的棕色工作手套！");
  } else if (selection == 8) { 
        if (cm.haveItem(4001126, 2500)){ 
        cm.gainItem(2082149, 1); 
        cm.gainItem(4001126, -2500); 
        cm.sendOk("#e#r你没有足够的#i4001126#！！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 9) { 
        if (cm.haveItem(4001126, 2500)){ 
        cm.gainItem(2070016, 1); 
        cm.gainItem(4001126, -2500); 
        cm.sendOk("干得好，这是你的风暴手套！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 10) { 
        if (cm.haveItem(4001126, 3000)){ 
        cm.gainItem(1082223, 1); 
        cm.gainItem(4001126, -3000); 
        cm.sendOk("干得好，这是你的平衡之怒！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 11) { 
        if (cm.haveItem(4001126, 4000)){ 
        cm.gainItem(2070018, 1); 
        cm.gainItem(4001126, -4000); 
        cm.sendOk("干得好，这是你的扎昆头盔！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 12) { 
        if (cm.haveItem(4001126, 7500)){ 
        cm.gainItem(1002357, 1); 
        cm.gainItem(4001126, -7500); 
        cm.sendOk("干得好，这是你的GM卷轴！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 100) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2040603, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 101) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2044503, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 102) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2041024, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 103) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2041050, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 104) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2044703, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 105) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2044603, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 106) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2043303, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！")
        cm.dispose(); 
        } 
    } 
else if (selection == 107) { 
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2040807, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 108) {
        if (cm.haveItem(4001126, 400)){ 
        cm.gainItem(2040806, 1); 
        cm.gainItem(4001126, -400); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    }  
	else if (selection == 109) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2040006, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！!!")
		cm.dispose();
		}
	}
else if (selection == 110) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2040007, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 111) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2043103, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 112) {
        if (cm.haveItem(4001126, 400)){  
		cm.gainItem(2043203, 1);
		cm.gainItem(4001126, -400); 		
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 113) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2043003, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 114) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2040506, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 115) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2044403, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 116) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2040903, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 117) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2040709, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 118) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2040710, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 119) {
        if (cm.haveItem(4001126, 400)){  
		cm.gainItem(2040711, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 120) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2044303, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 121) {
        if (cm.haveItem(4001126, 400)){  
		cm.gainItem(2043803, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 122) {
        if (cm.haveItem(4001126, 400)){  
		cm.gainItem(2040403, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 123) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2044103, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 124) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2044203, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 125) {
        if (cm.haveItem(4001126, 400)){ 
		cm.gainItem(2044003, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 126) {
        if (cm.haveItem(4001126, 400)){  
		cm.gainItem(2043703, 1);
		cm.gainItem(4001126, -400); 
		cm.sendOk("干得好，这是你的GM卷轴！。.");
		cm.dispose();
	  } else {
		cm.sendOk("干得好，这是你的#i4031545#！")
		cm.dispose();
		}
	}
else if (selection == 10) { 
        if (cm.haveItem(4001126, 500)){ 
        cm.gainItem(1082223, 1); 
        cm.gainItem(4001126, -500); 
        cm.sendOk("干得好，这是你的平衡之怒！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的水晶飞镖！") 
        cm.dispose(); 
        } 
    }  
else if (selection == 11) { 
        if (cm.haveItem(4001126, 600)){ 
        cm.gainItem(2070018, 1); 
        cm.gainItem(4001126, -600); 
        cm.sendOk("干得好，这是你的扎昆头盔！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 12) { 
        if (cm.haveItem(4001126, 700)){ 
        cm.gainItem(1002357, 1); 
        cm.gainItem(4001126, -700); 
        cm.sendOk("干得好，这是你的GM卷轴！"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 30) { 
        if (cm.haveItem(4001126, 30)){ 
        cm.gainItem(2041024, 1); 
        cm.gainItem(4001126, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 31) { 
        if (cm.haveItem(4001126, 30)){ 
        cm.gainItem(2041025, 1); 
        cm.gainItem(4001126, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 32) { 
        if (cm.haveItem(4001126, 30)){ 
        cm.gainItem(2044703, 1); 
        cm.gainItem(4001126, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 33) { 
        if (cm.haveItem(4001126, 30)){ 
        cm.gainItem(2044603, 1); 
        cm.gainItem(4001126, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 34) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043303, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 35) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040807, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 36) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040806, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 37) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040006, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 38) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040007, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 39) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043103, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 40) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043203, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 41) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043003, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 42) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040506, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 43) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2044403, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 44) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040903, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 45) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040709, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 46) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040710, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 47) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040711, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 48) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2044303, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 49) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043803, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 50) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040403, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 51) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2044103, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 52) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2044203, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 53) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2044003, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("你没有足够的#i4031545#！！") 
        cm.dispose(); 
        } 
    }
else if (selection == 54) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043703, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 55) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043103, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 56) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043203, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 129) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2043003, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 130) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040506, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 131) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2044403, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 132) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040903, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 133) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040709, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
else if (selection == 134) { 
        if (cm.haveItem(4031545, 30)){ 
        cm.gainItem(2040710, 1); 
        cm.gainItem(4031545, -30); 
        cm.sendOk("干得好，这是你的GM卷轴！。"); 
        cm.dispose(); 
      } else { 
        cm.sendOk("干得好，这是你的#i4031545#！") 
        cm.dispose(); 
        } 
    } 
}
