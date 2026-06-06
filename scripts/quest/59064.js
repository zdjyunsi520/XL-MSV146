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
	  qm.sendNext("嘿，陌生人！你还好吗？");
	} else if (status == 1) {
	  qm.sendNextPrev("真不敢相信你遇到了格罗索·波尔波！你的船都被毁了一半。算我们运气好发现了你……你原本要去哪里？");
	} else if  (status == 2)  {
	  qm.sendNextPrevS("我正在前往#b维多利亚岛#n去见冒险岛世界的英雄们！",14);
	} else if  (status == 3)  {
	  qm.sendNextPrev("冒险岛世界的英雄们？你恰好认识#b Evan#n，弗朗德的继承人吗？");
	} else if  (status == 4)  {
	  qm.sendNextPrevS("当然认识！他是龙神！虽然我个人不认识他，但我记住了关于他的所有趣闻！",14);
	} else if  (status == 5)  {
	  qm.sendNextPrev("嘿，嗯，我听说 Evan在#b射手村#n。也许你应该去那里找他。");
	} else if  (status == 6)  {
	  qm.sendNextPrev("我真心相信，只要有正确的决心、勇气和运气，任何人都能成为英雄。总有一天，你得告诉我你的故事。但现在，再见了。");
	} else if  (status == 7)  {
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.dispose();
	}
}