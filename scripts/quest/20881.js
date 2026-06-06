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
            qm.sendOk("去找图书管理员维兹，询问你必须带到埃雷布的那本书。");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendNext("我在日常巡视书架时发现了这本古书。多亏了我的超感读书能力，我认出了上面的文字很重要。我立刻通过信鸽联系了骑士团。");
	} else if (status == 1) {
	    qm.sendAcceptDecline("我把这本书保管在我的绝密超级保险室里。就在那边。请把它拿走并交给奈因哈特。");
	    qm.forceStartQuest();
	    qm.dispose();
	}
}

//function end(mode, type, selection) {
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
          qm.changeJob(1511);
	  qm.dispose();		
	}
  }
}  