var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是一个重要的决定。");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendNext("嗯……你好朋友，我遇到了大麻烦，我在找一个能帮我的人，你就是我要找的那个人吗？");
    } else if (status == 1) {
	qm.sendPlayerToNpc("#b我一定能帮到你。");
    } else if (status == 2) {
	qm.sendNext("你真是救了我的命，希望你不会倒下！");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.dispose();
    }
}
