var fm18 = 910000018;
var fm19 = 910000019;
var fm20 = 910000020;
var fm21 = 910000021;
var fm22 = 910000022;
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
    
    if (status == 0 && cm.getMap().getId() == fm18) { 
        cm.sendSimple("你好，欢迎来到自由市场19号房间。你可以在这里花费金币召唤怪物。你想召唤以下怪物之一吗？:#b\r\n蓝色塔纳托斯 (100万/ 5只300万)\r\n暗色科尼安(100万/ 5只300万)\r\n忧虑僧侣(100万/ 5只300万)");
    } else if (status == 0 && cm.getMap().getId() == fm19) {
		cm.sendSimple("你好，欢迎来到自由市场20号房间。你可以在这里花费金币召唤首领。你想召唤以下首领之一吗？:#b\r\n无头骑士 (500万/ 5只2000万)\r\n格里菲(500万/ 5只2000万)\r\n马农(500万/ 5只2000万)");
	} else if (status == 0 && cm.getMap().getId() == fm20) {
		cm.sendSimple("你好，欢迎来到自由市场21号房间。你可以在这里花费金币召唤首领。你想召唤以下首领之一吗？:#b\r\n黑鸦 (1000万/ 5只4000万)\r\n厄尔戈斯(1000万/ 5只4000万)\r\n女首领(1000万/ 5只4000万)");
	} else if (status == 0 && cm.getMap().getId() == fm21) {
		cm.sendSimple("你好，欢迎来到自由市场22号房间。你可以在这里花费金币召唤首领。你想召唤以下首领之一吗？:#b\r\n雷利克 (1000万/ 5只4000万)\r\n黑魔女(1000万/ 5只4000万)\r\n大首领(5000万/ 5只2亿)\r\n猫首领 (10亿/ 1经验)");
	} else if (status == 0 && cm.getMap().getId() == fm22) {
		cm.sendSimple("#L0#请给我一只蓝色飞龙。#l\r\n#L1#请给我5只蓝色飞龙。#l\r\n#L2#请给我一只记忆守护者队长。#l\r\n#L3#请给我5只记忆守护者队长。#l\r\n#L4#请给我一只暗色飞龙。#l\r\n#L5#请给我5只暗色飞龙。#l\r\n");
	} else if (status == 1 && cm.getMap().getId() == fm18) { 
        cm.PlayerToNpc("给你！");
	} else if (status == 2 && cm.getMap().getId() == fm18) { 
        if (selection == 0 && cm.getPlayer().getMeso() >= 1000000){
			cm.gainMeso(-1000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8810020);
			cm.dispose();
		} else if (selection == 1  && cm.getPlayer().getMeso() >= 3000000){
			cm.gainMeso(-3000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8810020);
			cm.spawnmonster(8810020);
			cm.spawnmonster(8810020);
			cm.spawnmonster(8810020);
			cm.spawnmonster(8810020);
			cm.dispose();
		} else if (selection == 2  && cm.getPlayer().getMeso() >= 1000000){
			cm.gainMeso(-1000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8200004);
			cm.dispose();
		} else if (selection == 3  && cm.getPlayer().getMeso() >= 3000000){
			cm.gainMeso(-3000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8200004);
			cm.spawnmonster(8200004);
			cm.spawnmonster(8200004);
			cm.spawnmonster(8200004);
			cm.spawnmonster(8200004);
			cm.dispose();
		} else if (selection == 4  && cm.getPlayer().getMeso() >= 1000000){
			cm.gainMeso(-1000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8810021);
			cm.dispose();
		} else if (selection == 5  && cm.getPlayer().getMeso() >= 3000000){
			cm.gainMeso(-3000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8810021);
			cm.spawnmonster(8810021);
			cm.spawnmonster(8810021);
			cm.spawnmonster(8810021);
			cm.spawnmonster(8810021);
			cm.dispose();
		}
	} else if (status == 1 && cm.getMap().getId() == fm19) { 
        cm.PlayerToNpc("#L0#请给我一只无头骑士。#l\r\n#L1#请给我5只无头骑士。#l\r\n#L2#请给我一只格里菲。#l\r\n#L3#请给我5只格里菲。#l\r\n#L4#请给我一只马农。#l\r\n#L5#请给我5只马农。#l\r\n");
	} else if (status == 2 && cm.getMap().getId() == fm19) { 
        if (selection == 0 && cm.getPlayer().getMeso() >= 1000000){
			cm.gainMeso(-1000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8170000);
			cm.dispose();
		} else if (selection == 1  && cm.getPlayer().getMeso() >= 3000000){
			cm.gainMeso(-3000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8170000);
			cm.spawnmonster(8170000);
			cm.spawnmonster(8170000);
			cm.spawnmonster(8170000);
			cm.spawnmonster(8170000);
			cm.dispose();
		} else if (selection == 2  && cm.getPlayer().getMeso() >= 1000000){
			cm.gainMeso(-1000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9300068);
			cm.dispose();
		} else if (selection == 3  && cm.getPlayer().getMeso() >= 3000000){
			cm.gainMeso(-3000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9300068);
			cm.spawnmonster(9300068);
			cm.spawnmonster(9300068);
			cm.spawnmonster(9300068);
			cm.spawnmonster(9300068);
			cm.dispose();
		} else if (selection == 4  && cm.getPlayer().getMeso() >= 1000000){
			cm.gainMeso(-1000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8200005);
			cm.dispose();
		} else if (selection == 5  && cm.getPlayer().getMeso() >= 3000000){
			cm.gainMeso(-3000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8200005);
			cm.spawnmonster(8200005);
			cm.spawnmonster(8200005);
			cm.spawnmonster(8200005);
			cm.spawnmonster(8200005);
			cm.dispose();
		}
	} else if (status == 1 && cm.getMap().getId() == fm20) { 
        cm.PlayerToNpc("#L0#请给我一只黑鸦。#l\r\n#L1#请给我5只黑鸦。#l\r\n#L2#请给我一只厄尔戈斯。#l\r\n#L3#请给我5只厄尔戈斯。#l\r\n#L4#请给我一只女首领。#l\r\n#L5#请给我5只女首领。#l\r\n");
	} else if (status == 2 && cm.getMap().getId() == fm20) { 
        if (selection == 0 && cm.getPlayer().getMeso() >= 5000000){
			cm.gainMeso(-5000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400549);
			cm.dispose();
		} else if (selection == 1  && cm.getPlayer().getMeso() >= 20000000){
			cm.gainMeso(-20000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400549);
			cm.spawnmonster(9400549);
			cm.spawnmonster(9400549);
			cm.spawnmonster(9400549);
			cm.spawnmonster(9400549);
			cm.dispose();
		} else if (selection == 2  && cm.getPlayer().getMeso() >= 5000000){
			cm.gainMeso(-5000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8180001);
			cm.dispose();
		} else if (selection == 3  && cm.getPlayer().getMeso() >= 20000000){
			cm.gainMeso(-20000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8180001);
			cm.spawnmonster(8180001);
			cm.spawnmonster(8180001);
			cm.spawnmonster(8180001);
			cm.spawnmonster(8180001);
			cm.dispose();
		} else if (selection == 4  && cm.getPlayer().getMeso() >= 5000000){
			cm.gainMeso(-5000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8180000);
			cm.dispose();
		} else if (selection == 5  && cm.getPlayer().getMeso() >= 20000000){
			cm.gainMeso(-20000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(8180000);
			cm.spawnmonster(8180000);
			cm.spawnmonster(8180000);
			cm.spawnmonster(8180000);
			cm.spawnmonster(8180000);
			cm.dispose();
		}
	} else if (status == 1 && cm.getMap().getId() == fm21) { 
        cm.PlayerToNpc("#L0#请给我一只雷利克。#l\r\n#L1#请给我5只雷利克。#l\r\n#L2#请给我一只黑魔女。#l\r\n#L3#请给我5只黑魔女。#l\r\n#L4#请给我一只大首领。#l\r\n#L5#请给我5只大首领。#l\r\n#L6#请给我猫首领。#l");
	} else if (status == 2 && cm.getMap().getId() == fm21) { 
        if (selection == 0 && cm.getPlayer().getMeso() >= 10000000){
			cm.gainMeso(-10000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400014);
			cm.dispose();
		} else if (selection == 1  && cm.getPlayer().getMeso() >= 40000000){
			cm.gainMeso(-40000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400014);
			cm.spawnmonster(9400014);
			cm.spawnmonster(9400014);
			cm.spawnmonster(9400014);
			cm.spawnmonster(9400014);
			cm.dispose();
		} else if (selection == 2  && cm.getPlayer().getMeso() >= 10000000){
			cm.gainMeso(-10000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9300028);
			cm.dispose();
		} else if (selection == 3  && cm.getPlayer().getMeso() >= 40000000){
			cm.gainMeso(-40000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9300028);
			cm.spawnmonster(9300028);
			cm.spawnmonster(9300028);
			cm.spawnmonster(9300028);
			cm.spawnmonster(9300028);
			cm.dispose();
		} else if (selection == 4  && cm.getPlayer().getMeso() >= 10000000){
			cm.gainMeso(-10000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400121);
			cm.dispose();
		} else if (selection == 5  && cm.getPlayer().getMeso() >= 40000000){
			cm.gainMeso(-40000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400121);
			cm.spawnmonster(9400121);
			cm.spawnmonster(9400121);
			cm.spawnmonster(9400121);
			cm.spawnmonster(9400121);
			cm.dispose();
		}
	} else if (status == 1 && cm.getMap().getId() == fm22) { 
        cm.PlayerToNpc("随时欢迎你再来！");
	} else if (status == 2 && cm.getMap().getId() == fm22) { 
        if (selection == 0 && cm.getPlayer().getMeso() >= 10000000){
			cm.gainMeso(-10000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400592);
			cm.dispose();
		} else if (selection == 1  && cm.getPlayer().getMeso() >= 40000000){
			cm.gainMeso(-40000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400592);
			cm.spawnmonster(9400592);
			cm.spawnmonster(9400592);
			cm.spawnmonster(9400592);
			cm.spawnmonster(9400592);
			cm.dispose();
		} else if (selection == 2  && cm.getPlayer().getMeso() >= 10000000){
			cm.gainMeso(-10000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9001010);
			cm.dispose();
		} else if (selection == 3  && cm.getPlayer().getMeso() >= 40000000){
			cm.gainMeso(-40000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9001010);
			cm.spawnmonster(9001010);
			cm.spawnmonster(9001010);
			cm.spawnmonster(9001010);
			cm.spawnmonster(9001010);
			cm.dispose();
		} else if (selection == 4  && cm.getPlayer().getMeso() >= 50000000){
			cm.gainMeso(-50000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400300);
			cm.dispose();
		} else if (selection == 5  && cm.getPlayer().getMeso() >= 200000000){
			cm.gainMeso(-200000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9400300);
			cm.spawnmonster(9400300);
			cm.spawnmonster(9400300);
			cm.spawnmonster(9400300);
			cm.spawnmonster(9400300);
			cm.dispose();
		} else if (selection == 6  && cm.getPlayer().getMeso() >= 1000000000){
			cm.gainMeso(-1000000000);
			cm.sendOk("#L0#请给我一只塔纳托斯。#l\r\n#L1#请给我5只塔纳托斯。#l\r\n#L2#请给我一只暗色科尼安。#l\r\n#L3#请给我5只暗色科尼安。#l\r\n#L4#请给我一只忧虑僧侣。#l\r\n#L5#请给我5只忧虑僧侣。#l\r\n");
			cm.spawnmonster(9300325);
			cm.dispose();
		}
    } else if (cm.getMap().getId() == fm18||fm19||fm20||fm21||fm22) {
		cm.sendOk("嗯，你好，旅行者。");
		cm.dispose();
	} else {
		cm.sendOk("嗯，你好，旅行者。");
}
}