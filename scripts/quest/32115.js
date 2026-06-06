/* Dawnveil
    [Ellinel Fairy Academy] Clue Number Two
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
		qm.gainItem(4033829,1);
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
	    qm.sendNext("这些服装一定是女孩们秘密制作的！我敢打赌她们正在排演我们找到的那个剧本！但这和她们的失踪有什么关系呢？");
	} else if (status == 1) {
	    qm.sendNextPrev("我们回到一楼去和女校长谈谈吧。\r\n\r\n（#b前往艾丽涅精灵学院的一楼。）");
	} else if (status == 2) {
		qm.removeAll(4033829);
		qm.forceCompleteQuest(32114);
		qm.forceCompleteQuest();
	    qm.dispose();		
	}
  }
}