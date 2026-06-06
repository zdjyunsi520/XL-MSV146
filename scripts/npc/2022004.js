/* 
 * Tylus
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6192) == 1) {
	    cm.sendOk("感谢你的护卫。多亏了你我才能完成任务。出来后和我说话。");
	} else {
	    cm.warp(211000001, 0);
	    cm.dispose();
	}
    } else if (status == 1) {
	if (!cm.haveItem(4031495)) {
	    if (cm.canHold(4031495)) {
		cm.gainItem(4031495, 1);
		cm.warp(211000001, 0);
		cm.dispose();
	    } else {
		cm.sendOk("由于其他物品栏没有空位，无法获得物品。请腾出空间后再来和我说话。");
		cm.safeDispose();
	    }
	} else {
	    cm.warp(211000001, 0);
	    cm.dispose();
	}
    }
}