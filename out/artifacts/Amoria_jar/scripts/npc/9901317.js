importPackage(Packages.client);

var status = 0;
var selected = 1;
var wui = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    selected = selection;
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
 			cm.sendAcceptDecline("请选择你想要作为满属物品的装备或NX物品。请确认你的背包有足够的空间，因为我们不接受退款。祝你好运！\r\n\r\n ");
		} else if (status == 1) {
				if (cm.getPlayer().getStr() > 32766 && cm.getPlayer().getDex() > 32766 && cm.getPlayer().getInt() > 32766 && cm.getPlayer().getLuk() > 32766 && cm.haveItem(4001085, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4001083, 1) && cm.haveItem(4032013, 2) && cm.haveItem(4000138, 5) && cm.haveItem(4004004, 200) && cm.haveItem(4004002, 200) && cm.haveItem(4004000, 200) && cm.haveItem(4004003, 200) && cm.haveItem(4004001, 200) && cm.haveItem(2049100, 2) && cm.haveItem(2340000, 1)){
				            var String = "抱歉，你不满足所需条件。";
                            cm.sendSimple(String+cm.EquipList(cm.getClient()));
				} else  {
					cm.sendOk ("下次再见！");
					cm.dispose(); 
				}
		} else if (status == 2) { 
		     cm.MakeGMItem(selected, cm.getP());
			  cm.getPlayer().setStr(4); cm.getPlayer().setDex(4); cm.getPlayer().setLuk(4); cm.getPlayer().setInt(4);
              cm.gainItem(4001085, -1);
              cm.gainItem(4001084, -1); 
              cm.gainItem(4001083, -1);
              cm.gainItem(4032013, -2);
              cm.gainItem(4000138, -5);
              cm.gainItem(4004000, -200);
              cm.gainItem(4004001, -200);
              cm.gainItem(4004002, -200);
              cm.gainItem(4004003, -200);
              cm.gainItem(4004004, -200);
              cm.gainItem(4004004, -200);
              cm.gainItem(2049100, -2);
              cm.gainItem(2340000, -1);
              cm.reloadChar();
			  cm.dispose();	
         }			
        if (selection == 1) {
				cm.sendOk("下次再见！");
				cm.dispose();
			}
		}
	}
