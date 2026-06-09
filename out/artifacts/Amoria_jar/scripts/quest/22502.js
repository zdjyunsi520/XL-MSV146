/*
	Description: 	Quest - A Bite of Hay
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("嗯，你不去试试永远不会知道。那只蜥蜴大得可以上枫之岛信不信由你了。它可能会吃干草。");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("一只蜥蜴不会喜欢#b一把干草#k吗，像牛一样？附近有很多#b干草堆#k，所以试试喂它那个。");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.evanTutorial("UI/tutorial/evan/12/0", 1);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("哦，我好饿！你找到什么好吃的给我吃了吗，主人？嗯……这看起来像……草。我真的能吃这个吗？好吧主人，我相信你。");
    } else if (status == 1) {
	qm.sendOk("好的，来吧！");
    } else if (status == 2) {
	qm.gainExp(800);
	qm.gainItem(4032452, -3);
	qm.sendOk("呸！这是什么？又苦又硬！你确定这能吃吗？主人，你吃！我不能吃这个！给我找点别的！");
	qm.forceCompleteQuest();
	qm.dispose();
    }
}