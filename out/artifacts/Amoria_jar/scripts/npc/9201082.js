var status = 0;
 
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
                cm.sendSimple("我觉得你已经存了够多的#v4000313#了，试着花掉一些金币，兑换一些#v4000313#后再来买更多。");
        
           //cm.dispose();
            } else if (status == 1) {
            if (selection == 1) {
    if (cm.itemQuantity(4000313) >= 999) {
    cm.sendOk("你没有足够的#b金币#k，你是想#e骗#k我吗！？");
    cm.dispose();
        }  else if (cm.getMeso() >= 1000000000) {
                    cm.gainMeso(-1000000000);                
                    cm.gainItem(4000313, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("别太冲动，如果你现在就把钱袋兑换掉，你就没钱了！你需要先花掉一些，如果兑换钱袋后金币超过上限，你就拿不到金币了！");
                    cm.dispose();
                }                                
            } else if (selection == 2) {
  if (cm.getMeso() >= 647000000) {
  cm.sendOk("你没有任何#v4000313#。请带着要兑换的物品再来。");
                cm.dispose();
  } else if (cm.itemQuantity(4000313) >= 1) {
                    cm.gainMeso(1000000000);                
                    cm.gainItem(4000313, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("我觉得你已经存了够多的#v5200001#了，试着花掉一些金币，兑换一些#v5200001#后再来买更多。");
                    cm.dispose();
                }    
            } else if (selection == 3) {
    if (cm.itemQuantity(5200000) >= 50) {
    cm.sendOk("你没有任何#v5200001#。请带着要兑换的物品再来。");
    cm.dispose();
    } else if (cm.getMeso() >= 1000000000) {
                    cm.gainMeso(-1000000000);                
                    cm.gainItem(5200001, 1); 
                    cm.dispose();
                   }
        } else if (selection == 4) {
  if (cm.getMeso() >= 1147000000) {
  cm.sendOk("你没有任何#v4000313#。请带着要兑换的物品再来。");
                cm.dispose();
                } else if (cm.itemQuantity(5200001) >= 1) {
                    cm.gainMeso(1000000000);                
                    cm.gainItem(5200001, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("我觉得你已经存了够多的#v5200000#了，试着花掉一些金币，兑换一些#v5200000#后再来买更多。");
                    cm.dispose();
               }    
            } else if (selection == 5) {
    if (cm.itemQuantity(5200000) >= 50) {
    cm.sendOk("你没有任何#v5200000#。请带着要兑换的物品再来。");
    cm.dispose();
    } else if (cm.getMeso() >= 500000000) {
                    cm.gainMeso(-500000000);                
                    cm.gainItem(5200000, 1); 
                    cm.dispose();
            }
                } else if (selection == 6) {
  if (cm.getMeso() >= 1647000000) {
  cm.sendOk("你没有任何#v4000313#。请带着要兑换的物品再来。");
                cm.dispose();
                } else if (cm.itemQuantity(5200000) >= 1) {
                    cm.gainMeso(500000000);                
                    cm.gainItem(5200000, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("你没有任何#v5200000#。请带着要兑换的物品再来。");
                    cm.dispose();
                    }    
                }
            }
        }
    }
