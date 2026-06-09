/**
	Subway Attendant @ Taipei 101
**/

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.sendNext("一个零食摊突然活了起来开始发疯，正在攻击我们仓库里的一切！");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("你能帮我解决那个零食摊吗？");
    } else if (status == 1) {
	    cm.sendYesNo("你能帮我解决那个零食摊吗？");
    } else if (status == 2) {
	cm.warp(741020102);
	cm.dispose();
    }
}