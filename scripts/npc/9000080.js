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
			cm.sendSimple("你好。欢迎来到猴子神殿入口。你想去哪里？#r你需要黄金神殿门票才能进入。#k\r\n\r\n#b#L0#猴子神殿1 - 野猴子(250 HP/52 EXP)#l\r\n#L1#猴子神殿2 - 猴妈妈(350 HP/70 EXP)#l\r\n#L2#猴子神殿3 - 白色小猴子(650 HP/120 EXP)#l\r\n#L3#猴子神殿4 - 白色猴妈妈(1040 HP/200 EXP)#l#k");
		} else if (status == 1) {
			if (!cm.haveItem(4001431) && !cm.haveItem(4001432)) {
				cm.sendOk("你需要一张黄金神殿门票。");
			} else if (cm.getMap(cm.getMapId() + 100 + (selection * 100)).getCharactersSize() > 0) {
				cm.sendOk("已经有人在地图中了。");
			} else {
				if (cm.haveItem(4001431) && !cm.haveItem(4001432)) {
					cm.gainItem(4001431, -1);
				}
				cm.warp(cm.getMapId() + 100 + (selection * 100),0);
			}
			cm.dispose();
		}
	}
}