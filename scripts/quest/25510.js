/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    qm.sendNext("夜光法师，振作起来，好吗？我会与光之力量共鸣，将你体内的黑暗引出来，也许这样你就会恢复理智。");
    } else if (status == 1) {
	    qm.sendPlayerToNpc("（维伦的声音似乎在让我平静下来。奇怪。）");
	} else if (status == 2) {
	    qm.sendPlayerToNpc("黑暗不再蒙蔽我的心智。感谢你。");
	}	else if (status == 3) {
	    qm.sendNext("这没什么。我只是帮你找到了控制黑暗的力量。拿着这个极光棱镜，它将允许你自由进出。");
	//	qm.gainItem(2430874, 1);
   //     qm.changeJob(2710);
	} else if (status == 4) {
	   // qm.sendPrev("贯穿你的暗与光的魔法……");
	    if (qm.canHold(1142480,1) || qm.canHold(2430874,1)) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.gainItem(2430874, 1);
		qm.gainItem(1142480, 1);
        qm.changeJob(2710);
		qm.forceCompleteQuest(25519);
//		qm.gainItem(1142480);
	    qm.dispose();
	} else {
	  qm.sendSimple("请确保你的消耗栏和装备栏有空余的格子。");
	  qm.dispose();
	}
}
}