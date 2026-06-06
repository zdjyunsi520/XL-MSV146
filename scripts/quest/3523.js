/*
	NPC Name: 		Grendel the really old
	Description: 		Quest - In search of the lost memory
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("天哪，自从我们第一次见面以来你成长了这么多！你失去了记忆？这个交给我来处理。");
	    qm.forceCompleteQuest();
	    qm.forceCompleteQuest(3507);
	    qm.dispose();
	}
    //	qm.forceStartQuest();
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
	    qm.sendNextPrev("Test");
	    qm.dispose();
	}
    }
}