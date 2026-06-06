/* Return to Masteria
    The Boy Who Cried Kobold
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
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNextS("你知道吗……",0,9390313);
	} else if (status == 1) {
	    qm.sendNextPrevS("附近的森林里有狗头人？",0,9390313);
	} else if (status == 2) {
	    qm.sendNextPrevS("我见过一两个狗头人……邪恶的野兽。",14);	
	} else if (status == 3) {
		qm.sendNextPrevS("真的吗？我还以为狗头人只是传说呢。以前从来没见过谁亲眼见过。",0,9390313);
	} else if (status == 4) {
	    qm.forceCompleteQuest();
		qm.gainExp(246);
	    qm.dispose();		
	}
  }
}