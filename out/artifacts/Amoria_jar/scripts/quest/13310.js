/* Return to Masteria
	Lucky Lucky Monstory
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    qm.sendOk("等你改变主意再来找我吧。因为你一定会改变主意的。没错。");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	  qm.sendAcceptDecline("你是来玩幸运怪物彩票的吗？");
	} else if (status == 1) {
	  qm.sendNextS("其实很简单。如果你狩猎怪物，你会获得#b#t2431318##k。你可以用它来获取特定的怪物卡。之后，怪物卡会自动列入你的怪物卡收藏中。",1);//noescape
	} else if  (status == 2)  {
	  qm.sendNextPrevS("你可以通过点击屏幕左侧的活动提示图标来查看你收集到的卡片。",1);
	} else if  (status == 3)  {
	  qm.sendNextPrevS("一旦你集齐六张怪物卡，就赶紧疯狂点击右边的#b领取奖励按钮#k来获得礼物。然后你可以继续享受活动的其他内容。或者做你想做的事。",1);
	} else if  (status == 4)  {
	  qm.sendNextPrevS("此外，你每天最多可以获得三行怪物卡。保留你收集到的怪物卡，在#b每周一下午6点#k与中奖怪物卡进行对比。如果你持有中奖怪物卡，你将获得大奖。超大的奖！",1);
	} else if  (status == 5)  {
	  qm.sendNextPrevS("如果一行中的六张卡片都与中奖卡片完全相同，你就赢得一等奖！如果有5张相同，你将赢得二等奖。如果有4张匹配，你就赢得三等奖！如果少于4张匹配的话...只要不少于4张就行了，那就不会是问题。",1);
	} else if  (status == 6)  {
	  qm.forceStartQuest();
	  qm.forceCompleteQuest();
	  qm.dispose();
	}
}