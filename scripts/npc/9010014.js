/* 	Aramia
 * 	Henesys fireworks NPC
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
		if (cm.getClient().getChannel() == 1) {
			cm.sendNext("该活动不能在第1频道进行。");
			cm.dispose();
			return;
		}
    if (status == 0) {
	cm.sendNext("你好~ 我是阿拉米亚。我知道怎么做爆竹！如果你能收集并给我火药桶，我们就可以放烟花了！请收集你从怪物那里得到的所有火药桶。");
    } else if (status == 1) {
	cm.sendSimple("每次玩家收集到所需的火药桶，我们就可以放一次烟花！\n\r #b#L0# 给你，我带来了火药桶。#l#k \n\r #b#L1# 请给我看看收集火药桶的当前进度。#l#k");
    } else if (status == 2) {
	if (selection == 1) {
	    cm.sendNext("火药桶收集状态 \n\r #B"+cm.getKegs()+"# \n\r 如果我们全部收集齐，就可以开始放烟花了...");
	    cm.safeDispose();
	} else if (selection == 0) {
	    cm.sendGetNumber("你带火药桶来了吗？那么请把你拥有的 #b火药桶#k 交给我。我会做一个漂亮的爆竹。你愿意给我多少？\n\r #b< 背包中的火药桶数量：0 >#k", 0, 0, 10000);
	}
    } else if (status == 3) {
	var num = selection;
	if (num == 0) {
	    cm.sendOk("T.T 我需要火药桶才能开始放烟花...\r\n 请重新考虑后再来找我。");
	} else if (cm.haveItem(4001128, num)) {
	    cm.gainItem(4001128, -num);
	    cm.giveKegs(num);
	    cm.sendOk("别忘了在获得火药桶后交给我。");
	}
	cm.safeDispose();
    }
}