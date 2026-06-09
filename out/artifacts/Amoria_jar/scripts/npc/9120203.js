/* Konpei
	Showa
*/

var flash;
var status = 0;

function start() {
    flash = cm.haveItem(4000141);
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.sendOk("哇，你做到了！你知道，那个人确实很顽固。希望这能给这里带来久违的和平，但我总担心最坏的情况。不管怎样，我很高兴他终于被解决了。");
	cm.dispose();
	return;
    }

    if (status == 1) {
	if (flash) {
	    cm.sendNext("你想返回昭和村吗？");
	} else {
	    cm.sendYesNo("没错！首领掉落的手电筒由我来保管以备将来使用。既然我们知道那个人到底是谁了，我觉得和平的日子可能要来了。不得不说，发现那个怪物竟然是他...真是让我大吃一惊。");
	}
    } else if (status == 2) {
	if (flash) {
	    cm.sendNext("没错！首领掉落的手电筒由我来保管以备将来使用。既然我们知道那个人到底是谁了，我觉得和平的日子可能要来了。不得不说，发现那个怪物竟然是他...真是让我大吃一惊。");
	} else {
	    cm.warp(801000000, 0);
	    cm.dispose();
	}
    } else if (status == 3) {
	cm.gainItem(4000141, -1);
	cm.gainItem(2000004, 200);
	cm.warp(801000000, 0);
	cm.dispose();
    }
}