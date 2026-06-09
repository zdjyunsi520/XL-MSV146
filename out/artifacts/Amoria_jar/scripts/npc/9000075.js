var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
	} else {
		status++;
		if(status == 0){
			cm.sendSimple("你好。欢迎来到哥布林神殿入口。你想去哪里？#r你需要黄金神殿门票才能进入。这里所有的怪物都会掉落日蚀，这是进入Boss罗摩那所需的。#k\r\n\r\n#b#L0#哥布林神殿1 - 蓝色哥布林(2200 HP/170 EXP)#l\r\n#L1#哥布林神殿2 - 红色哥布林(4150 HP/336 EXP)#l\r\n#L2#哥布林神殿3 - 石头哥布林(9300 HP/501 EXP)#l#k");
		} else if (status == 1) {
			if (!cm.haveItem(4001431) && !cm.haveItem(4001432)) {
				cm.sendOk("你需要一张黄金神殿门票。");
			} else if (cm.getMap(cm.getMapId() + 500 + (selection * 100)).getCharactersSize() > 0) {
				cm.sendOk("已经有人在地图中了。");
			} else {
				if (cm.haveItem(4001431) && !cm.haveItem(4001432)) {
					cm.gainItem(4001431, -1);
				}
				cm.warp(cm.getMapId() + 500 + (selection * 100),0);
			}
			cm.dispose();
		}
	}
}