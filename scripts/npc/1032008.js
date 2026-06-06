/* 
	NPC Name: 		Cherry
	Map(s): 		Victoria Road : Ellinia Station (101000300)
	Description: 		Ellinia Ticketing Usher
*/
var status = 0;

function start() {
    status = -1;
    boat = cm.getEventManager("Boats");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("你一定在这里有什么事情要办吧？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(boat == null) {
	    cm.sendNext("船只目前停运中。");
	    cm.dispose();
	} else if(boat.getProperty("entry").equals("true")) {
	    cm.sendYesNo("看起来这趟航班还有很多空位。请准备好你的票让我检票，旅程会比较长，但你会安全到达目的地。怎么样？你想搭这趟航班吗？");
	} else if(boat.getProperty("entry").equals("false") && boat.getProperty("docked").equals("true")) {
	    cm.sendNext("船正在准备起飞。很抱歉，你得搭乘下一班了。航班时刻表可以通过售票处的服务员查看。");
	    cm.dispose();
	} else {
	    cm.sendNext("我们将在起飞前1分钟开始检票。请耐心等待几分钟。请注意，飞船会准时起飞，我们在起飞前1分钟停止检票，所以请确保准时到达。");
	    cm.dispose();
	}
    } else if(status == 1) {
	cm.warp(104020111, 0);
	cm.dispose();
    }
}