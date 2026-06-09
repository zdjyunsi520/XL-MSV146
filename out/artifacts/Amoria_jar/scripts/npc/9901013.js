/* Coded by Alcandon */

importPackage(Packages.server);

var status = 0;
var leaf = 4001126;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {
        cm.dispose();
    
    }else if (mode == 0){
        cm.sendOk ("#e嘿，我是#rKazMS!#k的神力枫叶系统");
        cm.dispose();

    }else{             
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
        Rebirths = cm.getChar().getReborns();
        cm.sendNext ("好的，如果你有足够的枫叶#e#d");
        }else if (status == 1) { 
          cm.sendSimple ("#k\r\n#L10#2000枫叶商店" +
                 "#k\r\n#L11#4000枫叶商店" +
                 "#k\r\n#L82#8000枫叶商店" +
				 "#k\r\n#L14#16000枫叶商店" +
                 "#k\r\n#L15#20000枫叶商店" +
                 "#k\r\n#L90##b[新]#k4 #i4000313# 商店" +
				 "#k\r\n#L80##b[新]#k兑换10,000 #i4001126# 换取 1 #i4000313#" +
				 "#k\r\n#L81##b[新]#k兑换1 #i4000313# 换取10,000枫叶"+
				 "好的，这是2000 #i4001126# 商店！#e#d");
            } else if (selection == 10) {  
          cm.sendSimple ("#k\r\n#L16#制作 STR + 50 #i1122001##k" +
                 "#k\r\n#L17#制作 DEX + 50 #i1122001##k" +
                 "#k\r\n#L18#制作 INT + 50 #i1122001##k" +
                 "#k\r\n#L19#制作 LUK + 50 #i1122001##k" +
                 "好的，这是4000 #i4001126# 商店！#e#d");
            } else if (selection == 11) {  
          cm.sendSimple ("#k\r\n#L21#制作 STR + 100, 物攻 + 5 #i1082149#" +
                 "#k\r\n#L22#制作 DEX + 100, 物攻 + 5 #i1082148#" +
                 "#k\r\n#L23#制作 INT + 100, 魔攻 + 10 #i1082145#" +
                 "#k\r\n#L24#制作 LUK + 100, 物攻 + 5 #i1082147#" +
                 "好的，这是8000 #i4001126# 商店！#e#d");
            } else if (selection == 12) {  
          cm.sendSimple ("#k\r\n#L25#制作 STR + 250, 物攻 + 10 #i1003026#" +
                 "#k\r\n#L26#制作 DEX + 250, 物攻 + 10 #i1003025#" +
                 "#k\r\n#L27#制作 INT + 250, 魔攻 + 20 #i1003023#" +
                 "#k\r\n#L28#制作 LUK + 250, 物攻 + 10 #i1003024#" +
                 "好的，这是6000 #i4001126# 商店！#e#d");
            } else if (selection == 13) {  
          cm.sendSimple ("#k\r\n#L29#制作 STR + 500, 物攻 + 20 #i1102172#" +
                 "#k\r\n#L30#制作 DEX + 500, 物攻 + 20 #i1102172#" +
                 "#k\r\n#L31#制作 INT + 500, 魔攻 + 40 #i1102172#" +
                 "#k\r\n#L32#制作 LUK + 500, 物攻 + 20 #i1102172#" +
                 "好的，这是16000 #i4001126# 商店！#e#d");
            } else if (selection == 14) {  
          cm.sendSimple ("#k\r\n#L33#制作 STR + 1000, 物攻 + 30 #i1142100#" +
                 "#k\r\n#L34#制作 DEX + 1000, 物攻 + 30 #i1142100#" +
                 "#k\r\n#L35#制作 INT + 1000, 魔攻 + 50 #i1142100#" +
                 "#k\r\n#L36#制作 LUK + 1000, 物攻 + 30 #i1142100#" +
                 "好的，这是20000 #i4001126# 商店！#e#d");
            } else if (selection == 15) {  
          cm.sendSimple ("#k\r\n#L37#制作全属性 + 1000, 物攻 + 25 #i1032061#" +
                 "#k\r\n#L38#制作全属性 + 1000, 物攻 + 25 #i1072344#" +
                 "#k\r\n#L39#制作全属性 + 1000, 魔攻 + 35 #i1022060#" +
                 "#k\r\n#L40#制作全属性 + 1000, 物攻 + 25 #i1012108#" +
                 "#k\r\n#L41#制作 STR + 2000, 物攻 + 40 #i1142064#" +
                 "#k\r\n#L42#制作 DEX + 2000, 物攻 + 40 #i1142064#" +
                 "#k\r\n#L43#制作 INT + 2000, 魔攻 + 65 #i1142064#" +
                 "#k\r\n#L44#制作 LUK + 2000, 物攻 + 40 #i1142064#" +
                 "好的，这是4 #i4000313# 商店！#e#d");
		   } else if (selection == 90) {
		   cm.sendSimple ("#k\r\n#L91#制作全属性 + 5000, 物攻 + 50 #i1112401#" +
                 "#k\r\n#L92#制作全属性 + 5000, 物攻 + 50 #i1112000#"+
				 "你必须拥有4个黄金枫叶才能获得此物品！");
		   } else if (selection == 91) {  
            if(cm.haveItem(4000313, 4) && cm.canHold(1112401)) {
           cm.gainItem(4000313, -4);
            cm.gainItem (1112401);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112401, "str", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112401, "dex", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112401, "int", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112401, "luk", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112401, "watk", 50);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有20000枫叶才能获得此物品！");
             cm.dispose();
             }
			 } else if (selection == 92) {  
            if(cm.haveItem(4000313, 4) && cm.canHold(1112000)) {
           cm.gainItem(4000313, -4);
            cm.gainItem (1112000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "str", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "dex", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "int", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "luk", 5000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1112000, "watk", 50);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有20000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 38) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1072344)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1072344);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "watk", 25);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
            } else if (selection == 39) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1022060)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1022060);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "matk", 35);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
            } else if (selection == 40) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1012108)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1012108);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "watk", 25);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
			} else if (selection == 80) { 
			if (cm.haveItem(4001126, 10000)) {
			cm.gainItem(4001126, -10000);
			cm.gainItem(4000313, 1);
			cm.dispose();
			} else {
			cm.sendOk("你的黄金枫叶不够！");
			cm.dispose();
			}
			} else if (selection == 81) { 
			if (cm.haveItem(4000313, 1)) {
			cm.gainItem(4000313, -1);
			cm.gainItem(4001126, 10000);
			cm.dispose();
			} else {
			cm.sendOk("#k\r\n#L83#制作 STR + 750, 物攻 + 20 #i1022082#");
			cm.dispose();
			}
			} else if (selection == 82) { 
			cm.sendSimple ("#k\r\n#L25#制作 STR + 250, 物攻 + 10 #i1003026#" +
                 "#k\r\n#L84#制作 DEX + 750, 物攻 + 20 #i1022082#" +
                 "#k\r\n#L85#制作 INT + 750, 魔攻 + 30 #i1022082#" +
                 "#k\r\n#L86#制作 LUK + 750, 物攻 + 20 #i1022082#" +
                 "祝你玩得开心！ :)");
				 } else if (selection == 83) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1022082)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1022082);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "str", 750);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 84) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1022082)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1022082);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "dex", 750);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
			 } else if (selection == 85) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1022082)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1022082);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "int", 750);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "matk", 30);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
			 } else if (selection == 86) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1022082)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1022082);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "luk", 750);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022082, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 16) {  
            if(cm.haveItem(4001126, 2000) && cm.canHold(1122001)) {
            cm.gainItem(4001126, -2000);
            cm.gainItem(1122001);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1122001, "str", 50);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 17) {  
            if(cm.haveItem(4001126, 2000) && cm.canHold(1122001)) {
            cm.gainItem(4001126, -2000);
            cm.gainItem(1122001);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1122001, "dex", 50);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 18) {  
            if(cm.haveItem(4001126, 2000) && cm.canHold(1122001)) {
            cm.gainItem(4001126, -2000);
            cm.gainItem(1122001);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1122001, "int", 50);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 19) {  
            if(cm.haveItem(4001126, 2000) && cm.canHold(1122001)) {
            cm.gainItem(4001126, -2000);
            cm.gainItem(1122001);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1122001, "luk", 50);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有4000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 21) {  
            if(cm.haveItem(4001126, 4000) && cm.canHold(1082149)) {
            cm.gainItem(4001126, -4000);
            cm.gainItem(1082149);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082149, "str", 100);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082149, "watk", 5);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有8000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 22) {  
            if(cm.haveItem(4001126, 4000) && cm.canHold(1082148)) {
            cm.gainItem(4001126, -4000);
            cm.gainItem(1082148);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082148, "dex", 100);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082148, "watk", 5);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有8000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 23) {  
            if(cm.haveItem(4001126, 4000) && cm.canHold(1082145)) {
            cm.gainItem(4001126, -4000);
            cm.gainItem(1082145);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082145, "int", 100);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082145, "matk", 10);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有8000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 24) {  
            if(cm.haveItem(4001126, 4000) && cm.canHold(1082147)) {
            cm.gainItem(4001126, -4000);
            cm.gainItem(1082147);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082147, "luk", 100);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1082147, "watk", 5);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有8000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 25) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1003026)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1003026);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003026, "str", 250);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003026, "watk", 10);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有12000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 26) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1003025)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1003025);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003025, "dex", 250);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003025, "watk", 10);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有12000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 27) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1003023)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1003023);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003023, "int", 250);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003023, "matk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有12000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 28) {  
            if(cm.haveItem(4001126, 8000) && cm.canHold(1003024)) {
            cm.gainItem(4001126, -8000);
            cm.gainItem(1003024);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003024, "luk", 250);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1003024, "watk", 10);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有12000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 29) {  
            if(cm.haveItem(4001126, 12000) && cm.canHold(1102172)) {
            cm.gainItem(4001126, -12000);
            cm.gainItem(1102172);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "str", 500);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有6000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 30) {  
            if(cm.haveItem(4001126, 12000) && cm.canHold(1102172)) {
            cm.gainItem(4001126, -12000);
            cm.gainItem(1102172);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "dex", 500);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有16000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 31) {  
            if(cm.haveItem(4001126, 12000) && cm.canHold(1102172)) {
            cm.gainItem(4001126, -12000);
            cm.gainItem(1102172);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "int", 500);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "matk", 40);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有6000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 32) {  
            if(cm.haveItem(4001126, 12000) && cm.canHold(1102172)) {
            cm.gainItem(4001126, -12000);
            cm.gainItem(1102172);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "luk", 500);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1102172, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有6000枫叶才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 33) {  
            if(cm.haveItem(4001126, 16000) && cm.canHold(1142100)) {
            cm.gainItem(4001126, -16000);
            cm.gainItem(1142100);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "str", 1000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "watk", 30);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 34) {  
            if(cm.haveItem(4001126, 16000) && cm.canHold(1142100)) {
            cm.gainItem(4001126, -16000);
            cm.gainItem(1142100);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "dex", 1000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "watk", 30);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 35) {  
            if(cm.haveItem(4001126, 16000) && cm.canHold(1142100)) {
            cm.gainItem(4001126, -16000);
            cm.gainItem(1142100);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "int", 1000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "matk", 50);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 36) {  
            if(cm.haveItem(4001126, 16000) && cm.canHold(1142100)) {
            cm.gainItem(4001126, -16000);
            cm.gainItem(1142100);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "luk", 1000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142100, "watk", 20);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
            } else if (selection == 37) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1032061)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1032061);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032061, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032061, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032061, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032061, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1032061, "watk", 25);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
            } else if (selection == 38) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1072344)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1072344);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1072344, "watk", 25);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
            } else if (selection == 39) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1022060)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1022060);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1022060, "matk", 35);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
            } else if (selection == 40) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1012108)) {
           cm.gainItem(4001126, -20000);
            cm.gainItem (1012108);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "str", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "dex", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "int", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "luk", 1000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1012108, "watk", 25);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
             } else if (selection == 41) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1142064)) {
            cm.gainItem(4001126, -20000);
            cm.gainItem(1142064);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "str", 2000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "watk", 40);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
             } else if (selection == 42) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1142064)) {
            cm.gainItem(4001126, -20000);
            cm.gainItem(1142064);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "dex", 2000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "watk", 40);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
             } else if (selection == 43) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1142064)) {
            cm.gainItem(4001126, -20000);
            cm.gainItem(1142064);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "int", 2000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "matk", 65);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }
			 } else if (selection == 44) {  
            if(cm.haveItem(4001126, 20000) && cm.canHold(1142064)) {
            cm.gainItem(4001126, -20000);
            cm.gainItem(1142064);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "luk", 2000);
			Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1142064, "watk", 40);
            cm.reloadChar();
			cm.sendOk("你必须拥有1000枫叶才能获得此物品！");
            cm.dispose();
               } else {
             cm.sendOk ("你的枫叶不够！");
             cm.dispose();
             }

             } else if (selection == 45) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1432047)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1432047);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1432047, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1432047, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1432047, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1432047, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1432047, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 46) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1402046)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1402046);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1402046, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1402046, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1402046, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1402046, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1402046, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 47) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1302081)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1302081);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302081, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302081, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302081, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302081, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1302081, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 48) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1452057)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1452057);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1452057, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1452057, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1452057, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1452057, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1452057, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 49) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1472068)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1472068);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1472068, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1472068, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1472068, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1472068, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1472068, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 50) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1332073)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1332073);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1332073, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1332073, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1332073, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1332073, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1332073, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 51) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1482023)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1482023);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1482023, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1482023, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1482023, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1482023, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1482023, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 52) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1462050)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1462050);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1462050, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1462050, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1462050, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1462050, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1462050, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
             } else if (selection == 53) {  
            if(cm.getPlayer().getRebirths() > 1999 && cm.canHold(1492023)) {
            cm.gainRebirths (-2000);
            cm.gainItem (1492023);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1492023, "str", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1492023, "dex", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1492023, "int", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1492023, "luk", 16000);
            Packages.server.MapleInventoryManipulator.editEquipById(cm.getPlayer(), 1, 1492023, "watk", 3000);
            cm.reloadChar();
            cm.dispose();
               } else {
             cm.sendOk ("你必须拥有2000次转生才能获得此物品！");
             cm.dispose();
             }
}
}
}