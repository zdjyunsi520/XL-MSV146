/* Return to Masteria
    Bluffing Tom's Mama
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
    if (mode == 1) {
        status++;
    } else 
        if (status == 3) {
		    qm.sendOk("我一个人去害怕。你愿意陪我吗？汤姆会……");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendNextS("哦，终于来了！你一定是来救我的！",0,9390316);
	} else if (status == 1) {
	    qm.sendNextPrevS("吹牛汤姆说他妈妈应该就在这附近。是你吗？",14);
	} else if (status == 2) {
	    qm.sendNextPrevS("什么？我珍贵的汤米宝贝是救了我的人？哦，亲爱的、甜甜的、珍贵的、完美的孩子！",0,9390316);
	} else if (status == 3) {
		qm.sendYesNoS("走吧。我们离开这里。（如果你接受，将被传送到另一个地图。）",0,9390313);
	} else if (status == 4) {
	    qm.forceCompleteQuest();
		qm.gainExp(764);
		qm.warp(866000000);
	    qm.dispose();		
	}
  }
}