function start(mode, type, selection) {
qm.forceStartQuest();
qm.dispose();
}

var status = -1;
function end(mode, type, selection) {
	    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 1) {
	    qm.sendNext("好啊！就继续做一个没技能的傻瓜吧！");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
		qm.sendNext("哦，那不是……嘿，你还记得怎么制作红色玉石吗？你可能是个失忆的笨蛋，但这就是为什么我离不开你。现在快点把宝石给我！");
	} else if (status == 1) {
		qm.sendYesNo("好了，现在我有了红色玉石的力量。我会恢复你更多的能力。自从上次我们见面以来，你的等级已经提升了很多，所以我相信这次我可以多施展一些我的魔法！");
	} else if (status == 2) {
		qm.sendNext("请尽快恢复你所有的能力。我想像过去那样和你一起冒险探索。");
		qm.changeJob(2111);
		qm.gainSp(qm.getPlayer().getLevel() * 3 - 60 - 60 - 60);
		qm.forceCompleteQuest();
		qm.dispose();
	} 
	//qm.dispose();
}