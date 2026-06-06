/*
	NPC Name: 		Ponicher
	Description: 		Quest - A Battle Against Vergamot
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1) {
	    status++;
	}
	if (status == 0) {
	    qm.sendNext("你确定现在就要离开吗？BOSS不容易对付，所以如果你能召集一些朋友，就去做吧！准备好了告诉我，我会带你去它等候的地方。好吗？");
	} else if (status == 1) {
	    qm.warp(802000209, 0);
	    //qm.forceStartQuest();
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
}