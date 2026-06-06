/* 
	NPC Name: 		Sunny
	Map(s): 		Orbis: Station<To Ludibrium> (200000121)
	Description: 		Orbis Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    train = cm.getEventManager("Trains");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你一定有什么事情要办吧？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(train == null) {
	    cm.sendNext("船只目前停运中。");
	    cm.dispose();
	} else if (train.getProperty("entry").equals("true")) {
	    cm.sendYesNo("看起来这次航程还有很多空位。请准备好你的票，我就可以让你登船。旅途虽然很长，但你会安全到达目的地的。怎么样？你想搭乘这趟航班吗？");
	} else if (train.getProperty("entry").equals("false") && train.getProperty("docked").equals("true")) {
	    cm.sendNext("列车即将起飞。很抱歉，你必须搭乘下一班了。航班时刻表可以在售票处的乘务员那里查看。");
	    cm.dispose();
	} else {
	    cm.sendNext("我们将在起飞前1分钟开始登船。请耐心等待几分钟。请注意，列车将准时发车，发车前1分钟停止检票，所以请务必准时到达。");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(200000122, 0);
	cm.dispose();
    }
}