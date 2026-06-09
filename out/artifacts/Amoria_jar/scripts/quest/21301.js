var status = -1;

function start(mode, type, selection) {
qm.forceStartQuest();
qm.dispose();
}

function end(mode, type, selection) {
	    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 0) {
	    qm.sendNext("什么？！那你肯定不是我的主人！我的主人会瞬间把他打得稀巴烂！");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
		qm.sendYesNo("你杀死那只#r盗贼乌鸦#k了吗？耶耶！你确实是我的主人！现在，把你找到的红玉石给我！我会把它重新接上...等等，你怎么不说话？别告诉我你没有带回来...");
	} else if (status == 1) {
		qm.sendNext("什么？你没带红玉石？！为什么不？你忘了？！天哪，我从没想过黑魔法师的诅咒会把你变成一个傻瓜..");
	} else if (status == 2) {
		qm.sendNextPrev("不。我不能让这件事把我推入绝望..现在比以往任何时候都更要保持乐观和警觉，呃...");
	} else if (status == 3) {
		qm.sendNextPrev("你想回去的话可以回去，但我确定盗贼已经逃走了。你只能做一个新的红玉石了。你以前做过一个，所以你记得需要的材料，对吧？所以快点吧！");
	} else if (status == 4) {
		qm.sendNextPrev("   #i4001173#");
	} else if (status == 5) {
		qm.sendNextPrev("没有希望。没有梦想。不！！！")
	} else if (status == 6) {
		qm.sendNextPrevS("#b玛哈正变得不稳定。你现在应该离开这里。你确信莉林一定能帮到你", 3);
		qm.forceCompleteQuest();
		qm.dispose();
	}
	//qm.dispose();
}