/* Author: Xterminator
	NPC Name: 		Mr. Goldstein
	Map(s): 		Victoria Road : Lith Harbour (104000000)
	Description:		Extends Buddy List
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.sendNext("我看得出来……你的朋友没有我想象的那么多。哈哈哈，开玩笑的！总之，如果你改变主意了，请随时回来，我们再谈生意。如果你交了更多朋友，那……嘿嘿……");
	    cm.safeDispose();
	    return;
	} else if (status >= 1) {
	    cm.sendNext("我看得出来……我觉得你的朋友没有我想象的那么多。如果不是，那就是你现在没有25万金币？总之，如果你改变主意了，回来找我们谈生意就好。当然，等你经济宽裕一些之后……嘿嘿……");
	    cm.safeDispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("希望我今天能赚到和昨天一样多的钱……嗯，你好！你不想扩充你的好友列表吗？你看起来像是有很多朋友的人……你觉得怎么样？花点钱我可以帮你实现。不过记住，它只对一个角色有效，不会影响你账号上的其他角色。你想扩充好友列表吗？");
    } else if (status == 1) {
	cm.sendYesNo("好的，好主意！其实没那么贵。#b25万金币，我会在你的好友列表中增加5个空位#k。而且，我不单独出售。一旦购买，它会永久保留在你的好友列表中。所以如果你需要更多空间，不妨就扩充一下。你觉得怎么样？你愿意花25万金币吗？");
    } else if (status == 2) {
	var capacity = cm.getBuddyCapacity();
	if (capacity >= 100 || cm.getMeso() < 250000) {
	    cm.sendNext("嘿……你确定你有#b25万金币#k吗？如果有的话，请检查一下你的好友列表是否已经扩充到上限了。即使你付了钱，好友列表最多也只能有#b100#k个位置。");
	} else {
	    var newcapacity = capacity + 5;
	    cm.gainMeso(-250000);
	    cm.updateBuddyCapacity(newcapacity);
	    cm.sendOk("好了！你的好友列表现在多了5个空位。你自己看看吧。如果你还需要更多好友列表的空间，你知道该找谁。当然，不会是免费的……那么，再见……");
	}
	cm.safeDispose();
    }
}