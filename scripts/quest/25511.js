/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    qm.sendNext("夜光法师，我已经聚集了所有奥古里的力量。");
    } else if (status == 1) {
	    qm.sendNext("我会用这股力量将你体内的黑暗驱散。");
	} else if (status == 2) {
	    qm.sendNext("记住，征服你的黑暗只能靠你自己。奥古里只能帮到这里。");
	}	else if (status == 3) {
	    qm.sendPlayerToNpc("相信我。我不会让黑暗再次吞噬我！");
	} else if (status == 4) {
	    qm.sendNext("专注于这句话#b<在最深的黑暗中光芒最为耀眼>#k 好了，开始吧！");
	}	else if (status == 5) {
	    qm.sendPlayerToNpc("AAAUGH");
	} else if (status == 6) {
	    qm.sendNext("你做到了！没那么糟糕，对吧？");
	}	else if (status == 7) {
	    qm.sendPlayerToNpc("（这股涌过我全身的新能量是什么？就好像光与暗融为一体了……）");
	} else if (status == 8) {
	    qm.sendNext("你现在应该好好休息。我们以后再谈。");
	} else if (status == 9) {
        if (qm.canHold(1142481,1)) {	
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.forceCompleteQuest(25520);
		//qm.gainItem(2430874, 1);
		qm.gainItem(1142481, 1);
        qm.changeJob(2711);
	    qm.dispose();
	}  else {
	 qm.sendSimple("请确保你的装备栏有空余的格子。");
	 qm.dispose();
	}
	}
}