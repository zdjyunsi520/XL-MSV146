var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("如果你改变主意了，请再跟我说。");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendAcceptDecline("你知道#b泰涅姆#k这个地方吗？那是远古历史中的名字……一个充满恶魔和魔法的大陆。如果你有兴趣了解更多，请来魔法森林找我。\r\n\r\n#r（如果你接受，将被传送到魔法森林的魔法图书馆）");
    } else if (status == 1) {
	    qm.sendNext("我在魔法图书馆等你");
    } else if (status == 2) {
	    qm.warp(101000003,0);
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.dispose();
    }
}