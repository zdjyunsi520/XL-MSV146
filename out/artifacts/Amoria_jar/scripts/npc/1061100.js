/*
	Hotel Receptionist - Sleepywood Hotel(105040400)
*/

var status = 0;
var regcost = 499;
var vipcost = 999;
var tempvar;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++; if (mode == 0 && status == 1) {
	cm.dispose();
	return;
    } if (mode == 0 && status == 2) {
	cm.sendNext("我们还提供其他服务，请仔细考虑后再做决定。");
	cm.dispose();
	return;
    }
    if (status == 0) {
	cm.sendNext("欢迎光临。我们是魔法密林旅馆。我们旅馆一直致力于为您提供最好的服务。如果你因为打猎而疲惫不堪，何不来我们旅馆好好休息一下？");
    }
    if (status == 1) {
	cm.sendSimple("我们提供两种房间服务。请选择你喜欢的一种。\r\n#b#L0#普通桑拿（" + regcost + " 金币/次）#l\r\n#L1#VIP桑拿（" + vipcost + " 金币/次）#l");
    }
    if (status == 2) {
	tempvar = selection;
	if (tempvar == 0) {
	    cm.sendYesNo("你选择了普通桑拿。你的HP和MP会快速恢复，还可以在那里购买一些物品。确定要进去吗？");
	}
	if (tempvar == 1) {
	    cm.sendYesNo("你选择了VIP桑拿。你的HP和MP恢复速度比普通桑拿更快，还可能找到特殊物品。确定要进去吗？");
	}
    }
    if (status == 3) {
	if (tempvar == 0) {
	    if (cm.getMeso() >= regcost) {
		cm.warp(105000011);
		cm.gainMeso(-regcost);
	    } else {
		cm.sendNext("很抱歉，看起来你没有足够的金币。至少需要 " + regcost + " 金币才能入住我们旅馆。");
	    }
	} if (tempvar == 1) {
	    if (cm.getMeso() >= vipcost) {
		cm.warp(105000012);
		cm.gainMeso(-vipcost);
	    } else {
		cm.sendNext("很抱歉，看起来你没有足够的金币。至少需要 " + regcost + " 金币才能入住我们旅馆。");
	    }
	}
	cm.dispose();
    }
}
