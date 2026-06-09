/* Return to Masteria
	BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNext("我的铃铛掉到那棵树上了！\r\n用#b[Ctrl]#k敲打树，铃铛掉下来时用#b[Z]#k捡起来。");
	} else if (status == 1) {
	  qm.sendAcceptDecline("快点，拜托！我觉得自己像没穿衣服一样！而且我在铃铛里藏了猫零食……");
	} else if  (status == 2)  {
	  qm.sendNextS("和之前一样，按#e#b[Ctrl]#k#n攻击树，按#e#b[Z]#k#n捡起铃铛。",14);
	} else if  (status == 3)  {
	  qm.forceStartQuest();
	  qm.gainItem(4034005,1);
	  qm.killAllMobs();
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
	  qm.sendNextS("给你，小猫咪！",14);
	} else if (status == 1) {
	  qm.sendNextPrev("转过去。我不能让你看到我把零食藏在哪里……");
	} else if  (status == 2)  {
	  qm.sendNextPrevS("好了没？",14);
	} else if  (status == 3)  {
	  qm.sendNextPrev("等一下……*大口大口吃，大口大口吃，嗝*");
	} else if  (status == 4)  {
	  qm.forceCompleteQuest();
	  qm.gainItem(4034005, -1);
	  qm.warp(866107000,0);
	  //qm.showBeastTamerTutScene2();
	  qm.dispose();
	}
  }
}