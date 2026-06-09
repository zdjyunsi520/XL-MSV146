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
			cm.sendSimple ("这是你的蓝色许愿票！");
				  } else if (selection == 0) {
                                  if(cm.getMeso() >= 500000000) {
                                  cm.gainMeso(-500000000);
				  cm.gainItem(4031545, 1);
                                  cm.sendOk("你的金币不够。");
				  cm.dispose();
        }
        else {
        cm.sendOk("这是你的绿色许愿票！");
        cm.dispose();
        }
 				  } else if (selection == 1) {
                                  if(cm.getMeso() >= 1000000000) {
                                  cm.gainMeso(-1000000000);
				  cm.gainItem(4031544, 1);
                                  cm.sendOk("这是你的黄色许愿票！");
				  cm.dispose();
        }
        else {
        cm.sendOk("这是你的绿色许愿票！");
        cm.dispose();
        }
				  } else if (selection == 2) {
                                  if(cm.getMeso() >= 1500000000) {
                                  cm.gainMeso(-1500000000);
				  cm.gainItem(4031543, 1);
                                  cm.sendOk("这是你的500,000,000(5亿)金币！");
				  cm.dispose();
        }
        else {
        cm.sendOk("这是你的绿色许愿票！");
        cm.dispose();
        }
				  } else if (selection == 3) {
                                  if(cm.getMeso() < 1600000000 && cm.haveItem(4031545, 1)) {
                                  cm.gainMeso(500000000);
				  cm.gainItem(4031545, -1);
                                  cm.sendOk("你没有蓝色许愿票，或者你的金币太多了(如果强行给你金币，你的金币会变成负数！)。");
				  cm.dispose();
        }
        else {
        cm.sendOk("这是你的1,000,000,000(10亿)金币！");
        cm.dispose();
        }
				  } else if (selection == 4) {
                                  if(cm.getMeso() < 1100000000 && cm.haveItem(4031544, 1)) {
                                  cm.gainMeso(1000000000);
				  cm.gainItem(4031544, -1);
                                  cm.sendOk("这是你的1,500,000,000(15亿)金币！");
				  cm.dispose();
        }
        else {
        cm.sendOk("这是你的1,000,000,000(10亿)金币！");
        cm.dispose();
        }
				  } else if (selection == 5) {
                                  if(cm.getMeso() < 600000000 && cm.haveItem(4031543, 1)) {
                                  cm.gainMeso(1500000000);
				  cm.gainItem(4031543, -1);
                                  cm.sendOk("这是你的1,500,000,000(15亿)金币！");
				  cm.dispose();
        }
        else {
        cm.sendOk("这是你的1,000,000,000(10亿)金币！");
        cm.dispose();
        }
				} else if (selection == 6) {
				  cm.warp(610030012);
				  cm.dispose();
				} else if (selection == 7) {
				  cm.warp(610030015);
				  cm.dispose();
				} else if (selection == 8) {
				  cm.warp(610030013);
				  cm.dispose();
				} else if (selection == 9) {
				  cm.warp(683000000);
				  cm.dispose();
			    }
		    }
}