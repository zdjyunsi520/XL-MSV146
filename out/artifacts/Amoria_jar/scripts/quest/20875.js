/* RED Zero
    End of the Knight-in-Training
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("我明白了。了解自己的极限是好事，但我觉得你已经准备好继续前进了...");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("#h0#，你做得出奇地好。你想参加#b骑士考试#k吗？如果通过，你将成为一名真正的骑士。");
	} else if (status == 1) {
	    qm.sendOk("准备好考试时来埃雷布吧。你的首席骑士会测试你的能力。");
	    qm.forceStartQuest();
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
	    qm.sendNextPrev("你已经完成了骑士考试。你不再是见习骑士，而是一名真正的正式骑士。愿你的冒险生涯以某种方式为骑士团效力。");
	} else if (status == 1) {
	  qm.forceCompleteQuest();
          qm.changeJob(1510);
	  qm.dispose();		
	}
  }
}