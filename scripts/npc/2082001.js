/* 
	NPC Name: 		Tommie
	Map(s): 		Leafre: Cabin<To Orbis> (240000110)
	Description: 		Leafre Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    flight = cm.getEventManager("Flight");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你一定有什么事情要处理，对吧？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(flight == null) {
	    cm.sendNext("目前船只停运中。");
	    cm.dispose();
	} else if(flight.getProperty("entry").equals("true")) {
	    cm.sendYesNo("看起来这次航班还有很多空位。请准备好你的船票，以便我让你登船。旅途虽然漫长，但你一定能安全到达目的地。你觉得呢？你想搭这班船吗？");
	} else if(flight.getProperty("entry").equals("false") && flight.getProperty("docked").equals("true")) {
	    cm.sendNext("航班正在准备起飞。很抱歉，你得搭乘下一班了。班次时刻表可以在售票处的引导员那里查看。");
	    cm.dispose();
	} else {
	    cm.sendNext("我们将在起飞前1分钟开始检票。请耐心等待几分钟。请注意，船只将准时起飞，起飞前1分钟停止检票，所以请务必准时到达。");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(240000111, 0);
	cm.dispose();
    }
}