/* RED 1st impact
    Winter event
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("无论何时你想了解更多关于冬季活动的信息，都可以告诉我。");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendYesNo("你好#b#ho##k。你是来了解新的#e冬季活动#n的吗？");
	} else if (status == 1) {
		qm.sendNextS("在冬季活动期间，所有13级以上#e在线30分钟#n的玩家都将获得一份特别礼物。",1);
	} else if (status == 2) {
		qm.sendNextPrevS("计时器会在你登录时自动启动。当你在线#e30分钟#n后，点击左侧的通知图标，然后点击下方的图标来领取奖励。\r\n\r\n #i3800578# #e冬季活动通知图标#n",1);		
	} else if (status == 3) {
	    qm.sendNextPrevS("你也可以点击#i3800578#来查看还需要多久才能领取奖励。",1);
	} else if (status == 4) {	
	    qm.sendNextPrevS("计时器已经开始了！在我们结束对话后查看提示吧。只要知道如果你在活动期间#e#r登出#k#n，计时器会#e#r重置#k#n。",1);
	} else if (status == 5) {
        qm.forceStartQuest();
        qm.dispose();
    }
}