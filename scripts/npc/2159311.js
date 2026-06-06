var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (selection == 0) {
	    cm.sendNext("Luminous振作起来好吗？我将与光之力量共鸣，将你体内的黑暗引出，也许这样你就会清醒过来。");
    } else if (status == 1) {
	    cm.sendNext("（Vieren的声音似乎在让我平静下来。奇怪。）");
	} else if (status == 2) {
	    cm.sendNext("黑暗不再蒙蔽我的心智。感谢你。");
	}	else if (status == 3) {
	    cm.sendNext("这没什么。我只是帮你找到了控制黑暗的力量。拿着这个极光棱镜，它可以让你自由出入。");
	//	cm.gainItem(2430874, 1);
   //     cm.changeJob(2710);
	} else if (status == 4) {
	   // cm.sendPrev("贯穿你的暗与光之魔法");
	    cm.forceStartQuest();
	    cm.forceCompleteQuest();
		cm.gainItem(2430874, 1);
        cm.changeJob(2710);
	    cm.dispose();
	}
}