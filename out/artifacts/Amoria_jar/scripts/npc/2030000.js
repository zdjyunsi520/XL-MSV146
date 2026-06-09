/**
	Jeff - El Nath : El Nath : Ice Valley II (211040200)
**/

var status = 0;

function start() {
    if (cm.haveItem(4031450)) {
	cm.warp(921100100, 0);
	cm.dispose();
    } else {
	status = -1;
	action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0 && cm.getPlayerStat("LVL") >= 50) {
	cm.sendNext("即使你等级很高，也很难进入那里，但如果你改变主意了，请来找我。毕竟我的工作就是守护这个地方。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("嘿，你看起来想往更深处走。不过那边到处都是凶猛危险的怪物，所以即使你觉得准备好了，也请小心。很久以前，镇上有几个勇敢的人进去想要消灭威胁小镇的敌人，但再也没有出来过……");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") >= 50) {
	    cm.sendYesNo("如果你想进去，我建议你改变主意。但如果你真的想进去……我只让那些足够强大、能在里面存活的人进去。我不希望再看到任何人死去。让我看看……嗯……！你看起来挺强的。好的，你想进去吗？");
	} else {
	    cm.sendPrev("如果你想进去，我建议你改变主意。但如果你真的想进去……我只让那些足够强大、能在里面存活的人进去。我不希望再看到任何人死去。让我看看……嗯……你还没达到50级。那我不能让你进去，算了吧。");
	}
    } else if (status == 2) {
	if (cm.getPlayerStat("LVL") >= 50) {
	    cm.warp(211040300, 5);
	}
	cm.dispose();
    }
}