/* Lira
 * 
 * Adobis's Mission I : Breath of Lava <Level 2> (280020001)
 * Zakum Quest NPC 
 * Custom Quest 100202 -> Done this stage once
 */
 
var status;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("恭喜你走到了这一步！好吧，我想我应该给你你的#b火焰之息#k。你绝对配得上它！");
    }
    else if (status == 1) {
	cm.sendNextPrev("好了，你该出发了。");
    }
    else if (status == 2) {
	if (!cm.canHold(4031062,1)) {
	    cm.sendNext("请腾出物品栏空间。");
	    cm.dispose();
	    return;
	}
	cm.gainItem(4031062,1);
	cm.warp(211042300);
	// if this is their first time, exp gain
	if (cm.getQuestStatus(100202) != 2) {
	    cm.startQuest(100202);
	    cm.completeQuest(100202);
	    cm.gainExp(10000);
	}
	cm.dispose();
    }
}