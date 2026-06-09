/* Return to Masteria
    Kobolds... For Real?
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 2) {
		    qm.sendNext("我觉得我现在可以信任你了。请帮助我们。");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNext("啊，你来了。我一直在想……");
	} else if (status == 1) {
	    qm.sendNextPrev("你和吹牛汤姆一直在喋喋不休地谈论狗头人的事，这让我很不安……");
	} else if (status == 2) {
	    qm.sendYesNo("你介意去城镇外的森林里查看一下狗头人的情况吗？");	
	} else if (status == 3) {
	    qm.sendNextS("真相终于要钻进你那榆木脑袋了！我马上就去！",14);	
	} else if (status == 4) {
	    qm.sendNextPrevS("（当，当，当！英雄冲向森林！）",14);	
	} else if (status == 5) {
	    qm.forceStartQuest();
		qm.forceCompleteQuest();
	    qm.dispose();	
	}
}