/* Return to Masteria
    Kobold Knowledge
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 3) {
		    qm.sendOk("哦，你只是想问这个吗？好吧，随时欢迎你来聊天，尤其是关于我亲爱的、珍贵的汤米宝贝。");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNext("怎么了？");
	} else if (status == 1) {
	    qm.sendNextPrevS("关于#b#m866000150##k的#b#o9390927##k你能告诉我什么？",14);
	} else if (status == 2) {
	   qm.sendNextPrev("没什么……我在#b#m866000150##k的尽头看到了它们的#b#o9390915##k，但我确定那完全没用。");
	} else if (status == 3) {
	   qm.sendYesNoS("你太棒了！这帮了大忙了！如果除掉它们的王，它们就群龙无首了！谢谢，女士！（岩石一定想知道这个！）",16);
	} else if (status == 4) {
	   qm.sendNext("回头见！");
	} else if (status == 5) {
	    qm.forceStartQuest();
	    qm.dispose();	
	}
}