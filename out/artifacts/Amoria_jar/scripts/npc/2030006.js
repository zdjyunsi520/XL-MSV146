/* Holy Stone
	Hidden Street: Holy Ground at the Snowfield (211040401)
	
	Custom quest: 100102
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getQuestStatus(1440) != 1 || cm.getQuestStatus(1439) != 1) {
	    cm.warp(910540000);
	    cm.dispose();
	} else {
	    cm.sendNext("哈哈，我是一块石头。");
	}
    } else if (status == 1) {
	cm.sendNextPrev("给我一颗#b暗黑水晶#k，我就允许你获得#b智慧项链#k。");
    } else if (status == 2) {
	if (!cm.haveItem(4005004)) {
	    cm.sendOk("你没有#b暗黑水晶#k。");
	    cm.dispose();
	} else {
	    cm.gainItem(4005004, -1);
	    cm.gainItem(4031058, 1);
	    cm.sendOk("Indeed.");
	    cm.dispose();
	}
    }
}