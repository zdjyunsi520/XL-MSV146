var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
        
    if (status == 0) {
	if (cm.haveItem(4031025)) {
	    cm.sendNext("我把手放在雕像上，但什么也没发生。\r\n大概是因为我身上带着粉色堇菜花，看起来它只会干扰雕像的力量。");
	    cm.safeDispose();
	} else if (cm.haveItem(4031028)) {
	    cm.sendNext("我把手放在雕像上，但什么也没发生。\r\n大概是因为我身上带着白色堇菜花，看起来它只会干扰雕像的力量。");
	    cm.safeDispose();
	} else if (cm.haveItem(4031026)) {
	    cm.sendNext("我把手放在雕像上，但什么也没发生。\r\n大概是因为我身上带着蓝色堇菜花，看起来它只会干扰雕像的力量。");
	    cm.safeDispose();
	} else {
	    cm.sendYesNo("我把手放在雕像上后，一道奇异的光芒笼罩了我，感觉像是被吸到某个地方去了。就这样被随机传送到别处，真的没问题吗？");
	}

    } else if (status == 1) {
	if (cm.getQuestStatus(2054) == 1 || cm.getQuestStatus(2054) == 2) {
	    cm.warp(910530200, 0);
	} else if (cm.getQuestStatus(2053) == 1 || cm.getQuestStatus(2053) == 2) {
	    cm.warp(910530100, 0);
	} else if (cm.getQuestStatus(2052) == 1 || cm.getQuestStatus(2052) == 2) {
	    cm.warp(910530000, 0);
	}
	cm.dispose();
    }
}	


