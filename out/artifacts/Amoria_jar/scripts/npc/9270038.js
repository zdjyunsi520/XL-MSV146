/*
	Shalon - Ticketing Usher
*/

var cost = 20000;
var ap;

function start() {
    ap = cm.getEventManager("AirPlane");
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if(mode == 1) {
	status++;
    }
    if(mode == 0 && menu == 0) {
	cm.sendNext("请确认你想要离开的出发时间。谢谢。");
	cm.dispose();
    }
    if(mode == 0 && menu == 1) {
	cm.sendOk("你好~我是来自新加坡机场的#p");
	cm.dispose();
    }
    if(status == 0) {
	cm.sendSimple("#。我会帮你快速回到#m103000000#。有什么可以帮你的？\r\n#L0##b我想买一张去#m103000000#的机票#k#l\r\n#L1##b让我去候机室。#k#l"+cm.getNpc()+"机票需要花费20,000金币。你要购买吗？");
    } else if(status == 1) {
	menu = selection;
	if(menu == 0) {
	    cm.sendYesNo("你想现在进去吗？一旦进去你的票就作废了~感谢选择Wizet航空。");
	} else if(menu == 1) {
	    cm.sendYesNo("我觉得你的金币不够或者ETC背包没有空位。请检查后再来找我。");
	}
    } else if(status == 2) {
	if(menu == 0) {
	    if(!cm.canHold(4031732) || cm.getMeso() < cost) {
		cm.sendOk("请先购买机票。谢谢~");
	    } else {
		cm.gainMeso(-cost);
		cm.gainItem(4031732, 1);
	    }
	    cm.dispose();
	} else if(menu == 1) {
	    if(!cm.haveItem(4031732)) {
		cm.sendNext("很抱歉，出发前1分钟关闭登机口。");
	    } else if(ap == null || ap.getProperty("entry").equals("true")) {
		cm.sendNext("很抱歉，出发前1分钟关闭登机口。");
	    } else {
		cm.gainItem(4031732,-1);
		cm.warp(540010001);
	    }
	    cm.dispose();
	}
    }
}
