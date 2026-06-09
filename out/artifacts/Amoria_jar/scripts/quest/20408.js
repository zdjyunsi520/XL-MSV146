/*
 * Cygnus 2nd Job advancement - Proof of test
 * Soul
 */

var status = -1;

function start(mode, type, selection) {
	end(mode,type,selection); //idk lol
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("我猜你还没准备好承担正式骑士的责任。");
	    qm.dispose();
	    return;
	} else if (status >= 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }
    if (status == 0) {
		qm.sendYesNo("你拯救了埃雷布。你想成为上尉骑士吗？");
    } else if (status == 1) {
	if (!qm.canHold(1142069,1)) {
	    qm.sendOk("请腾出空间。");
	    qm.dispose();
	    return;
	}
	    qm.forceCompleteQuest();
	    if (qm.getJob() == 1111) {
		qm.changeJob(1112);
	    } else if (qm.getJob() == 1211) {
		qm.changeJob(1212);
	    } else if (qm.getJob() == 1311) {
		qm.changeJob(1312);
	    } else if (qm.getJob() == 1411) {
		qm.changeJob(1412);
	    } else if (qm.getJob() == 1511) {
		qm.changeJob(1512);
	    }
	    qm.teachSkill(10001005,1,0); //Echo
	    qm.gainItem(1142069,1);
	    qm.sendNext("你现在是骑士团的正式骑士了。");
    } else if (status == 3) {
	qm.sendPrev("既然你已经是骑士团的正式骑士了，就好好表现吧，维护骑士团的荣耀。");
	qm.dispose();
    }
}