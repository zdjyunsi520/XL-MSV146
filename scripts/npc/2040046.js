/*
	Robert Holly - Ludibrium: Ludibrium (220000000)
*/

var status = 0;
	
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.sendNext("我明白了……看来你的朋友没有我想象的那么多。哈哈哈，开个玩笑！不管怎样，如果你改变主意了，请随时回来，我们再谈。如果你交了很多朋友，那么你知道的……嘿嘿……");
	cm.dispose();
	return;
    } else if (status >= 1 && mode == 0) {
	cm.sendNext("我明白了……我觉得你的朋友应该不止这些吧。如果不是的话，那就是你现在身上没有带着240,000金币？不管怎样，如果你改变主意了，回来找我就行。当然，那是等你经济宽裕一些之后……嘿嘿……");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("希望能赚得和昨天一样多……嗯，你好！你不想扩充你的好友列表吗？你看起来像是会有很多朋友的人……怎么样？花点钱我就能帮你搞定。不过记住，这仅对一个角色生效，不会影响你账号上的其他角色。你想扩充好友列表吗？");
    } else if (status == 1) {
	cm.sendYesNo("好的，好决定！其实也不贵。#b240,000金币，我就能给你的好友列表增加5个额外槽位#k。而且，我不单独出售。一旦购买，它将永久存在于你的好友列表中。所以如果你是需要更多空间的人，不如就买吧。怎么样？你愿意花240,000金币吗？");
    } else if (status == 2) {
	var capacity = cm.getBuddyCapacity();
	if (capacity >= 50 || cm.getMeso() < 240000){
	    cm.sendNext("嘿……你确定你有#b240,000金币#k吗？如果有的话，检查一下你的好友列表是否已经扩充到最大了。即使你付了钱，好友列表最多也只能有#b50#k人。");
	    cm.dispose();
	} else {
	    var newcapacity = capacity + 5;
	    cm.gainMeso(-240000);
	    cm.updateBuddyCapacity(newcapacity);
	    cm.sendOk("好了！你的好友列表现在多了5个额外槽位。自己看看吧。如果你还需要更多好友列表空间，你知道找谁。当然，不会是免费的……那么，再见……");
	    cm.dispose();
	}
    }
}