/* Return to Masteria
	BeastTamer Tutorial
	All animals
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	  qm.sendNextS("该走了，小家伙！",4,9390302);
	} else if (status == 1) {
      qm.sendNextPrevS("通心粉！怎么？我就是喜欢这个词。",4,9390300);
	} else if  (status == 2)  {
	  qm.sendNextPrevS("我也是！",4,9390301);
	} else if  (status == 3)  {
	  qm.sendNextPrevS("Hmph.",4,9390303);
	} else if  (status == 4)  {
	  qm.sendNextPrevS("附近有个城镇！我爱城镇！我们去看看吧！",4,9390300);
    } else if  (status == 5)  {
	  qm.sendNextPrevS("我打赌你还不知道怎么像动物冠军那样旅行呢，#b#h0##k。太好了，我来教你！",4,9390300);
    } else if  (status == 6)  {
	  qm.sendNextPrevS("按#bW#k打开世界地图！",4,9390300);
    } else if  (status == 7)  {	
	  qm.sendNextPrevS("打开世界地图后，找到#b树桩镇#k，然后点击它！点击点击点击！不过只点一次就好。我说了三次只是因为我太兴奋了",4,9390300);
    } else if  (status == 8)  {	
	  qm.sendNextPrevS("然后点击世界地图右上方的启用导航按钮！同样，只点一次就好！",4,9390300);
	} else if  (status == 9)  {	
	  qm.sendNextPrevS("我想我应该教你#q110001514#技能，这样你就可以回到#b树桩镇#k了。想用的时候就试试吧。我其实不太在意。\r\n#s110001514#",4,9390303);
	} else if  (status == 10)  {
	  qm.forceStartQuest();
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
		qm.sendNextS("好了，走吧走吧走吧！",4,9390300); 
	} else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
  }
}