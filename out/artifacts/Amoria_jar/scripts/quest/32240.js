/* Grand Athenaeum
    The Explorer Book And A Maple Leaf
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 3) {
		    qm.sendNextS("嗯？不？为什么？那你的冒险呢？你的记忆呢？我的乐趣呢？",4,9010010);
            qm.dispose();
        status--;
    }
    if (status == 0) {
	  qm.sendNextS("你好#b#h0##k！\r\n我是#b卡桑德拉#k。",4,9010010);
	} else if (status == 1) {
      qm.sendNextPrevS("我怎么知道你的名字？这是个愚蠢的问题。我是卡桑德拉。我无所不知！",4,9010010);
	} else if  (status == 2)  {
	  qm.sendNextPrevS("我来给你送礼物。这是一本#b冒险家之书#k，有点像日记。你可以在里面记录你所有的精彩冒险！然后我就可以在后面阅读了！",4,9010010);
	} else if  (status == 3)  {
	  qm.sendYesNoS("你想要这本#b冒险家之书#k吗？你想要的，对吧？",16);
	} else if  (status == 4)  {
	  qm.sendNextS("让我看看……我知道有一本书特别适合像你这样的冒险家……",4,9010010);
    } else if  (status == 5)  {
	  qm.sendNextPrevS("找到了！给你。在我离开后好好看看吧。",4,9010010);
    } else if  (status == 6)  {
	  qm.sendPrevS("好了，祝你冒险愉快！",4,9010010);
    } else if  (status == 7)  {	
      qm.forceStartQuest();
	  qm.gainItem(4460000,1);
	  qm.dispose();
	}
 }

function end(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNextS("一本#b冒险家之书#k？所以我可以在这里记录所有的冒险经历？",16);
	} else if (status == 1) {
	    qm.sendNextPrevS("我已经有过一些冒险了，但对冒险岛世界还是不太了解。是时候重新开始了！不过……",16);
	} else if (status == 2) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
        qm.showMapleLeafScene();
		qm.gainItem(2040804,1);
	    qm.dispose();
	}
}