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
	  qm.sendNext("嘿！看起来你打那些狼之后#b升级#k了");
	} else if (status == 1) {
	  qm.sendNextPrevS("是的，然后呢？",14);
	} else if  (status == 2)  {
	  qm.sendNextPrev("嘿嘿，你升级了！你看，打怪会获得#b经验值#k。当经验值足够多的时候，你就会#b升级#k！");
	} else if  (status == 3)  {
	  qm.sendNextPrevS("听起来很英雄。再多告诉我一些！",14);
	} else if  (status == 4)  {
	  qm.sendNextPrev("每次升级你都会获得更多HP。你还会获得#b能力点#k，可以用来提升你的属性。不过我建议直接用属性窗口里的#b自动分配#k按钮，那样快多了。");
	} else if  (status == 5)  {
	  qm.sendAcceptDecline("现在就做，现在就做！打开你的#b属性窗口#k分配你的能力点！");
	} else if  (status == 6)  {
	  qm.sendNext("按#b[S]#k打开属性窗口。\r\n#i03800628#");
	} else if  (status == 7)  {
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.gainExp(50);
	  qm.gainAp(10);
	  qm.OpenUI(2);
	  qm.dispose();
	}
}