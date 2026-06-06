var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		qm.dispose();
		return;
	}
	if (status == 0) {
		qm.sendNext("你好！这不是出门旅行的完美天气吗？我是斯基普，这艘好船的船长。你一定是一位新冒险者，嗯？很高兴认识你。");
	} else if (status == 1) {
		qm.sendAcceptDecline("我们还没准备好出发，所以在等候期间随意在船上逛逛吧。");
	} else if (status == 2) {
		qm.forceCompleteQuest();
		qm.warp(3000000,0);
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
