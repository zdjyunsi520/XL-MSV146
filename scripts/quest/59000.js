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
	  qm.sendNext("#b#h0##k，这是你干的吗？我知道捉弄#b#p9390305##k很有趣，但这真的不太好。");
	} else if (status == 1) {
      qm.sendNextPrev("我为你感到羞愧。去跟#b#p9390305##k道歉！");
	} else if  (status == 2)  {
	  qm.sendAcceptDecline("一个真正的英雄从不害怕道歉！");
	} else if  (status == 3)  {
	  qm.sendNextS("我要做一个史上最史诗级的道歉！",15); 
	} else if  (status == 4)  {
	  qm.forceStartQuest();
	  qm.sendQuestWindow();
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
		qm.sendNextS("希尔加，我真心地、深深地、彻底地、完全地感到抱歉。",14); 
	} else if (status == 1) {
	    qm.sendNextPrevS("是你对我恶作剧的，#h0#？",0,9390305); 
	} else if (status == 2) {
	    qm.sendNextPrevS("我以为大家会觉得这很有趣，但我错了。我史诗级地、英雄般地、超级地抱歉。你能原谅我吗？",14); 
	} else if (status == 3) {
	    qm.sendNextPrevS("唉。你还小，所以我就不跟你计较了。别再这样了，好吗？",0,9390305); 
	} else if (status == 4) {
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
  }
}