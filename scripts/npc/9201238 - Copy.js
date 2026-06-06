/* Dawnveil
    Gachapon
	The Great Gachapierrot
    Made by Daenerys
*/
var status = -1;
var selection = -1;

function start() {
    status = -1;
    selection = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        cm.sendSimple("你没有可以使用的转蛋券。请购买转蛋券后再来。");
    } else if (status == 1) {
    if (selection == 0) {
        cm.sendNext("你没有转蛋食品券。请在获得转蛋食品券后再来。");
        cm.dispose();
		return;
    } else if (selection == 1) {		
		 cm.sendNext("你没有星云石转蛋券。");
         cm.dispose();
		 return;
	} else if (selection == 2) {		
		 cm.sendNext("你没有坐骑转蛋券。");
         cm.dispose();
		 return;	 
	} else if (selection == 3) {		
		 cm.sendNext("你没有可以使用的超级转蛋券。使用20张转蛋券即可获得一张超级转蛋券。");
         cm.dispose();
		 return;	 
	} else if (selection == 4) {		
		 cm.sendNext("你没有可以使用的超级转蛋券。使用20张转蛋券即可获得一张超级转蛋券。");
         cm.dispose();
		 return;	 
        }
		cm.dispose();
    }
}
