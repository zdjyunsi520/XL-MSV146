/* Return to Masteria
    The Story of Heroes
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("看着你，我想起了很久以前那些勇敢抵抗黑法师的英雄们……");
	} else if (status == 1) {
	    qm.sendNextPrevS("太棒了！奶奶跟我说了很——多关于他们的事。希望有一天我能见到他们！",14);
	} else if (status == 2) {
	   qm.sendNextPrev("我想维多利亚岛上有人知道如何联系他们。");
	} else if (status == 3) {
	   qm.sendNextPrev("你为什么不去城镇外面的港口看看？那里应该有一艘开往维多利亚岛的船。");
	} else if (status == 4) {
	   qm.sendNextPrev("祝你的旅途好运，年轻人。我知道你总有一天会成为伟大的英雄。");
	} else if (status == 5) {
	    qm.forceStartQuest();
		qm.gainExp(2758);
	    qm.dispose();	
	}
}