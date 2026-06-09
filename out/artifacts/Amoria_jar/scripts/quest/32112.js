/* Dawnveil
    [Ellinel Fairy Academy] Clue Number One
	Hidey Hole
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendAcceptDecline("这里有些奇怪的东西。我们应该查看一下吗？");	
	} else if (status == 1) { 
		qm.forceStartQuest();
		qm.gainItem(4033828,1);
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
		qm.forceCompleteQuest(32111);
		qm.forceCompleteQuest();
		qm.forceStartQuest(32113);
		qm.forceCompleteQuest(32113);
	    qm.dispose();		
	}
  }
}