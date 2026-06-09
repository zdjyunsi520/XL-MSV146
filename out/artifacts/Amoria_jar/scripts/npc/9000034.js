/*
@    Author : Rich of BeastModeMS
@
@    NPC = Mr. Oh
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = All in one Shop
@
*/

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
	cm.sendSimple ("#e[性感系统]#b选点什么吧兄弟，我可没那么多时间。" +
                 "#k\r\n#L88##r购买NX现金 ");
	  } else if (selection == 80) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"#k\r\n#L0##r法师鞋子" +
			"#k\r\n#L1##r法师套装" +
			"#k\r\n#L2##r法师手套" +
			"#k\r\n#L3##r法师帽子" +
			"#k\r\n#L4##r法师盾牌" +
			"#k\r\n#L5##r法师和通用短杖" +
			"#k\r\n#L6##r法师和通用长杖");
	  } else if (selection == 81) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"#k\r\n#L7##b飞侠鞋子" +
			"#k\r\n#L8##b飞侠下衣" +
			"#k\r\n#L9##b飞侠上衣" +
			"#k\r\n#L10##b飞侠套服" +
			"#l\r\n#L11##b飞侠手套" +
			"#l\r\n#L12##b飞侠帽子" +
			"#l\r\n#L13##b飞侠盾牌" +
			"#l\r\n#L14##b飞侠和通用短刀" +
			"#k\r\n#L15##b飞侠和通用拳套" +
			"#k\r\n#L16##b飞侠飞镖");
	  } else if (selection == 82) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"#k\r\n#L17##d战士鞋子" +
			"#k\r\n#L18##d战士下衣" +
			"#k\r\n#L19##d战士上衣" +
			"#k\r\n#L20##d战士套服" +
			"#k\r\n#L21##d战士手套" +
			"#k\r\n#L22##d战士帽子" +
			"#k\r\n#L23##d战士盾牌" +
			"#k\r\n#L24##d战士和通用单手斧" +
			"#k\r\n#L25##d战士和通用双手斧" +
			"#k\r\n#L26##d战士和通用单手钝器" +
			"#k\r\n#L27##d战士和通用双手钝器" +
			"#k\r\n#L28##d战士和通用单手剑" +
			"#k\r\n#L29##d战士和通用双手剑" +
			"#k\r\n#L30##d战士和通用枪" +
			"#k\r\n#L31##d战士和通用矛");
	  } else if (selection == 83) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"#k\r\n#L32##g弓箭手鞋子" +
			"#k\r\n#L33##g弓箭手套服" +
			"#k\r\n#L34##g弓箭手手套" +
			"#k\r\n#L35##g弓箭手帽子" +
			"#k\r\n#L36##g弓箭手和通用弓" +
			"#k\r\n#L37##g弓箭手和通用弩" +
			"#k\r\n#L38##g弓箭手箭矢");
	  } else if (selection == 84) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"#k\r\n#L76##b海盗帽子" +
			"#k\r\n#L71##b海盗武器" +
			"#k\r\n#L72##b海盗子弹和胶囊" +
			"#k\r\n#L73##b海盗套服" +
			"#k\r\n#L74##b海盗手套" +
			"#k\r\n#L75##b海盗鞋子");
	  } else if (selection == 85) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"#k\r\n#L39#枫之谷武器" +
			"\r\n#L40#Earrings" +
			"\r\n#L41#项链和脸饰" +
			"\r\n#L42#Capes" +
			"\r\n#L43#通用鞋子" +
			"" +
			"\r\n#L45#通用手套" +
			"\r\n#L46#通用套服" +
			"\r\n#L47#通用盾牌" +
			"\r\n#L48#0级武器");
	  } else if (selection == 86) {
               cm.sendSimple ("选择一个分类 #e#d" +
			"\r\n#L50#超级广播喇叭、转蛋券、岩石和变身道具" +
			"\r\n#L51#增益道具和药水" +
			"\r\n#L52#Boss碎片" +
			"\r\n#L57#Chairs" +
			"\r\n#L53#Mounts" +
			"\r\n#L54#所有卷轴！");
	  } else if (selection == 87) {
               cm.sendOk ("此功能已被禁用。请购买NX点数并使用商城。谢谢。");
	  } else if (selection == 0) {
		cm.openShop (10000);
		cm.dispose();
	  } else if (selection == 1) {
		cm.openShop (10001);
		cm.dispose();
	  } else if (selection == 2) {
		cm.openShop (10002);
		cm.dispose();
	  } else if (selection == 3) {
		cm.openShop (10003);
		cm.dispose();
	  } else if (selection == 4) {
		cm.openShop (10004);
		cm.dispose();
	  } else if (selection == 5) {
		cm.openShop (10005);
		cm.dispose();
	  } else if (selection == 6) {
		cm.openShop (10006);
		cm.dispose();
	  } else if (selection == 7) {
		cm.openShop (10007);
		cm.dispose();
	  } else if (selection == 8) {
		cm.openShop (10008);
		cm.dispose();
	  } else if (selection == 9) {
		cm.openShop (10009);
		cm.dispose();
	  } else if (selection == 10) {
		cm.openShop (10010);
		cm.dispose();
	  } else if (selection == 11) {
		cm.openShop (10011);
		cm.dispose();
	  } else if (selection == 12) {
		cm.openShop (10012);
		cm.dispose();
	  } else if (selection == 13) {
		cm.openShop (10013);
		cm.dispose();
	  } else if (selection == 14) {
		cm.openShop (10014);
		cm.dispose();
	  } else if (selection == 15) {
		cm.openShop (10015);
		cm.dispose();
	  } else if (selection == 16) {
		cm.openShop (10038);
		cm.dispose();
	  } else if (selection == 17) {
		cm.openShop (10016);
		cm.dispose();
	  } else if (selection == 18) {
		cm.openShop (10017);
		cm.dispose();
	  } else if (selection == 19) {
		cm.openShop (10018);
		cm.dispose();
	  } else if (selection == 20) {
		cm.openShop (10019);
		cm.dispose();
	  } else if (selection == 21) {
		cm.openShop (10020);
		cm.dispose();
	  } else if (selection == 22) {
		cm.openShop (10021);
		cm.dispose();
	  } else if (selection == 23) {
		cm.openShop (10022);
		cm.dispose();
	  } else if (selection == 24) {
		cm.openShop (10023);
		cm.dispose();
	  } else if (selection == 25) {
		cm.openShop (10024);
		cm.dispose();
	  } else if (selection == 26) {
		cm.openShop (10025);
		cm.dispose();
	  } else if (selection == 27) {
		cm.openShop (10026);
		cm.dispose();
	  } else if (selection == 28) {
		cm.openShop (10027);
		cm.dispose();
	  } else if (selection == 29) {
		cm.openShop (10028);
		cm.dispose();
	  } else if (selection == 30) {
		cm.openShop (10029);
		cm.dispose();
	  } else if (selection == 31) {
		cm.openShop (10030);
		cm.dispose();
	  } else if (selection == 32) {
		cm.openShop (10031);
		cm.dispose();
	  } else if (selection == 33) {
		cm.openShop (10032);
		cm.dispose();
	  } else if (selection == 34) {
		cm.openShop (10033);
		cm.dispose();
	  } else if (selection == 35) {
		cm.openShop (10034);
		cm.dispose();
	  } else if (selection == 36) {
		cm.openShop (10035);
		cm.dispose();
	  } else if (selection == 37) {
		cm.openShop (100320);
		cm.dispose();
	  } else if (selection == 38) {
		cm.openShop (10037);
		cm.dispose();
	  } else if (selection == 39) {
		cm.openShop (10051);
		cm.dispose();
	  } else if (selection == 40) {
		cm.openShop (10039);
		cm.dispose();
	  } else if (selection == 41) {
		cm.openShop (10040);
		cm.dispose();
	  } else if (selection == 42) {
		cm.openShop (10041);
		cm.dispose();
	  } else if (selection == 43) {
		cm.openShop (10042);
		cm.dispose();
	  } else if (selection == 44) {
		cm.openShop (10043);
		cm.dispose();
	  } else if (selection == 45) {
		cm.openShop (10044);
		cm.dispose();
	  } else if (selection == 46) {
		cm.openShop (10045);
		cm.dispose();
	  } else if (selection == 47) {
		cm.openShop (10046);
		cm.dispose();
	  } else if (selection == 48) {
		cm.openShop (10047);
		cm.dispose();
	  } else if (selection == 49) {
		cm.openShop (10048);
		cm.dispose();
	  } else if (selection == 50) {
		cm.openShop (10048);
		cm.dispose();
	  } else if (selection == 51) {
		cm.openShop (10049);
		cm.dispose();
	  } else if (selection == 52) {
		cm.openShop (10050);
		cm.dispose();
	  } else if (selection == 53) {
		cm.openShop (10052);
		cm.dispose();
	  } else if (selection == 54) {
		 cm.openShop (10053);
		 cm.dispose();
                 //  cm.openNpc(2120003);
	  } else if (selection == 55) {
		cm.openShop (10054);
		cm.dispose();
	  } else if (selection == 56) {
		cm.openShop (10055);
		cm.dispose();
	  } else if (selection == 57) {
		cm.openShop (10056);
		cm.dispose();
	  } else if (selection == 58) {
		cm.openShop (10057);
		cm.dispose();
                } else if (selection == 59) {
		cm.openShop (10058);
		cm.dispose();
                } else if (selection == 60) {
		cm.openShop (10059);
		cm.dispose();
                } else if (selection == 61) {
		cm.openShop (10060);
		cm.dispose();
                } else if (selection == 62) {
		cm.openShop (10061);
		cm.dispose();
                } else if (selection == 63) {
		cm.openShop (10062);
		cm.dispose();
                } else if (selection == 64) {
		cm.openShop (10063);
		cm.dispose();
                } else if (selection == 65) {
		cm.openShop (10064);
		cm.dispose();
                } else if (selection == 66) {
		cm.openShop (10065);
		cm.dispose();
                } else if (selection == 67) {
		cm.openShop (10066);
		cm.dispose();
                } else if (selection == 68) {
		cm.openShop (10067);
		cm.dispose();
                } else if (selection == 69) {
		cm.openShop (10068);
		cm.dispose();
                } else if (selection == 70) {
		cm.openShop (10069);
		cm.dispose();
                } else if (selection == 71) {
		cm.openShop (13035);
		cm.dispose();
                } else if (selection == 72) {
		cm.openShop (13001);
		cm.dispose();
                } else if (selection == 73) {
		cm.openShop (13002);
		cm.dispose();
                } else if (selection == 74) {
		cm.openShop (13003);
		cm.dispose();
                } else if (selection == 75) {
		cm.openShop (13004);
		cm.dispose();
                } else if (selection == 76) {
		cm.openShop (13005);
		cm.dispose();
	  } else if (selection == 88) {
                cm.sendSimple ("#e你目前拥有(#r" + cm.getPlayer().getVotePoints() + "#k)投票点数。"+
		 "#k\r\n#e你想要多少？" +
                 "#k\r\n#L89##r5000 NX点数 需要1投票点" +
                 "#k\r\n#L90##r10000 NX点数 需要2投票点" +
                 "#k\r\n#L91##r20000 NX点数 需要3投票点" +
                 "#k\r\n#L92##r30000 NX点数 需要4投票点" +
                 "#k\r\n#L93##r45000 NX点数 需要5投票点");
                } else if (selection == 89) {
                var price = 5000000;
                if (cm.getPlayer().getVotePoints() > 0) {      
                    cm.getPlayer().gainVotePoints(-1);                    
                   cm.gainNX(10000);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 90) {
                var price = 10000000;
                if (cm.getPlayer().getVotePoints() > 1) {      
                    cm.getPlayer().gainVotePoints(-2);  				
                    cm.gainNX(20000);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 91) {
                var price = 15000000;
                if (cm.getPlayer().getVotePoints() > 2) {      
                    cm.getPlayer().gainVotePoints(-3);                    
                   cm.gainNX(40000);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 92) {
                var price = 20000000;
                if (cm.getPlayer().getVotePoints() > 3) {      
                    cm.getPlayer().gainVotePoints(-4);                    
                  cm.gainNX(60000);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 93) {
                if (cm.getPlayer().getVotePoints() > 4) {      
                    cm.getPlayer().gainVotePoints(-5);                    
                   cm.gainNX(90000);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
				} else if (selection = 94) {
			cm.sendSimple ("#e你目前拥有(#r" + cm.getPlayer().getVotePoints() + "#k)投票点数。"+
		 "#k\r\n#e你想要哪种方块？" +
                 "#k\r\n#L95##r1个超级奇迹方块 需要1投票点" +
                 "#k\r\n#L96##r2个超级奇迹方块 需要2投票点" +
                 "#k\r\n#L97##r4个超级奇迹方块 需要3投票点" +
                 "#k\r\n#L98##r6个超级奇迹方块 需要4投票点" +
                 "#k\r\n#L99##r8个超级奇迹方块 需要5投票点");
				 } else if (selection == 95) {
                //var price = 5000000;
                if (cm.getPlayer().getVotePoints() > 0) {      
                    cm.getPlayer().gainVotePoints(-1);                    
                   
				   cm.gainItem(2001502, 1);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 96) {
                //var price = 10000000;
                if (cm.getPlayer().getVotePoints() > 1) {      
                    cm.getPlayer().gainVotePoints(-2);                    
                    
					cm.gainItem(5062002, 2);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 97) {
                //var price = 15000000;
                if (cm.getPlayer().getVotePoints() > 2) {      
                    cm.getPlayer().gainVotePoints(-3);                    
                   
				    cm.getPlayer().gainItem(5062002, 1);
                  
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 98) {
                //var price = 20000000;
                if (cm.getPlayer().getVotePoints() > 3) {      
                    cm.getPlayer().gainVotePoints(-4);                    
                  
				  cm.gainItem(5062002, 6);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
                } else if (selection == 99) {
                if (cm.getPlayer().getVotePoints() > 4) {      
                    cm.getPlayer().gainVotePoints(-5);                    
                   
				   cm.gainItem(5062002, 8);
                   cm.dispose();
                     } else {
                   cm.sendOk ("#e你的投票点数不够！");
                   cm.dispose();
                   }
				   }
}
}