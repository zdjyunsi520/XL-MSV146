var status = -1;
function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
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
	    qm.sendYesNo("我带你去见其他人。我们已经建立了一个临时行动基地，隐藏在这座山上的森林里。你会看到我说的是真的。");
	} else if (status == 2) {
			qm.forceCompleteQuest();
	    qm.dispose();
			qm.gainEXP(621);
	}
  }
}
