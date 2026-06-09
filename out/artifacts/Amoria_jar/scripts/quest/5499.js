/* Return to Masteria
    The Curbrock in the Grass
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("你是来听克布洛克的故事的吗？");
	} else if (status == 1) {
        qm.sendNextPrev("那么，靠近点，我来给你讲讲我的故事");
 	} else if (status == 2) {
	    qm.sendNextPrev("很久以前，有一条蛇试图通过吞食无助的人类来变成人。");
	} else if (status == 3) {
	    qm.sendNextPrev("那条蛇假装和我们一样，甚至取了一个人类的名字——克布洛克！然而，当他的恶行传言散播开来后，他消失了。");
	} else if (status == 4) {
	    qm.sendNextPrev("但我最近听到了一些传言。有人说在林中之城有人接连失踪。他们说是克布洛克回来了。");
	} else if (status == 5) {
	    qm.sendYesNo("你愿意亲自去看看这些传言是否属实吗？如果你想的话，我现在就可以把你传送到那里。\r\n\r\n#b#e（如果你接受，将被传送到克布洛克的藏身处。放弃并重新接受任务可以重新开始。）#n#k");
	} else if (status == 6) {
	    qm.sendNext("记住，克布洛克非常致命。如果你遇到他，一定要逃跑！");
	} else if (status == 7) {
	    qm.forceStartQuest();
		qm.warp(600050000);
        qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("你看起来不太好，我的朋友。");
	} else if (status == 1) {
	    qm.sendNextPrev("那么传言是真的。我们必须在他吞噬更多人之前阻止他。\r\n但你仍然太弱了。等你变强了再来找我。\r\n我会送你#i1182054:# #b#t1182054##k作为礼物。");
	} else if (status == 2) {
	    qm.gainItem(1182054,1)
		qm.forceCompleteQuest();
	    qm.dispose();		
	}
  }
}