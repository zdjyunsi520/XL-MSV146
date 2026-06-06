var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}
function end(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("我恨不得把我们做的事当着#p2154009#的面炫耀一番，但如果他召集所有手下，情况可能就不妙了。我们离开这里吧。听我口令使用地下基地#t4032740#。一……二……三！");
	} else {
		qm.warp(310010000);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
