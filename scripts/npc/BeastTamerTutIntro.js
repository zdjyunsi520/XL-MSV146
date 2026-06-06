/* Return to Masteria
    BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
	    cm.forceStartQuest(59000);
	    cm.forceCompleteQuest(59000);
	    cm.forceStartQuest(59001);
	    cm.forceCompleteQuest(59001);
		cm.forceStartQuest(59002);
	    cm.forceCompleteQuest(59002);
		cm.forceStartQuest(59003);
	    cm.forceCompleteQuest(59003);
		cm.forceStartQuest(59004);
	    cm.forceCompleteQuest(59004);
		cm.forceStartQuest(59005);
	    cm.forceCompleteQuest(59005);
		cm.forceStartQuest(59006);
	    cm.forceCompleteQuest(59006);
		cm.forceStartQuest(59007);
	    cm.forceCompleteQuest(59007);
		cm.forceStartQuest(59008);
	    cm.forceCompleteQuest(59008);
		cm.forceStartQuest(59009);
	    cm.forceCompleteQuest(59009);
		cm.forceStartQuest(59011);
	    cm.forceCompleteQuest(59011);
		cm.forceStartQuest(59013);
	    cm.forceCompleteQuest(59013);
		cm.forceStartQuest(59015);
	    cm.forceCompleteQuest(59015);
		cm.forceStartQuest(59016);
	    cm.forceCompleteQuest(59016);
		cm.forceStartQuest(59017);
	    cm.forceCompleteQuest(59017);
		cm.forceStartQuest(59018);
	    cm.forceCompleteQuest(59018);
		cm.forceStartQuest(59018);
	    cm.forceCompleteQuest(59018);
		cm.forceStartQuest(59019);
	    cm.forceCompleteQuest(59019);
		cm.forceStartQuest(59020);
	    cm.forceCompleteQuest(59020);
		cm.gainItem(2000001, 50);//Orange Potion
        cm.gainItem(2000006, 50);//Mana Elixir
		cm.gainItem(1142673, 1);//Sprout Guardian
        cm.gainItem(1352810, 1);//Tiny Whisper
		cm.warp(100000000,0);
		cm.EnableUI(0);
		cm.dispose();
      status--;
    }
    if (status == 0) {
	    cm.sendYesNoS("咚，咚，咚。英雄主题曲！我是#b#h0##k，来自阿尔博伦森林深处的一个小镇！",5,9010000);
	} else if (status == 1) {	
	    cm.sendNextS("我有最酷的耳朵和尾巴，咚咚咚。超级英雄范儿，咚咚咚。",15);
	} else if (status == 2) {	
	    cm.sendDirectionStatus(1,500);
		cm.sendDirectionFacialExpression(1,2000);
		cm.sendDirectionStatus(1,500);
	    cm.sendNextS("总有一天我要成为英雄。成为英雄！击鼓！",15);
	} else if (status == 3) {	
	    cm.sendDirectionStatus(1,500);
		cm.sendDirectionFacialExpression(0,5000);
		cm.sendDirectionStatus(1,500);
	    cm.sendNextS("真的哦。Rosanna奶奶每天晚上都给我讲睡前故事...",15);
	} else if (status == 4) {	
	    cm.sendNextPrevS("关于#b五位勇敢的英雄#k封印了可怕的#b黑魔法师#k的故事！\r\n砰砰，轰隆！我迟早也要成为像他们一样的英雄！",15);
	} else if (status == 5) {	
	    cm.sendNextPrevS("关于#b五位勇敢的英雄#k封印了可怕的#b黑魔法师#k的故事！\r\n砰砰，轰隆！我迟早也要成为像他们一样的英雄！",15);
	} else if (status == 6) {
	    cm.dispose();
	    cm.forceStartQuest(59000);
	    cm.forceCompleteQuest(59000);
	    cm.forceStartQuest(59001);
	    cm.forceCompleteQuest(59001);
		cm.forceStartQuest(59002);
	    cm.forceCompleteQuest(59002);
		cm.forceStartQuest(59003);
	    cm.forceCompleteQuest(59003);
		cm.forceStartQuest(59004);
	    cm.forceCompleteQuest(59004);
		cm.forceStartQuest(59005);
	    cm.forceCompleteQuest(59005);
		cm.forceStartQuest(59006);
	    cm.forceCompleteQuest(59006);
		cm.forceStartQuest(59007);
	    cm.forceCompleteQuest(59007);
		cm.forceStartQuest(59008);
	    cm.forceCompleteQuest(59008);
		cm.forceStartQuest(59009);
	    cm.forceCompleteQuest(59009);
		cm.forceStartQuest(59011);
	    cm.forceCompleteQuest(59011);
		cm.forceStartQuest(59013);
	    cm.forceCompleteQuest(59013);
		cm.forceStartQuest(59015);
	    cm.forceCompleteQuest(59015);
		cm.forceStartQuest(59016);
	    cm.forceCompleteQuest(59016);
		cm.forceStartQuest(59017);
	    cm.forceCompleteQuest(59017);
		cm.forceStartQuest(59326);
		cm.forceCompleteQuest(59326);
		cm.forceStartQuest(28862);
		cm.forceCompleteQuest(28862);
        cm.gainItem(2000001, 50);//Orange Potion
        cm.gainItem(2000006, 50);//Mana Elixir
		cm.gainItem(1142434,1);
		cm.gainItem(1142673, 1);//Sprout Guardian
        cm.gainItem(1352810, 1);//Tiny Whisper
		cm.warp(866137000,0);
		cm.EnableUI(0);
    }
}