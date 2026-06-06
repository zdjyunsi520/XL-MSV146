var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendNext("你好朋友，我是#b比约恩！#k，我需要一些帮助，你能帮帮我吗？");
    } else if (status == 1) {
	qm.sendAcceptDecline("哦对了！非常感谢，但你确定你准备好了吗？");
    } else if (status == 2) {
	qm.forceStartQuest();
	qm.dispose();
    }
}

