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
	    qm.sendNext("哇哦。自从我上次见到你，你真的成长了很多。但你听说过新职业了吗？ ");
	} else if (status == 1) {
	    qm.sendNextPrev("天哪太棒了！所有30级以上的战士都可以！");
	} else if (status == 2) {
	    qm.askAcceptDecline("那么.....你想在强敌面前考验你的技能吗？你所需要的就是从那些怪物身上获得30个黑暗弹珠！走吧。");
		qm.forceStartQuest();
	} else if (status == 3) {
	    if (!qm.haveItem(4031013, 30)) {
                qm.warp(910230000);// warrior test
                qm.dispose();
	    }else {
		qm.dispose();
		}
            }
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
	    if (qm.haveItem(4031013, 30) ) {
			qm.removeAll(4031013);
			qm.sendOk("恭喜你，你现在是一名枪战士了！");
            qm.changeJob(130);
			//qm.gainSp(3);
			qm.forceCompleteQuest();
            qm.dispose();
	    }
	}
	}
}