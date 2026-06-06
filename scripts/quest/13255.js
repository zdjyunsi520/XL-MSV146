/* RED 1st impact
	[Christmas] Christmas Everywhere
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		qm.sendNextS("嗨，#b#h0##k，你在枫之谷世界享受圣诞节吗？我准备了一些特别的东西，一套圣诞服装！",1);
	} else if (status == 1) {
        qm.sendNextPrevS("在圣诞活动期间来找我，我会给你#b4套圣诞服装中的1套！#k\r\n不过你#b只能在今天穿上它#k。你可不想过季吧。",1);
    } else if (status == 2) {	  
	    qm.sendNextPrevS("这是你的圣诞服装。在#b圣诞活动#k期间，我每天都会赠送#r圣诞礼物#k，所以希望以后还能见到你！",1);
    } else if (status == 3) {	 
        qm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i1003737# #t1003737# x1#k\r\n\r\n #b#i1052566# #t1052566# x1#k\r\n\r\n享受你的礼物吧！");    
    } else if (status == 4) {	 	   	
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
	}
}