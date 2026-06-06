	var status; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == 1) { 
        status++; 
    }else{ 
        status--; 
    } 
     
    if (status == 0) { 
      cm.sendSimple("#e哈哈太棒了你真有！好吧，给你！"); 
   } else if (status == 1) { 
        if (selection == 0) { 
            if (cm.haveItem(4000252, -1337)) { 
                cm.sendOk("#e拿到物品后再来找我吧。");   
			   cm.gainItem(4000252,-1337);
			   cm.getPlayer().getCashShop().gainCash(1, 10000);
                cm.dispose(); 
            }else{ 
                cm.sendOk("#e哦那太可惜了！下次再来吧！"); 
                cm.dispose(); 
            } 
        } else if (selection == 1) { 
            cm.sendOk("#e哦那太可惜了！下次再来吧！"); 
            cm.dispose(); 
        } 
    }
	}