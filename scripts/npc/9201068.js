var sw;

function start() {
    status = -1;
    sw = cm.getEventManager("Subway");
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendNext("看来这趟列车还有很多空位。请准备好你的车票让我检票，旅程会比较长，但你会顺利到达目的地。怎么样？要上车吗？");
	cm.dispose();
	return;
    }
    if (status == 0) {
	if(sw == null) {
	    cm.dispose();
	} else if(sw.getProperty("entry").equals("true")) {
	    cm.sendYesNo("地铁正在准备发车。很抱歉，你只能等下一班了。列车时刻表可以在售票处的乘务员那里查询。");
	} else if(sw.getProperty("entry").equals("false") && sw.getProperty("docked").equals("true")) {
	    cm.sendNext("我们将在发车前1分钟开始检票。请耐心等待几分钟。请注意地铁将准时发车，我们在发车前1分钟停止检票，所以请务必准时到达。");
	    cm.dispose();
	} else {
	    cm.sendNext("哦不...我觉得你没有带车票。没有车票我不能让你进去。请到售票处购买车票。");
	    cm.dispose();
	}
    } else if(status == 1) {
	if(!cm.haveItem(4031713)) {
	    cm.sendNext("哦不...我觉得你没有带车票。没有车票我不能让你进去。请到售票处购买车票。");
	} else {
	    cm.gainItem(4031713,-1);
	    cm.warp(600010002);
	}
	cm.dispose();
    }
}
