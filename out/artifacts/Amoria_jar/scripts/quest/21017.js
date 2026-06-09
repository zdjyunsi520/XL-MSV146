var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 5) {
	    qm.sendNextS("#b(你因为恐惧而拒绝了，但你不能就这样逃避。深呼吸，冷静下来，再试一次。)#k", 2);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("看来你已经热身好了。这时候严格的训练真的能帮你打下坚实的基础。让我们继续基础训练吧？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("这次去#b#m140020200##k打败一些#r#o0100133##k吧。我觉得大约#r20只#k就够了。去吧...嗯？你有什么想说的吗？", 8);
    } else if (status == 2) {
	qm.sendNextPrevS("数量不是越来越多了吗？", 2);
    } else if (status == 3) {
	qm.sendNextPrevS("当然了。怎么，你对20只不满意？你想打败100只吗？哦，不如999只？在魔法密林的人就能轻松做到。毕竟我们在训练...", 8);
    } else if (status == 4) {
	qm.sendNextPrevS("哦不不不。20只足够了", 2);
    } else if (status == 5) {
	qm.askAcceptDecline("你不必这么谦虚。我理解你想尽快恢复曾经作为英雄的实力。这种态度正是你成为英雄的原因。");
    } else if (status == 6) {
	qm.forceStartQuest();
	qm.sendNextS('#b(You accepted, thinking you might end up having to 999 of them if you let her keep talking.)#k', 2);
    } else if (status == 7) {
	qm.sendNextPrevS('Please go ahead and slay 20 #o0100133#s.', 8);
    } else if (status == 8) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
