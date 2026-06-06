var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 930000000:
	    cm.sendNext("欢迎。请进入传送门。");
	    break;
	case 930000100:
	    cm.sendNext("我们必须消灭所有这些被污染的怪物！");
	    break;
	case 930000200:
	    cm.sendNext("我们必须消灭所有这些被污染的 реактор！");
	    break;
	case 930000300:
	    cm.warpParty(930000400);
	    break;
	case 930000400:
	    if (cm.haveItem(4001169,20)) {
		cm.warpParty(930000500);
		cm.gainItem(4001169,-20);
	    } else if (!cm.haveItem(2270004)) {
		cm.gainItem(2270004,10);
		cm.sendOk("祝你在净化这些怪物时好运！");
	    } else {
		cm.sendOk("我们必须净化所有这些被污染的怪物！给我从它们身上获取20个怪物弹珠！");
	    }
	    break;
	case 930000600:
	    cm.sendNext("就是这个！将魔法石放在祭坛上！");
	    break;
	case 930000700:
	    cm.removeAll(4001163);
	    cm.removeAll(4001169);
	    cm.removeAll(2270004);
	    cm.warp(930000800,0);
	    break;
    }
    cm.dispose();
}