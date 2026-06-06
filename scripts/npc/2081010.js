/*
Moose, Power of Shield
*/
var status = -1;

function action(mode, type, selection){
    if (mode == 1) {
	status++
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
	if (cm.getMapId() == 924000002) { // At Exit Map
	    cm.warp(240010400, 0);
	    cm.dispose();
	} else if (cm.getMapId() == 924000000) { // At start map
	    cm.sendNext("在送你去训练场之前，我必须告诉你一件事。在盾牌训练场你必须装备我给你的#b#t1092041##k。否则，你会死的。");
	} else {
	    cm.warp(924000002, 0);
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendSimple("别忘了一到达就#r装备盾牌#k！\r\n #b#L0# 我想要#t1092041#。#l \r\n #b#L1# 让我进入#m924000001#。#l \r\n #b#L2# 让我出去。#l");

    } else if (status == 2) {
	if (selection == 0) {
	    if (!cm.haveItem(1092041)) {
		if (cm.canHold(1092041)) {
		    cm.gainItem(1092041, 1);
		    cm.sendOk("我已经给你了#t1092041#。检查背包。你必须装备上它！");
		} else {
		    cm.sendOk("我无法给你#t1092041##k，因为装备栏没有空位。腾出空位后再试一次吧。" );
		}
	    } else {
		cm.sendOk("你已经拥有#t1092041##k了。不需要更多了。");
	    }
	    cm.safeDispose();
	} else if (selection == 1) {
	    cm.warp(924000001, 0);
	    cm.dispose();
	} else {
	    cm.warp(240010400, 0);
	    cm.dispose();
	}
    }
}