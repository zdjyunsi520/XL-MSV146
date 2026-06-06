var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}
function end(mode, type, selection) {
    if (mode == 1) status++; 
    else 
    {
		if (status == 0) {
			qm.sendNext("文斯还有话要告诉你。去听他说吧`");
			qm.dispose();
			return;
		}
		status--;
    }
    if (status == 0) {
		qm.askAcceptDecline("你获得了高级猎人称号！");
    } else if (status == 1) {
		qm.forceCompleteQuest();
        qm.gainItem(2043602,5);
        qm.gainItem(2043402,5);
        var rnum = Math.floor(Math.random() * 10);
        if (rnum<=2)qm.gainItem(2046374,1);
        qm.dispose();
    }
}
