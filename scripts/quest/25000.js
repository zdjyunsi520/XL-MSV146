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
	qm.sendPlayerToNpc("我才刚刚开始恢复多年前的那份力量。然而，虽然我还不是一个伟大的盗贼，但我必须准备登场了。");
    } else if (status == 1) {
	qm.sendNextS("每个英雄都要迈出他们的第一步，#h #。你的第一步将踏入埃雷岛。一切准备就绪，你只需离开飞船然后降落。", 1);
    } else if (status == 2) {
	qm.sendPlayerToNpc("对世界上最伟大的盗贼来说这不成问题！");
    } else if (status == 3) {
	qm.sendNextPrevS("你现在可以出发了，你的旅程从这里开始。", 1);
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.dispose();
    }
}