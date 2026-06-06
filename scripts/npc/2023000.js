var map;
var cost;
var location;
var mapname;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendNext("嗯……再考虑考虑吧。这辆出租车物超所值！你绝不会后悔的！");
	cm.dispose();
	return;
    }

    if (status == 0) {
	switch (cm.getMapId()) {
	    case 540000000: // CBD
		map = 541020000;
		cost = 30000;
		mapname = "乌鲁城";
		break;
	    case 240000000: // Leafre
		map = 240030000;
		cost = 55000;
		mapname = "奥西利亚大陆";
		break;
	    case 220000000: // Ludi
		map = 220050300;
		cost = 45000;
		mapname = "奥西利亚大陆";
		break;
	    case 211000000: // El Nath
		map = 211040200;
		cost = 45000;
		mapname = "奥西利亚大陆";
		break;
	    case 105000000:
		map = 105030000;
		cost = 30000;
		mapname = "维多利亚大陆";
		break;
	    case 105030000:
		map = 105000000;
		cost = 30000;
		mapname = "维多利亚大陆";
		break;
	    default:
		map = 211040200;
		cost = 45000;
		mapname = "奥西利亚大陆";
		break;
	}
	cm.sendNext("你好！这辆子弹出租车可以带你从#m"+cm.getMapId()+"#到#b#m"+map+"##k前往 "+mapname+"！#b"+cost+" 金币#k的运费可能看起来有点贵，但如果想在危险区域轻松穿行的话，其实也不算贵！");
    } else if (status == 1) {
	cm.sendYesNo("#b你想支付金币#k前往#b#m"+map+"##k?");
    } else if (status == 2) {
	if (cm.getMeso() < cost) {
	    cm.sendNext("你似乎没有足够的金币。非常抱歉，如果你不付钱的话我没法帮你。多猎杀一些怪物攒够钱再来吧。");
	    cm.dispose();
	} else {
	    cm.gainMeso(-cost);
	    cm.warp(map, 0);
	    cm.dispose();
	}
    }
}