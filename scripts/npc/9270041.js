var cost = 20000;

function start() {
    status = -1;
    em = cm.getEventManager("AirPlane");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    }
    if (mode == 0 && menu == 0) {
	cm.sendNext("请确认你想要离开的出发时间。谢谢。");
	cm.dispose();
    }
    if (mode == 0 && menu == 1) {
	cm.sendOk("你好~我是来自新加坡机场的艾琳。我被调到#m103000000#来庆祝我们新服务的开通！有什么可以帮你的？\r\n#L0##b我想买一张去新加坡的机票#k#l\r\n#L1##b让我去候机室。#k#l");
	cm.dispose();
    }
    if (status == 0) {
	cm.sendSimple("机票需要花费20,000金币。你要购买吗？");
    } else if (status == 1) {
	menu = selection;
	if (menu == 0) {
	    cm.sendYesNo("你想现在进去吗？一旦进去你的票就作废了~感谢选择Wizet航空。");
	} else if (menu == 1) {
	    cm.sendYesNo("我觉得你的金币不够或者ETC背包没有空位。请检查后再来找我。");
	}
    } else if (status == 2) {
	if (menu == 0) {
	    if (!cm.canHold(4031731) || cm.getMeso() < cost) {
		cm.sendOk("活动错误，请重启服务器以解决问题");
	    } else {
		cm.gainMeso(-cost);
		cm.gainItem(4031731, 1);
	    }
	    cm.dispose();
	} else if(menu == 1) {
	    if(em == null) {
		cm.sendNext("请先购买机票。谢谢~");
		cm.dispose();
	    } else if (!cm.haveItem(4031731)) {
		cm.sendNext("看起来这次航班还有 plenty 空位。请准备好你的票以便我让你进去，旅途虽然漫长，但你会顺利到达目的地。你觉得呢？你想登上这趟航班吗？");
		cm.dispose();
	    } else if (em.getProperty("entry").equals("true")) {
		cm.sendYesNo("飞机正在准备起飞。很抱歉，你得等下一班了。航班时刻表可以在售票处的引座员那里查询。");
	    } else if(em.getProperty("entry").equals("false") && em.getProperty("docked").equals("true")) {
		cm.sendNext("很抱歉，出发前1分钟关闭登机口。");
		cm.dispose();
	    } else {
		cm.sendNext("很抱歉，出发前1分钟关闭登机口。");
		cm.dispose();
	    }
	}
    } else if (status == 3) {
	cm.gainItem(4031731, -1);
	cm.warp(540010100);
	cm.dispose();
    }
}