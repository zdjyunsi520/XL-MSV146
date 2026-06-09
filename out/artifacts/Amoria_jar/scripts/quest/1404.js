/* Dawnveil
    [Job Advancement] Thieves of Kerning City
	Dark Lord
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
        qm.dispose();
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
	    qm.sendYesNo("欢迎来到飞侠的秘密基地。只有被邀请的人才能找到这里。出去的时候别迷路了。那么，你准备好成为飞侠了吗？");
	} else if (status == 1) {
	    qm.sendNext("从现在起，你已经成为一名飞侠了。既然你现在可以使用飞侠技能了，打开技能窗口看看吧。随着你升级，你将能够学习更多技能。");
	} else if (status == 2) {
		qm.sendNextPrev("但光有技能还不够，对吧？一个真正的飞侠必须有匹配的属性！飞侠以LUK为主要属性，DEX为次要属性。如果你不知道怎么加点，就用#b自动分配#k吧。");
	} else if (status == 3) {
	   	qm.sendNextPrev("哦，我还给了你一个小礼物。我扩大了你的装备和其他物品栏的几个槽位。更大的背包，更好的生活，我总是这么说。");
	} else if (status == 4) {
	    qm.sendNextPrev("现在给你一个警告。每个人在战斗中阵亡时都会损失一部分获得的经验值。小心点。你不会想失去你辛苦获得的东西的，对吧？");
	} else if (status == 5) {
	    qm.sendNextPrev("好了，就是这样。拿上我给你的装备，用它来训练你的飞侠技能吧。");
	} else if (status == 6) {
	    qm.resetStats(4, 4, 4, 25);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(400);
		qm.gainSp(3);
	    qm.gainItem(1332063,1);
	    qm.gainItem(1472000,1);
	    qm.gainItem(2070015, 500);
		qm.forceCompleteQuest();
		qm.dispose();
	    }
	}
}	