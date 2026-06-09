var status = -1;
function action(mode, type, selection) {
    status++;
    if (status == 0) {
    	cm.sendNext("如果琼太胆小了，我们就把他留在这里。但为什么非要玩捉迷藏？我们玩点酷的吧...");
    } else if (status == 1) {
	cm.sendNext("我不是那个意思...");
    	cm.dispose();
    }
}