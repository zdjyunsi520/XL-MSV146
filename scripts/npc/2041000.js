/* Author: Xterminator
	NPC Name: 		Tian
	Map(s): 		Ludibrium: Station<Orbis> (220000110)
	Description: 		Ludibrium Ticketing Usher
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
	cm.sendNext("你在这里一定有事要办吧？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(train == null) {
	    cm.sendNext("目前船已停运。");
	    cm.dispose();
	} else if(train.getProperty("entry").equals("true")) {
	    cm.sendYesNo("看起来这次行程还有不少空位。请准备好你的票，我好让你进去。旅途会很长，但你会顺利到达目的地的。怎么样？你要上车吗？");
	} else if(train.getProperty("entry").equals("false") && train.getProperty("docked").equals("true")) {
	    cm.sendNext("列车正在准备出发。很抱歉，你只能等下一班了。班次时刻表可以在售票处的服务员那里查看。");
	    cm.dispose();
	} else {
	    cm.sendNext("我们将在出发前1分钟开始检票。请耐心等待几分钟。请注意，地铁将准时出发，我们在出发前1分钟停止检票，所以请务必准时到达。");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(220000111, 0);
	cm.dispose();
    }
}