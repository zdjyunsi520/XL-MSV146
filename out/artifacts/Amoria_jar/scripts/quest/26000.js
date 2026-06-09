var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
	    status++;
	} else {
	    qm.dispose();
	    return;
	}
	if (qm.getGuild().getLevel() < 1 || !qm.getGuild().hasSkill(910000006)) {
	    qm.dispose();
	    return;
	}
	if (status == 0) {
	    qm.sendYesNo("公会物资已经到了。拿着，别抱怨数量。当你的公会等级提升时你总是可以获得更多的。");
        } else {
	    if (!qm.canHold(2002037, qm.getGuild().getLevel() * 20)) {
		qm.sendOk("请腾出一些空间");
	    } else {
		qm.gainItemPeriod(2002037, qm.getGuild().getLevel() * 20, 7);
	        qm.forceCompleteQuest();
	    }
	    qm.dispose();
        }
}
function end(mode, type, selection) {
	if (mode == 1) {
	    status++;
	} else {
	    qm.dispose();
	    return;
	}
	if (qm.getGuild().getLevel() < 1 || !qm.getGuild().hasSkill(910000006)) {
	    qm.dispose();
	    return;
	}
	if (status == 0) {
	    qm.sendYesNo("公会物资已经到了。拿着，别抱怨数量。当你的公会等级提升时你总是可以获得更多的。");
        } else {
	    if (!qm.canHold(2002037, qm.getGuild().getLevel() * 20)) {
		qm.sendOk("请腾出一些空间");
	    } else {
		qm.gainItemPeriod(2002037, qm.getGuild().getLevel() * 20, 7);
	        qm.forceCompleteQuest();
	    }
	    qm.dispose();
        }
}
