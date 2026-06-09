/* Return to Masteria
    [Collection] Cassandra's Latest Craze
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("你应该更加努力地提升自己。我的意思是，你的双手是你身体最重要的部分！");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("嗨，#b#h0##k！你喜欢你的双手吗？希望如此，因为经常用手的人更聪明！我是从书上看到的，所以一定是真的！今年我有一个让双手忙碌的绝佳计划。你好奇吗？");
	} else if (status == 1) {
	    qm.sendNextS("我的新爱好听起来可能不太宏大，但可能是最好的一个！我从枫之谷世界的不同地方收集鹅卵石，然后把它们雕刻成小怪物！听起来是不是很棒？我既用了双手又发挥了创意。",1);
	} else if (status == 2) {
	   	qm.sendNextPrevS("既然你还在听，你一定很感兴趣。那么，你看到左边卡桑德拉收藏的图标了吗？它会一直保留到#b 2014年6月3日 #k，这是通往我神奇的怪物雕像世界的关键。",1);
	} else if (status == 3) {
		qm.sendNextPrevS("你所要做的就是用怪物雕像填满那些漂亮的小空位。如果你想要雕像，只要你#b完成左侧活动提示中的一个<卡桑德拉的收藏>任务#k，我就会给你一个。有时候，如果我特别开心，可能还会给你#i3994717# #r#t3994717##k。那些可以放在任何位置！我就是太喜欢它们了。",1);
	} else if (status == 4) {
		qm.sendNextPrevS("#i3800451#\r\n\r\n如果你能将怪物雕像#r横向、纵向或对角线排列成一条线#k，你就完成了一行！完成#r三行#k，你就完成了整个收藏！想完成多少就完成多少...我想用这些雕像填满我的客厅！",1);
	} else if (status == 5) {
		qm.sendNextPrevS("每当你完成一行，我就会送你一份礼物。当你完成三行并完成整个收藏时，你也会得到一份。祝你好运！",1);
	} else if (status == 6) {
        qm.forceStartQuest();
		qm.forceCompleteQuest();
        qm.dispose();
    }
}