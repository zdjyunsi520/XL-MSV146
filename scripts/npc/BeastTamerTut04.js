/* Return to Masteria
    BeastTamer Tutorial
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextS("有的！只要转过身去一下。很快就好。我得，呃，做点事。",15);
    } else if (status == 1) {
		cm.sendNextPrevS("好了没？",1);
    } else if (status == 2) {
	    cm.sendNextPrevS("不许偷看。先别转身！再给我一秒钟",15);
	} else if (status == 3) {
	    cm.sendNextPrevS("不许偷看。先别转身！再给我一秒钟",1);
	} else if (status == 4) {
		cm.dispose();
	}
}