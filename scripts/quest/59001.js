/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("还有，我看到#b#p9390306##k在哭……你知道是怎么回事吗？");
	} else if (status == 1) {
      qm.sendNextPrevS("Well...",14);
	} else if  (status == 2)  {
	  qm.sendAcceptDecline("#b#h0##k！你应该对朋友好一点！去跟#b#p9390306##k道歉！");
	} else if  (status == 3)  {
	  qm.sendNextS("没问题！一个真正的英雄擅长道歉，就像你刚才经历的那样！",15);
	} else if  (status == 4)  {
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
		qm.sendNextS("嗨，布兰……我真的很抱歉……",14); 
	} else if (status == 1) {
	    qm.sendNextPrevS("我就知道是你……",0,9390306); 
	} else if (status == 2) {
	    qm.sendNextPrevS("我真的非常抱歉。我以一个有志英雄的名誉庄严发誓，再也不会对你恶作剧了。",14); 
	} else if (status == 3) {
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
  }
}