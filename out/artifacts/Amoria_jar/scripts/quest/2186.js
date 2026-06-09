var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}
function end(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("什么？你找到了我的眼镜？我先戴上确认一下是不是我的。哦，真的是我的。太感谢你了！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2030019# 5个 #t2030019#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#  1000 经验");
	} else {
		qm.gainItem(2030019,5);
		qm.gainExp(1000);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
