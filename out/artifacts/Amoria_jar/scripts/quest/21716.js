var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    qm.sendNext("什么？除了那个孩子之外我想不到其他嫌疑人了。请再想想。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("#p1032112#说了什么？", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(你告诉她#p1032112#观察到的情况。)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("一个拿着傀儡的孩子？那看起来非常可疑。我确定那个孩子就是绿蘑菇突然变得暴力的原因。");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNextS("这个孩子竟然敢在南部的森林里捣乱。谁知道要花多长时间才能恢复这片森林……我将不得不把大部分时间用于清理这个烂摊子。", 2);
    } else if (status == 4) {
	qm.sendPrevS("#b(你成功找到了导致绿蘑菇变化的原因。你应该向#p1002104#报告并传达你收集到的信息。)#k", 2);
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}