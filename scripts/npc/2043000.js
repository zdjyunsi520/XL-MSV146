/*Coded By Tim (Vote)*/

var status = 0;
var Error = "#r嗯……你没有足够的#e投票点数！#n";

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
    cm.sendSimple ("你好#r#h ##k，欢迎来到#r阿摩里亚投票点数兑换处。\r\n 你拥有#r[" + cm.getVPoints() +"]#k投票点数#k。\r\n #e#r概不退款。" +
                "\r\n#L1##e#bNexon点券#l" + 
                "\r\n#L2##r奇迹方块#l");
        } else if (selection == 1) {
                cm.sendSimple ("你目前拥有#r[" + cm.getVPoints() + "]#k投票点数。"+
                "#k\r\n请谨慎选择！" +
                "#k\r\n#L3##i5200009# #e#b5k #rNX #g点券 #d~ #r(2) #b投票点数 #i5200009#" +
                "#k\r\n#L4##i5200009# #e#b10k #rNX #g点券 #d~ #r(3) #b投票点数 #i5200009#" +
                "#k\r\n#L5##i5200009# #e#b15k #rNX #g点券 #d~ #r(4) #b投票点数 #i5200009#" +
                "#k\r\n#L6##i5200009# #e#b20k #rNX #g点券 #d~ #r(5) #b投票点数 #i5200009#" +
                "#k\r\n#L7##i5200009# #e#b25k #rNX #g点券 #d~ #r(6) #b投票点数 #i5200009#");
        } else if (selection == 2) {
                cm.sendSimple ("你目前拥有#r[" + cm.getVPoints() + "]#k投票点数。"+
                "#k\r\n请谨慎选择！" +
                "#k\r\n#L8##b#i5062002# #e#b奇迹 #r方块 #gx10 #d~ #b(2) #r投票点数" +
		"#k\r\n#L9##b#i5062000# #e奇迹 #r方块 #gx15 #d~ #b(3) #r投票点数" +
		"#k\r\n#L10##b#i5062009# #e#b奇迹 #r方块 #gx5 #d~ #b(4) #r投票点数");
	
    } else if (selection == 3) {

                var price = 5000000;
                if (cm.getVPoints() > 1) {      
                   cm.setVPoints(-2);                   
                   cm.gainNX(10000);
                   cm.dispose();
                } else {
                   cm.sendOk(Error);
                   cm.dispose();
                   }

    } else if (selection == 4) {

                var price = 10000000;
                if (cm.getVPoints() > 2) {      
                    cm.setVPoints(-3);                  
                    cm.gainNX(30000);
                    cm.dispose();
                 } else {
                   cm.sendOk(Error);
                   cm.dispose();
                   }

    } else if (selection == 5) {

                var price = 15000000;
                if (cm.getVPoints() > 3) {      
                   cm.setVPoints(-4);                    
                   cm.gainNX(40000);
                   cm.dispose();
                } else {
                   cm.sendOk(Error);
                   cm.dispose();
                   }

    } else if (selection == 6) {

                var price = 20000000;
                if (cm.getVPoints() > 4) {      
                   cm.setVPoints(-5);                    
                   cm.gainNX(50000);
                   cm.dispose();
                } else {
                   cm.sendOk(Error);
                   cm.dispose();
                   }
                   
    } else if (selection == 7) {

                if (cm.getVPoints() > 5) {      
                   cm.setVPoints(-6);                    
                   cm.gainNX(100000);
                   cm.dispose();
                } else {
                   cm.sendOk(Error);
                   cm.dispose();
                   }
            
    } else if (selection == 8) {
                
                if (cm.getVPoints() > 1) {      
                    cm.setVPoints(-2);                   
                    cm.gainItem(5062000, 15);
                    cm.dispose();
                 } else {
                    cm.sendOk(Error);
                    cm.dispose();
                    }
                   
    } else if (selection == 9) {
                
                if (cm.getVPoints() > 2) {      
                    cm.setVPoints(-3);                   
                    cm.gainItem(5062002, 10);
                    cm.dispose();
                 } else {
                    cm.sendOk(Error);
                    cm.dispose();
                   }

    } else if (selection == 10) {
                
                if (cm.getVPoints() > 3) {      
                    cm.setVPoints(-4);                   
                    cm.gainItem(5062009, 5);
                    cm.dispose();
                 } else {
                    cm.sendOk(Error);
                    cm.dispose();
                   }
                }
                }
		}