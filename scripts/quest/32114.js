/* Dawnveil
    [Ellinel Fairy Academy] Combing the Academy 4
	Cootie
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("女生宿舍的布局和男生一样，在每层的两端。不过我不知道该不该在女士房间里四处看……");	
	} else if (status == 1) { 
	    qm.sendNext("为了完成调查，我们必须做该做的事！（库蒂不知为什么脸红了……）\r\n\r\n请帮我在三楼宿舍四处查看。");
	} else if (status == 2) { 
		qm.forceStartQuest();
		qm.gainExp(4000);
		qm.dispose();
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
	    qm.sendNext("你找到了一个剧本？让我看看。\r\n\r\n……嗯，第一幕有一些明显的问题，那个自助冰淇淋圣代吧的场景看起来有点硬加上去的，但这是精灵娱乐的佳作。孩子们怎么会有这个？");
	} else if (status == 1) {
	    qm.sendNextPrev("让我们去三楼调查一下！也许我们会发现其他东西。\r\n\r\n（#b在艾丽涅精灵学院三楼与#e#p1500000##k#n交谈。）");
	} else if (status == 2) {
		qm.removeAll(4033828);
		qm.forceCompleteQuest();
		qm.forceStartQuest(32113);
		qm.forceCompleteQuest(32113);
	    qm.dispose();		
	}
  }
}