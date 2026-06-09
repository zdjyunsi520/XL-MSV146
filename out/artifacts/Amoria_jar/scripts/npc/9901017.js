//script by Alcandon

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple ("#k) #r另外，请阅读职业等级表 :)。 #k\r\n#L0#我想提升一个职业等级！\r\n#L1#呃..我还不确定..\r\n#L3#查看职业等级表！" + cm.getPlayer().getOccupation() + "你目前的职业等级是：(#b");
				 } else if (selection == 0) {
          cm.sendSimple ("#k)。更多信息请阅读职业等级表。我想晋升到...#e#d" + cm.getPlayer().getOccupation() + "#k\r\n#L45#Lv.1 #b菜鸟之刃#k #r[需要等级70]" +
                 "#k\r\n#L46#Lv.2 #b暴风之刃#k #r[需要1次转生]" +
                 "#k\r\n#L47#Lv.3 #b灵魂之刃#k #r[需要5次转生]" +
                 "#k\r\n#L48#Lv.4 #b死神之刃#k #r[需要15次转生]" +
                 "#k\r\n#L49#Lv.5 #b恶魔之刃#k #r[需要30次转生]#r (不同任务)" +
                 "#k\r\n#L50#Lv.6 #b暗夜之刃#k #r[需要70次转生]#r (不同任务)" +
                 "#k\r\n#L51#Lv.7 #b卍解之刃#k #r[需要150次转生]#r (不同任务)" +
		         "#k\r\n#L52#Lv.8 #b神圣之刃#k #r #r[需要450次转生] (不同任务)" +
                 "#k\r\n#L53#Lv.9 #b副官之刃#k #r[需要700次转生] (不同任务)" +
				 "#k\r\n#L54#Lv.10 #b剑圣#k #r[需要2000次转生] (不同任务)#k" +
                 "恭喜，你现在是一名#b菜鸟之刃#k :) 你的经验倍率现在是300倍！");
				 } else if (selection == 45) {
				  if (cm.getLevel() > 69 && cm.HasOccupation0())  {
				  cm.changeOccupationById(100);
				  cm.gainItem(1142109, 1);
				  cm.sendOk("你的等级不够成为#b菜鸟之刃#k，或者你已经是#b菜鸟之刃#k或更高等级。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("恭喜，你现在是一名#b暴风之刃#k :) 你的经验倍率现在是350倍，金币倍率100倍。")
				  cm.dispose();
				  }
				} else if (selection == 46) {
				if(cm.getPlayer().getrebirths() > 0 && cm.HasOccupation1()) {
				  cm.changeOccupationById(110);
				  cm.sendOk("你的转生次数不够成为#b暴风之刃#k，或者你已经是#b暴风之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("恭喜，你现在是一名#b灵魂之刃#k :) 你的经验倍率现在是400倍，金币倍率200倍。");
				  cm.dispose();
				  }
				} else if (selection == 47) {
				if(cm.getPlayer().getrebirths() > 4 && cm.HasOccupation2()) {
				  cm.changeOccupationById(120);
				  cm.sendOk("你的转生次数不够成为#b灵魂之刃#k，或者你已经是#b灵魂之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("恭喜，你现在是一名#b死神之刃#k :) 你的经验倍率现在是450倍，金币倍率300倍。");
				  cm.dispose();
				  }
				} else if (selection == 48) {
				if(cm.getPlayer().getrebirths() > 14 && cm.HasOccupation3()) {
				  cm.changeOccupationById(130);
				  cm.sendOk("你的转生次数不够成为#b死神之刃#k，或者你已经是#b死神之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("恭喜，你现在是一名#b恶魔之刃#k :) 你的经验倍率现在是500倍，金币倍率400倍。");
				  cm.dispose();
				  }
				} else if (selection == 49) {
				if(cm.getPlayer().getrebirths() > 29 && cm.HasOccupation4()) {
				  cm.changeOccupationById(140);
				  cm.sendOk("你的转生次数不够成为#b恶魔之刃#k，或者你已经是#b恶魔之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("如果你想晋升到下一个职业等级，请尝试与第6职业对话 :)");
				  cm.dispose();
				  }
				} else if (selection == 50) {
				if(cm.getPlayer().getrebirths() > 69 && cm.HasOccupation5()) {
				  cm.warp(300000012);
				  cm.sendOk("你的转生次数不够成为#b暗夜之刃#k，或者你已经是#b暗夜之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("如果你想晋升到下一个职业等级，请尝试与第7职业对话 :)");
				  cm.dispose();
				  }
				  } else if (selection == 51) {
				if(cm.getPlayer().getrebirths() > 149 && cm.HasOccupation6()) {
				  cm.warp(541010100);
				  cm.sendOk("你的转生次数不够成为#b卍解之刃#k，或者你已经是#b卍解之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("如果你想晋升到下一个职业等级，请尝试与第8职业对话 :)");
				  cm.dispose();
				  }
				  } else if (selection == 52) {
				if(cm.getPlayer().getrebirths() > 449 && cm.HasOccupation7()) {
				  cm.warp(970010000);
				  cm.sendOk("你的转生次数不够成为#b神圣之刃#k，或者你已经是#b神圣之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("如果你想晋升到下一个职业等级，请尝试与第9职业对话 :)");
				  cm.dispose();
				  }
				  } else if (selection == 53) {
				if(cm.getPlayer().getrebirths() > 699 && cm.HasOccupation8()) {
				  cm.warp(261030000);
				  cm.sendOk("你的转生次数不够成为#b副官之刃#k，或者你已经是#b副官之刃#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("如果你想晋升到下一个职业等级，请尝试与剑圣对话 :)");
				  cm.dispose();
				  }
				  } else if (selection == 54) {
				if(cm.getPlayer().getrebirths() > 1999 && cm.HasOccupation9()) {
				  cm.warp(240050310);
				  cm.sendOk("你的转生次数不够成为#b剑圣#k，或者你已经是#b剑圣#k或更高等级，或者你的职业等级太低了。请阅读职业等级表。");
				  cm.dispose();
				  } else {
				  cm.sendOk("#e随着你的职业等级提升，你的经验和金币倍率也会同时增加。来看看职业等级表吧。(转生次数 = RBs) 当你达到下一个职业的要求时，请再来找我。\r\n \r\n等级0 - #r菜鸟#k\r\n等级1 - #r菜鸟之刃#k #b[需要等级70]#k (经验倍率300倍)\r\n等级2 - #r暴风之刃#k #b[需要1次转生]#k (经验倍率350倍，金币倍率100倍)\r\n等级3 - #r灵魂之刃#k #b[需要5次转生]#k (经验倍率400倍，金币倍率200倍)\r\n等级4 - #r死神之刃#k #b[需要15次转生]#k (经验倍率450倍，金币倍率300倍)\r\n等级5 - #r恶魔之刃#k #b[需要30次转生]#k (经验倍率500倍，金币倍率400倍)\r\n等级6 - #r暗夜之刃#k #b[需要70次转生]#k (经验倍率550倍，金币倍率500倍)\r\n等级7 - #r卍解之刃#k #b[需要150次转生]#k (经验倍率750倍，金币倍率600倍)\r\n等级8 - #r神圣之刃#k #b[需要450次转生]#k (经验倍率1000倍，金币倍率700倍)\r\n等级9 - #r副官之刃#k #b[需要700次转生]#k (经验倍率1250倍，金币倍率800倍) \r\n等级10 - #r剑圣#k #b[需要2000次转生]#k (经验倍率1750倍，金币倍率1000倍)");
				  cm.dispose();
				  }
				} else if (selection == 3) {
				  cm.sendNext("#e好的，如果你有足够的转生次数。#e#d");
				  cm.dispose();
				} else if (selection == 4) {
				if(!cm.HasOccupationM(0) && cm.HasOccupationM(1) && cm.HasOccupationM(200) && cm.HasOccupationM(210) && cm.HasOccupationM(220) && cm.HasOccupationM(230) && cm.HasOccupationM(220)) {
                    cm.sendSimple ("#k\r\n#L10#晋升为下士 #r经验倍率x3#k #b金币倍率x2#k (需要5次转生)#k" +
                 "#k\r\n#L11#晋升为中士 #r经验倍率x4#k #b金币倍率x2#k (需要15次转生)#k" +
                 "#k\r\n#L12#晋升为少尉 #r经验倍率x5#k #b金币倍率x3#k (需要50次转生)#k" +
                 "#k\r\n#L13#晋升为指挥官 #r经验倍率x7#k #b金币倍率x5#k (需要100次转生)#k " +
				 "#k\r\n#L14#更多选项即将推出！ :)" +
                 "恭喜，你现在是一名下士！你的经验倍率已设为450倍，金币倍率100倍！" );
				} else {
          cm.sendOk ("Nope.");
		  cm.dispose();
		  			}
				} else if (selection == 10) {
				if(cm.getPlayer().getrebirths() > 4 && !cm.HasOccupationM(100)) {
				  cm.changeOccupationById(110);
				  cm.sendNext("你的转生次数不够！");
				  cm.dispose();
				  } else {
				  cm.sendOk("你的转生次数不够！");
				  cm.dispose();
				} 
		    }
		}	
	}