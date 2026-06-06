var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.sendOk("#r#e嘿，我是MapleBlade的投票点数NPC。你想做什么？#e#d");
        cm.dispose();
        return;
    }
					if (status == 0) {
		cm.sendSimple ("\r\n#L1##k如何获得投票点数？" + 
                "\r\n#L2##k查看我有多少投票点数！" +
		"\r\n#L3##k用投票点数兑换酷炫、稀有、超赞的物品！ :O" +
                "#e获得投票点数很简单！只需访问我们的网站：#rhttp://maple-blade.zapto.org#k 或 #bhttp://mapleblade.tk/#k 点击网站顶部导航栏的'Vote'按钮，输入你的MapleBlade账号ID/用户名 #e#r（不是角色名）#k，然后提交投票！ \r\n#r#e警告：投票时你必须处于登出状态！！！#k");
				 	} else if (selection == 1) {
					  cm.sendOk("#e你目前拥有(#r");
					  cm.dispose();
				 	} else if (selection == 2) {
					  cm.sendOk("#k)投票点数。" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
					  cm.dispose();
					} else if (selection == 3) {
                cm.sendSimple ("#k\r\n#L4##r用投票点数兑换NX现金"+
                 "#k\r\n#L5##b用投票点数兑换黄金扭蛋券" +
                 "#k\r\n#L6##r用投票点数兑换GM卷轴" +
                 "#k\r\n#L50##r用投票点数兑换枫叶" +
                 "#k\r\n#L60##r用投票点数兑换2张混沌卷轴"+
                 "#k\r\n#L61##r用投票点数兑换1张白卷轴"+
                 "你目前拥有(#r");
				 	} else if (selection == 4) {
		cm.sendSimple ("#k)投票点数。#e" + cm.getPlayer().getVote Points() + "#e选择你想要的：#e"+
		 "#k\r\n#L8##r6k NX现金 兑换1投票点数" +
                 "#k\r\n#L9##b12k NX现金 兑换2投票点数" +
                 "#k\r\n#L10##r18k NX现金 兑换3投票点数" +
                 "#k\r\n#L11##b24k NX现金 兑换4投票点数" +
                 "#k\r\n#L12##r30k NX现金 兑换5投票点数" +
                 "好的，以下是选项 \r\n#b你目前拥有：#k (#r");
        } else if (selection == 7) {
               cm.sendSimple ("#k) #b投票点数。#e#d" + cm.getPlayer().getVote Points() + "\r\n#L13##r#k用1 #r投票点数#k兑换2张 #i4031545#" + 
            "\r\n#L14##b#k用2 #r投票点数#k兑换4张 #i4031545#" + 
            "\r\n#L15##r#k用3 #r投票点数#k兑换6张 #i4031545#" + 
            "\r\n#L16##b#k用4 #r投票点数#k兑换8张 #i4031545#" + 
            "\r\n#L17##r#k用5 #r投票点数#k兑换10张 #i4031545#" + 
            "\r\n#L18##r#k用1 #r投票点数#k兑换2张 #i5220020#");
        } else if (selection == 5) {
               cm.sendSimple ("#k) #b投票点数。#e#d" + cm.getPlayer().getVote Points() + "\r\n#L13##r#k用1 #r投票点数#k兑换2张 #i4031545#" + 
            "\r\n#L19##b#k用2 #r投票点数#k兑换5张 #i5220020#" + 
            "\r\n#L20##r#k用3 #r投票点数#k兑换8张 #i5220020#" + 
            "\r\n#L21##b#k用4 #r投票点数#k兑换11张 #i5220020#" + 
            "\r\n#L22##r#k用5 #r投票点数#k兑换14张 #i5220020#" + 
            "选择一张#rGM卷轴#k！你目前拥有：(#r");
	  } else if (selection == 6) {
               cm.sendSimple ("#k)投票点数。 #e#d" + cm.getPlayer().getVote Points() + "#e选择你想要的： #e#d" + 
            "\r\n#L24##b#k用2 #r投票点数#k兑换弓攻击卷轴" + 
            "\r\n#L25##r#k用2 #r投票点数#k兑换披风魔防卷轴" + 
            "\r\n#L26##b#k用2 #r投票点数#k兑换披风物防卷轴" + 
            "\r\n#L27##r#k用2 #r投票点数#k兑换拳套攻击卷轴" + 
            "\r\n#L28##b#k用2 #r投票点数#k兑换弩攻击卷轴" + 
            "\r\n#L29##r#k用2 #r投票点数#k兑换短剑攻击卷轴" + 
            "\r\n#L31##r#k用2 #r投票点数#k兑换手套敏捷卷轴" + 
            "\r\n#L32##b#k用2 #r投票点数#k兑换头盔防御卷轴" + 
            "\r\n#L33##r#k用2 #r投票点数#k兑换头盔体力卷轴" + 
            "\r\n#L34##b#k用2 #r投票点数#k兑换单手斧攻击卷轴" + 
            "\r\n#L35##r#k用2 #r投票点数#k兑换单手钝器攻击卷轴" + 
            "\r\n#L36##b#k用2 #r投票点数#k兑换单手剑攻击卷轴" + 
            "\r\n#L37##r#k用2 #r投票点数#k兑换全身铠甲敏捷卷轴" + 
            "\r\n#L38##b#k用2 #r投票点数#k兑换枪攻击卷轴" + 
            "\r\n#L39##r#k用2 #r投票点数#k兑换盾牌防御卷轴" + 
            "\r\n#L40##b#k用2 #r投票点数#k兑换鞋子敏捷卷轴" + 
            "\r\n#L41##r#k用2 #r投票点数#k兑换鞋子跳跃卷轴" + 
            "\r\n#L42##b#k用2 #r投票点数#k兑换鞋子速度卷轴" + 
            "\r\n#L43##r#k用2 #r投票点数#k兑换矛攻击卷轴" + 
            "\r\n#L44##b#k用2 #r投票点数#k兑换长杖魔攻卷轴" + 
            "\r\n#L45##r#k用2 #r投票点数#k兑换上衣防御卷轴" + 
            "\r\n#L46##b#k用2 #r投票点数#k兑换双手斧攻击卷轴" + 
            "\r\n#L47##r#k用2 #r投票点数#k兑换双手钝器攻击卷轴" + 
            "\r\n#L48##b#k用2 #r投票点数#k兑换双手剑攻击卷轴" + 
            "\r\n#L49##r#k用2 #r投票点数#k兑换短杖魔攻卷轴" + 
            "你的#r投票点数#k不够！");
				    } else if (selection == 8) {
                var price = 5000000;
                if (cm.getPlayer().getVote Points() > 0) {      
                    cm.getPlayer().gainVote Points(-1);                    
                   cm.modifyNX(6000, 4);
                   cm.dispose();
                     } else {
                   cm.sendOk ("好的！这是你的2张 #i4031545#! 你现在拥有：(#r");
                   cm.dispose();
                   }
                } else if (selection == 9) {
                var price = 10000000;
                if (cm.getPlayer().getVote Points() > 1) {      
                    cm.getPlayer().gainVote Points(-2);                    
                   cm.modifyNX(12000, 4);
                   cm.dispose();
                     } else {
                   cm.sendOk ("好的！这是你的2张 #i4031545#! 你现在拥有：(#r");
                   cm.dispose();
                   }
                } else if (selection == 10) {
                var price = 15000000;
                if (cm.getPlayer().getVote Points() > 2) {      
                    cm.getPlayer().gainVote Points(-3);                    
                   cm.modifyNX(18000, 4);
                   cm.dispose();
                     } else {
                   cm.sendOk ("好的！这是你的2张 #i4031545#! 你现在拥有：(#r");
                   cm.dispose();
                   }
                } else if (selection == 11) {
                var price = 20000000;
                if (cm.getPlayer().getVote Points() > 3) {      
                    cm.getPlayer().gainVote Points(-4);                    
                   cm.modifyNX(24000, 4);
                   cm.dispose();
                     } else {
                   cm.sendOk ("好的！这是你的2张 #i4031545#! 你现在拥有：(#r");
                   cm.dispose();
                   }
                } else if (selection == 12) {
                if (cm.getPlayer().getVote Points() > 4) {      
                    cm.getPlayer().gainVote Points(-5);                    
                   cm.modifyNX(30000, 4);
                   cm.dispose();
                     } else {
                   cm.sendOk ("好的！这是你的2张 #i4031545#! 你现在拥有：(#r");
                   cm.dispose();
}
}
else if (selection == 13) {
                if (cm.getPlayer().getVote Points() > 0) {   
                    cm.getPlayer().gainVote Points(-1); 
		cm.gainItem(4031545, 2);
		cm.sendOk("好的！这是你的4张 #i4031545#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 14) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(4031545, 4);
		cm.sendOk("好的！这是你的6张 #i4031545#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 15) {
                if (cm.getPlayer().getVote Points() > 2) {   
                    cm.getPlayer().gainVote Points(-3); 
		cm.gainItem(4031545, 6);
		cm.sendOk("好的！这是你的8张 #i4031545#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 16) {
                if (cm.getPlayer().getVote Points() > 3) {   
                    cm.getPlayer().gainVote Points(-4); 
		cm.gainItem(4031545, 8);
		cm.sendOk("好的！这是你的10张 #i4031545#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 17) {
                if (cm.getPlayer().getVote Points() > 4) {   
                    cm.getPlayer().gainVote Points(-5); 
		cm.gainItem(4031545, 10);
		cm.sendOk("好的！这是你的2张 #i5220020#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
                   }
else if (selection == 18) {
                if (cm.getPlayer().getVote Points() > 0) {   
                    cm.getPlayer().gainVote Points(-1); 
		cm.gainItem(5220020, 2);
		cm.sendOk("好的！这是你的5张 #i5220020#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 19) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(5220020, 5);
		cm.sendOk("好的！这是你的8张 #i5220020#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 20) {
                if (cm.getPlayer().getVote Points() > 2) {   
                    cm.getPlayer().gainVote Points(-3); 
		cm.gainItem(5220020, 8);
		cm.sendOk("好的！这是你的11张 #i5220020#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 21) {
                if (cm.getPlayer().getVote Points() > 3) {   
                    cm.getPlayer().gainVote Points(-4); 
		cm.gainItem(5220020, 11);
		cm.sendOk("好的！这是你的14张 #i5220020#! 你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 22) {
                if (cm.getPlayer().getVote Points() > 4) {   
                    cm.getPlayer().gainVote Points(-5); 
		cm.gainItem(5220020, 14);
		cm.sendOk("做得好，这是你的GM卷轴！你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
                   }
else if (selection == 23) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040603, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 24) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044503, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 25) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2041024, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 26) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2041025, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 27) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044703, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 28) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044603, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 29) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2043303, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 30) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040807, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 31) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040806, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 32) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040006, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 33) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040007, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 34) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2043103, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 35) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2043203, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 36) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2043003, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 37) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040506, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 38) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044403, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 39) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040903, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 40) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040709, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 41) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040710, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 42) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040711, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 43) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044303, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 44) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2043803, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 45) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2040403, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 46) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044103, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 47) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044203, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 48) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2044003, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 49) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(2043703, 1);
		cm.sendOk("#r你的#r投票点数#k不够！" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
else if (selection == 50) {
               cm.sendSimple ("#k) #b投票点数。#e#d" + cm.getPlayer().getVote Points() + "\r\n#L13##r#k用1 #r投票点数#k兑换2张 #i4031545#" + 
            "\r\n#L52##b#k用2 #r投票点数#k兑换800 #i4001126#" + 
            "\r\n#L53##r#k用3 #r投票点数#k兑换1350 #i4001126#" + 
            "\r\n#L54##b#k用4 #r投票点数#k兑换2000 #i4001126#" + 
            "\r\n#L55##r#k用5 #r投票点数#k兑换2750 #i4001126#" + 
            "做得好，这是你的枫叶。你现在拥有：(#r");
			}
else if (selection == 51) {
                if (cm.getPlayer().getVote Points() > 0) {   
                    cm.getPlayer().gainVote Points(-1); 
		cm.gainItem(4001126, 350);
		cm.sendOk("做得好，这是你的2张 #i2049100#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 52) {
                if (cm.getPlayer().getVote Points() > 1) {   
                    cm.getPlayer().gainVote Points(-2); 
		cm.gainItem(4001126, 800);
		cm.sendOk("做得好，这是你的2张 #i2049100#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 53) {
                if (cm.getPlayer().getVote Points() > 2) {   
                    cm.getPlayer().gainVote Points(-3); 
		cm.gainItem(4001126, 1350);
		cm.sendOk("做得好，这是你的2张 #i2049100#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 54) {
                if (cm.getPlayer().getVote Points() > 3) {   
                    cm.getPlayer().gainVote Points(-4); 
		cm.gainItem(4001126, 2000);
		cm.sendOk("做得好，这是你的2张 #i2049100#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 55) {
                if (cm.getPlayer().getVote Points() > 4) {   
                    cm.getPlayer().gainVote Points(-5); 
		cm.gainItem(4001126, 2750);
		cm.sendOk("做得好，这是你的2张 #i2049100#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 60) {
                if (cm.getPlayer().getVote Points() > 0) {   
                    cm.getPlayer().gainVote Points(-1); 
		cm.gainItem(2049100, 2);
		cm.sendOk("做得好，这是你的3张 #2340000#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 61) {
                if (cm.getPlayer().getVote Points() > 0) {   
                    cm.getPlayer().gainVote Points(-1); 
		cm.gainItem(2340000, 1);
		cm.sendOk("做得好，这是你的 #i4032013#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
	else if (selection == 62) {
                if (cm.getPlayer().getVote Points() > 0) {   
                    cm.getPlayer().gainVote Points(-1); 
		cm.gainItem(4032013, 3);
		cm.sendOk("做得好，这是你的 #i4032013#。你现在拥有：(#r" + cm.getPlayer().getVote Points() + "#e选择你想要的：");
		cm.dispose();
	  } else {
		cm.sendOk("#r好的！这是你的2张 #i4031545#! 你现在拥有：(#r")
		cm.dispose();
		}
	}
			}
				 