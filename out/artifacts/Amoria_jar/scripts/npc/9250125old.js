var status = -1; 

function start() 
{ 
    status = -1; 
    action(1, 0, 0); 
}

function action(mode, type, selection) { 
    if (mode == 1) 
    status++; 
    else
    status--;
    if (status == -1) {
            cm.dispose();
    } else if (status == 0) {
        cm.sendSimple("嗨，我是#bRoyalMS#k的#rJQ传送员#k！你想尝试哪个JQ？\r\n#L0#熔岩之息 \r\n#L1#玩具工厂 \r\n#L2#忍耐之森 \r\n#L3#B1: 区域1 \r\n#L4#B2: 区域1 \r\n#L5#B3: 区域1");
    } else if (status == 1) {
    if (selection == 0) {
        cm.warp(280020000);
		cm.dispose();
    } else if (selection == 1) {
        cm.warp(922000000);
		cm.dispose();
    } else if (selection == 2) {
        cm.warp(690000066);
		cm.dispose();
    } else if (selection == 3) {
        cm.warp(910360000);
		cm.dispose();
	} else if (selection == 4) {
        cm.warp(910360100);
		cm.dispose();
	} else if (selection == 5) {
        cm.warp(910360200);
		cm.dispose();
        }
        cm.dispose();
    }
}  