/* Dawnveil
    [Halloween] Cassandra, Lord of Candy
	Cassandra
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("嘿，#b#h ##k。你准备好在万圣节活动中成为一个好伙伴了吗？我准备了一些小东西。\r\n嘿，你能猜出这是什么吗？\r\n\r\n#i3994650##b幽灵伙伴糖果#k\r\n\r\n这是给参加万圣节活动的人准备的万圣节糖果！");
	} else if (status == 1) {		
	    qm.sendNextPrev("对任何枫之谷好友#b右键点击#k，选择#b赠送万圣节糖果#k来分享。\r\n你会获得一个#b增益效果，每送出5颗糖果还能获得一个礼物盒#k！");	
    } else if (status == 2) {	
	    qm.sendNextPrev("但是，你每天只能获得#b10#k颗糖果！明智地选择赠送对象吧。");	
	} else if (status == 3) {
	    qm.sendNextPrev("我会在每天#b晚上7:15#k公布#r前5名#k糖果赠送者。你可以在#b午夜到晚上7点#k之间赠送糖果，所以要勤快一点哦！");
    } else if (status == 4) {	
	    qm.sendPrev("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i3994650##b幽灵伙伴糖果 x1#k\r\n\r\n谢谢你的聆听！这里有些糖果#b给你的朋友们#k。\r\n万圣节快乐！");
	} else if (status == 5) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(3994650, 1);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	   qm.dispose();		
}