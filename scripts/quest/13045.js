/* Dawnveil
    [Halloween] A Fine, Fine Costume
	Maple Administrator
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.sendNext("嘻！嘿，我为所有万圣节枫之谷玩家准备了#b一些小东西#k。说实话，我买了一大堆服装，现在需要处理掉。我的猫超级过敏。今天我应该发哪一套呢？");
	} else if (status == 1) {		
	    qm.sendNextPrev("在万圣节活动期间来找我，我会给你#b6套万圣节服装中的1套！#k\r\n不过你#b只能在今天穿上它#k。你可不想落伍吧。");	
    } else if (status == 2) {	
	    qm.sendNextPrev("此外，你必须穿着#r万圣节服装#k才能进入#e#b枫之城堡#k，这里只在万圣节活动期间开放！");	
	} else if (status == 3) {
	    qm.sendNextPrev("这是你的万圣节服装！#r服装狂欢节#k将持续整个#b万圣节活动#k期间，保持恐怖气氛吧！");
    } else if (status == 4) {	
	    qm.sendSimple("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#i1002877##b奶牛面具 x1#k\r\n#i1052179##b奶牛服装 x1#k\r\n\r\n享受你的礼物吧！");
	} else if (status == 5) {
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1002877, 1);
		qm.gainItem(1052179, 1);
		qm.gainItem(4310101, 2);
		qm.dispose();
	}
}

function end(mode, type, selection) {
	   qm.dispose();		
}